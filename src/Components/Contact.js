import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Wrapper>
            <div className="section-center">
                <h3>Join my newsletter</h3>
                <div className="content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, officiis! Asperiores sit corrupti deserunt, aperiam non cupiditate porro? Tempora, adipisci.</p>
                    <form className="contact-form">
                        <input type="email" 
                        className='form-input' 
                        placeholder='enter email'/>
                        <button type="submit" className='submit-btn'>Subscribe</button>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default Contact

const Wrapper = styled.section`
padding: 5rem 0;

`
