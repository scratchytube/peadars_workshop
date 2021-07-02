import React from 'react'
import styled from 'styled-components'
import workshopImg from '../assets/woodworking.jpg'
import { PageHero } from '../Components'

const AboutPage = () => {
    return (
        <main>
            <PageHero title='about'/>
            <Wrapper className="page section section-center" >
                <img src={workshopImg} alt="workshop" />
                <article>
                    <div className="title">
                        <h2>my story</h2>
                        <div className="underline"></div>
                    </div>
                    <p>
                        I'm a mechanical engineer by degree and have recently retired. I've started woodturning as a hobby and find it very rewarding. Each of the pieces I produce are unique, however upon request I can somewhat duplicate a design. Contact my email, ::email:: for custom orders/consultations.
                    </p>
                </article>
            </Wrapper>
        </main>
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
