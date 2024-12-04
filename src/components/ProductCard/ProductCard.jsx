import classes from "./ProductCard.module.scss"

const ProductCard = ({ product }) => {
	return (
		<div key={product.id} className={classes.card}>
			<img
				src="https://placehold.co/400"
				width={310}
				alt="product-image"
			/>
			<p className={classes.brand}>{product.brand}</p>
			<p className={classes.name}>{product.name}</p>
			<p className={classes.sku}>SKU: {product.sku} {product.isMultiSizeAvailable && <span>Mutliple Sizes Available</span>}</p>
			<div>
                From
                <p className={classes.price}>${product.price}</p>
            </div>
            <button className={classes.button} onClick={() => alert(`${product.name} product is viewed`)}>VIEW PRODUCT</button>
		</div>
	)
}

export default ProductCard
