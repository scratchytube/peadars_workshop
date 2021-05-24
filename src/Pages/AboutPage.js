import React from 'react'
import styled from 'styled-components'
import workshopImg from '../assets/woodworking.jpg'

const AboutPage = () => {
    return (
        <Wrapper className="page section section-center" >
            <img src={workshopImg} alt="workshop" />
            <article>
                <div className="title">
                    <h2>our story</h2>
                    <div className="underline"></div>
                </div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laborum officia corporis nobis libero fugiat facere nostrum error, iure quas optio magnam corrupti et harum saepe distinctio, molestias adipisci. Dolorem!
                </p>
            </article>
        </Wrapper>
    )
}

export default AboutPage

const Wrapper = styled.section`
display: grid;
gap: 4rem;
img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
}
p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
}
.title {
    text-align: left;
}
.underline {
    margin-left: 0;
}
@media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
}
`
