/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  row-gap: 0.5em;
`
const Skillsh5 = styled.h5`
  margin: 0.5em 0;
`
const SkillsLine = styled.div`
  height: 8px;
  position: relative;
  border-radius: 50px;
  background: #b29fb2;
`

const SkillsSpan = styled.span`
  display: block;
  height: 100%;
  width: ${props => props.width};
  border-radius: 8px;
  background-color: #3f0f3f;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0, 4);
`

const Skill = props => (
  <div className='Skills'>
    <SkillsContainer>
      {props.data.map((skill, index) => (
        <div className='Skill-item' key={`skill-${index}`}>
          <Skillsh5>{skill.name}</Skillsh5>
          <SkillsLine>
            <SkillsSpan width={skill.percentage} />
          </SkillsLine>
        </div>
      ))}
    </SkillsContainer>
  </div>
)

export default Skill
