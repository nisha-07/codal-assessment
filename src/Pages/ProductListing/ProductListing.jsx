import React, { useState } from 'react'

import ProductCard from '../../components/ProductCard/ProductCard'
import SortingFilter from '../../components/Filter/SortingFilter'
import classes from './ProductListing.module.scss'
import products from '../../data/products.json'

const ProductListing = () => {
	// Default sorting set to "low-to-high"
	const [sortOrder, setSortOrder] = useState('low-to-high')
	const [currentPage, setCurrentPage] = useState(1)
	const productsPerPage = 10 // Number of products per page

	// Function to sort products based on the selected order
	const sortedProducts = [...products].sort((a, b) => {
		if (sortOrder === 'low-to-high') return a.price - b.price
		if (sortOrder === 'high-to-low') return b.price - a.price
		return 0
	})

	// Calculate indices for products to display
	const indexOfLastProduct = currentPage * productsPerPage
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage
	const currentProducts = sortedProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	)

	// Calculate total pages
	const totalPages = Math.ceil(products.length / productsPerPage)

	// Handlers for page navigation
	const handlePageChange = (pageNumber) => {
		if (pageNumber > 0 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber)
		}
	}

	return (
		<div className={classes.container}>
			<p className={classes.title}>Hydraulic Fluids</p>
			<p>
				Hydraulic fluids are specialized liquids used in hydraulic
				systems to transfer power, lubricate components, and reduce wear
				and tear. They come in various types, such as mineral-based,
				synthetic, and water-based fluids, each designed for specific
				applications and operating conditions. These fluids are not only carriers of power
				but also effective lubricants. They reduce friction between moving components,
				preventing wear and tear, and ensuring the smooth operation of hydraulic systems,
				which extends their lifespan and reduces maintenance needs.
			</p>
			<div className={classes['sub-container']}>
				<span className={classes['current-page']}>
					Showing{' '}
					<span>
						{indexOfFirstProduct + 1}-
						{Math.min(indexOfLastProduct, products.length)}{' '}
					</span>{' '}
					of {products.length}
				</span>
				<div className={classes.pagination}>
					{/* Sorting filter by price */}
					<SortingFilter
						sortOrder={sortOrder}
						onSortChange={setSortOrder}
					/>
					<div>
                        <button
                            className={classes["page-button"]}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            {'<'}
                        </button>
                        {/* Display Current Page and Total Pages */}
                        <span className={classes.pageInfo}>
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            className={classes["page-button"]}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            {'>'}
                        </button>
                    </div>
				</div>
			</div>
			<div className={classes.products}>
				{currentProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
            <div className={classes["bottom-container"]}>
                        <button
                            className={classes["page-button"]}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            {'<'}
                        </button>
                        {/* Display Current Page and Total Pages */}
                        <span className={classes.pageInfo}>
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            className={classes["page-button"]}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            {'>'}
                        </button>
                    </div>
				
		</div>
	)
}

export default ProductListing
