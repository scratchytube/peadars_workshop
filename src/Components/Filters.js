import React from 'react'
import { useSelector } from 'react-redux'

const Filters = () => {

    const max_price = useSelector(state => state.product.filters.max_price)
    const price = useSelector(state => state.product.filters.price)

    console.log(max_price, price)

    return (
        <div>
            <h4>filters</h4>
        </div>
    )
}

export default Filters
