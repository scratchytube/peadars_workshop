import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateFilters } from '../redux/product'
import { formatPrice } from '../utils/helpers'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
    const dispatch = useDispatch()

    const allProducts = useSelector(state => state.product.products)
    const filters = useSelector(state => state.product.filters)
    const { text, category, min_price, max_price, price } = filters 

    const handleUpdateFilters = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (name === 'category') {
            value = e.target.textContent
        }
        if (name === 'price') {
            value = parseInt(value)
        }
        dispatch(updateFilters({name, value}))
    }

    const handleClearFilters = () => {

    }

    const getUniqueValuesFromProducts = (allTheProducts) => {
        const unique = allTheProducts.map(item => item['category'])
        return ['all', ...new Set(unique)]
    }
    const categories = getUniqueValuesFromProducts(allProducts)
    
    const renderCategoryButtons = categories.map((c, index) => {
        return <button 
        key={index}
        name='category'
        onClick={handleUpdateFilters}
        className={`${ category === c.toLowerCase() ? 'active' : null }`}
        >{c}</button>
    })


    return (
       <Wrapper>
           <div className="content">
               <form onSubmit={(e) => e.preventDefault()}>
                   <div className="form-control">
                       <input 
                       type="text" 
                       name='text' 
                       placeholder='search' 
                       className='search-input' 
                       value={text} 
                       onChange={handleUpdateFilters} />
                   </div>
                   <div className="form-control">
                       <h5>categories</h5>
                       <div>
                        {renderCategoryButtons}
                       </div>
                   </div>
                   <div className="form-control">
                       <h5>price</h5>
                       <p className="price">
                           {formatPrice(price)}
                       </p>
                       <input 
                       type="range" 
                       name="price" 
                       onChange={handleUpdateFilters} 
                       min={min_price} 
                       max={max_price} 
                       value={price}
                       />
                   </div>
               </form>
           </div>
       </Wrapper>
    )
}

export default Filters

const Wrapper = styled.section`

`
