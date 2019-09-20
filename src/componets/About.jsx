// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = ({ avatar, name, bio, profession, address }) => (
    <div className='About'>
        <div className='About-container'>
            <div className='About-avatar'>
                <figure src={ avatar } alt={ name }></figure>
            </div>
            <div className='About-name'>
                <h2>{ name }</h2>
            </div>
            <div className='About-profession'>
                <p>{ profession }</p>
            </div>
            <div className='About-description'>
                <p>{ bio }</p>
            </div>
            <div className='About-location'>
                <p>{ address }</p>
            </div>
            {/* <div className='About-social'>
                <p>Sigueme en mis redes sociales</p>
            </div> */}
        </div>
    </div>
)
    
export default About;