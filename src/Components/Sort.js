import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filteredProducts, sorter } from '../redux/product'
import { toggleView } from '../redux/product'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'

const Sort = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.filtered_products)
    const theGridView = useSelector(state => state.product.isGridView)
    const sort = useSelector(state => state.product.sort)

    const handleSort = (e) => {
        const value = e.target.value
        dispatch(sorter(value))

        if (value === "price-lowest") {
            const priceLowestFirst = [...products].sort((a,b) => a.price - b.price )
            dispatch(filteredProducts(priceLowestFirst))
        }
        if (value === "price-highest") {
            const priceHighestFirst = [...products].sort((a,b) => b.price - a.price )
            dispatch(filteredProducts(priceHighestFirst))
        }
        if (value === "name-a") {
            const alphabeticalOrder = [...products].sort((a,b) => {
                return a.name.localeCompare(b.name)
            })
            dispatch(filteredProducts(alphabeticalOrder))
        }
        if (value === "name-z") {
            const reverseAlphabeticalOrder = [...products].sort((a,b) => {
                return b.name.localeCompare(a.name)
            })
            dispatch(filteredProducts(reverseAlphabeticalOrder))
        }

    }

    return (
        <Wrapper>
            <div className="btn-container">
                <button onClick={() => dispatch(toggleView())} type="button" className={`${ theGridView ? 'active' : null }`} >
                    <BsFillGridFill />
                </button>
                <button onClick={() => dispatch(toggleView())} type="button" className={`${ theGridView ? null : 'active' }`}>
                    <BsList />
                </button>
            </div>
            <p>
                { products.length } products found
            </p>
            <hr />
            <form>
                <label htmlFor="sort">sort by</label>
                <select name="sort" 
                id="sort" 
                className='sort-input'
                value={sort}
                onChange={handleSort}
                >
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
display: grid;
grid-template-columns: auto auto 1fr auto;
align-items: center;
margin-bottom: 2rem;
column-gap: 2rem;

@media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
        width: 50px;
    }
    label {
        display: inline-block;
        margin-right: 0.5rem;
    }
}

@media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
      text-transform: capitalize;
      margin-bottom: 0;
  }

  .btn-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 0.5rem;
      button {
          background: transparent;
          border: 1px solid var(--clr-black);
          color: var(--clr-black);
          width: 1.5rem;
          border-radius: var(--radius);
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          svg {
              font-size: 1rem;
          }
      }
      .active {
        background: var(--clr-black);
        color: var(--clr-white);
    }
  }

  .sort-input {
      border-color: transparent;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
  }
  label {
      font-size: 1rem;
      text-transform: capitalize;
  }
  
`
