import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateFilters } from '../redux/product'
import { formatPrice } from '../utils/helpers'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
    const dispatch = useDispatch()

    const filters = useSelector(state => state.product.filters)
    const { text, category, min_price, max_price, price } = filters 

    const handleUpdateFilters = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch(updateFilters({name, value}))
    }

    const handleClearFilters = () => {

    }

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
                        <button>All</button>
                        <button>Bedroom</button>
                        <button>Office</button>
                        <button>Kitchen</button>
                        <button>Living Room</button>
                        <button>Kids</button>
                        <button>Dining</button>
                       </div>
                   </div>
               </form>
           </div>
       </Wrapper>
    )
}

export default Filters

const Wrapper = styled.section`

`
