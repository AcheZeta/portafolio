/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import H2Styled from '../Styled/H2Styled'
import HRStyled from '../Styled/HrStyled'

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 7rem;
  grid-row-gap: 0;
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Skillsh5 = styled.h5`
  margin: 0.5em 0;
`
const SkillName = styled.h3`
  color: #212121;
  font-weight: 300;
  margin: 0.5em 0;
`
const SoftskillDiv = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`
const HardskillDiv = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`


const Skill = ({ hardskills, softskills }) => (
  <div className='Skills'>
    <H2Styled name='Habilidades' />
    <HRStyled />
    <SkillsContainer>
      <SoftskillDiv>
        <SkillName>Soft Skills</SkillName>
        {softskills.map((sskill, index) => (
          <div className='Skill-item' key={`skill-${index}`}>
            <Skillsh5>{sskill.name}</Skillsh5>
          </div>
        ))}
      </SoftskillDiv>
      <HardskillDiv>
        <SkillName>Tech Skills</SkillName>
        {hardskills.map((hskill, index) => (
          <div className='Skill-item' key={`skill-${index}`}>
            <Skillsh5>{hskill.name}</Skillsh5>
          </div>
        ))}
      </HardskillDiv>
    </SkillsContainer>
  </div>
)

export default Skill
