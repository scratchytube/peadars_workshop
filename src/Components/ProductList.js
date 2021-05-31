import React from 'react'
import { useSelector } from 'react-redux'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
    const products = useSelector(state => state.product.filtered_products)
    const gridView = useSelector(state => state.product.gridView)

    return (
        <GridView products={products}>product list</GridView>
    )
}

export default ProductList
