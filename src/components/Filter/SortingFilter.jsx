import React from 'react'
import classes from './SortingFilter.module.scss'

const SortingFilter = ({ sortOrder, onSortChange }) => {
	return (
		<div className={classes["sorting-filter"]}>
			<label htmlFor="sort" className={classes.label}>
				Sort By:
			</label>
			<select
				id="sort"
				value={sortOrder}
				onChange={(e) => onSortChange(e.target.value)}
				className={classes.select}
			>
				<option value="low-to-high" default>Price: Low to High</option>
				<option value="high-to-low">Price: High to Low</option>
			</select>
		</div>
	)
}

export default SortingFilter
