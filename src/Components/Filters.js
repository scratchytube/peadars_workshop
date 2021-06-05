import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filteredProducts, updateFilters, clearFilters } from '../redux/product'
import { formatPrice } from '../utils/helpers'
import styled from 'styled-components'

const Filters = () => {
    const dispatch = useDispatch()

    const allProducts = useSelector(state => state.product.products)
    const filters = useSelector(state => state.product.filters)
    const { text, category, min_price, max_price, price } = filters 

    console.log(category)

    const handleUpdateFilters = (e) => {
        let name = e.target.name
        let value = e.target.value
        
        if (name === 'category') {
            // we need the textContent from the button
            value = e.target.textContent
        }
        if (name === 'price') {
            value = parseInt(value)
        }
        dispatch(updateFilters({name, value}))
    }

    useEffect(() => {
        const filterByText = [...allProducts].filter((product) => (product.name.toLowerCase().includes(text)))
        dispatch(filteredProducts(filterByText))
    }, [dispatch, allProducts, text])

    useEffect(() => {
        if (category !== 'all') {
            const filterByCategory = [...allProducts].filter((product) => product.category === category)
            dispatch(filteredProducts(filterByCategory))
        }
        if (category === 'all') {
            dispatch(filteredProducts(allProducts))
        }
    }, [dispatch, allProducts, category])
    

    const handleClearFilters = () => {
        dispatch(clearFilters())
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
               <button type='button' className='clear-btn' onClick={handleClearFilters} >clear filters</button>
           </div>
       </Wrapper>
    )
}

export default Filters

const Wrapper = styled.section`
.form-control {
    margin-bottom: 1.25rem;
    h5 {
        margin-bottom: 0.5rem;
    }
}
.search-input {
    padding: 0.5rem;
    background: var(--clr-primary-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
}
.search-input::placeholder {
    text-transform: capitalize;
}

button {
    display: block;
    margin: 0.25em 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
}
.active {
    border-color: var(--clr-grey-5);
}

.price {
    margin-bottom: 0.25rem;
}

.clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius)
}

@media (min-width: 768px) {
    .content {
        position: sticky;
        top: 1rem;
    }
}


`
