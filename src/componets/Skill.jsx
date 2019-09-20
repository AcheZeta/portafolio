/* eslint-disable no-unused-vars */
import React from 'react';

const Skill = props => (
    <div className='Skills'>
        <h2>Skill</h2>
        <div className='Skill-container'>
            {props.data.map((skl, index)=> (
              <div className='Skill-item' key={`skl-${index}`}>
                <p>{skl.name}</p>
                <div className='Skill-bar'>
                </div>
              </div>
            ))}    
            
        </div>
    </div>
)

export default Skill