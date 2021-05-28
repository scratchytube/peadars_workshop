import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: ''}] }) => {
    const [main, setMain] = useState(images[0])
    
    return (
        <Wrapper>
            <img src={main.url} alt="main img" className='gallery' />
            <div className="gallery">
                {images.map((image, index) => {
                    return  (
                    <img src={image.url} 
                    alt={image.filename} 
                    key={index} 
                    onClick={() => setMain(images[index])} 
                    className={`${ image.url === main.url ? 'active' : null }`}
                    />
                )
                })}
            </div>
        </Wrapper>
    )
}

export default ProductImages

const Wrapper = styled.section`

`
