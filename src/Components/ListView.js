import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import styled from 'styled-components'

const ListView = ({ products }) => {
    return (
        <Wrapper>
            { products.map((item) => {
                const { id, image, name, price, description } = item
                return (
                    <article key={id}>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <h5 className="price">{ formatPrice(price) }</h5>
                            <p>{description.substring(0,150)}...</p>
                            <Link to={`/products/${id}`} className='btn'>
                                Details
                            </Link>
                        </div>
                    </article>
                )
            })}
        </Wrapper>
    )
}

export default ListView

const Wrapper = styled.section`

`
