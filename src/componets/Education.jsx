/* eslint-disable no-unused-vars */
import React from 'react'
import H2Styled from '../Styled/H2Styled'
import H3Styled from '../Styled/H3Styled'
import PStyled from '../Styled/PStyled'

const Education = props => (
  <div className='Education'>
    <H2Styled name='<Educación' />
    <div className='Education-container'>
      {props.data.map((edu, index) => (
        <div className='Education-item' key={`Edu-${index}`}>
          <H3Styled>
            {edu.institution} {edu.degree}
            <span>
              {edu.startDate}-{edu.endDate}
            </span>
          </H3Styled>
          <PStyled name={edu.description} />
        </div>
      ))}
    </div>
  </div>
)

export default Education
