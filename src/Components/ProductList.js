import React from 'react'
import { useSelector } from 'react-redux'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
    const products = useSelector(state => state.product.filtered_products)
    const isGridView = useSelector(state => state.product.isGridView)

    if (products.length < 1) {
        <h5 style={{ textTransform: 'none' }} >
            Sorry no products match your search
        </h5>
    }

    if (isGridView === false) {
        return <ListView products={products} />
    }

    return (

        // { isGridView ? <GridView /> : <ListView /> }
        <GridView products={products}>product list</GridView>
    )
}

export default ProductList
