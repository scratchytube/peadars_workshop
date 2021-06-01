import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { BsFillGridFill, BsList } from 'react-icons/bs'

const Sort = () => {
    const products = useSelector(state => state.product.filtered_products)
    const theGridView = useSelector(state => state.product.isGridView)

    return (
        <Wrapper>
            <div className="btn-container">
                <button type="button" className={`${ theGridView ? 'active' : null }`} >
                    <BsFillGridFill />
                </button>
                <button type="button" className={`${ theGridView ? null : 'active' }`}>
                    <BsList />
                </button>
            </div>
            <p>
                { products.length } products found
            </p>
            <hr />
            <form>
                <label htmlFor="sort">sort by</label>
                <select name="sort" id="sort" className='sort-input' >
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (a-z)</option>
                    <option value="name-z">name (z-a)</option>
                </select>
            </form>
        </Wrapper>
    )
}

export default Sort

const Wrapper = styled.section`

`
