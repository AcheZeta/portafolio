/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import H2Styled from '../Styled/H2Styled'
import HRStyled from '../Styled/HrStyled'

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  row-gap: 0.5em;
  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
const ProjectCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 5%;
  margin: 0 auto;
  display: block;
  border-radius: 5px;
`
const ProjectImg = styled.img`
  width: 100%;
  border-radius: 5px;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rbga(0, 0, 0, 1.6);
`
const ProjectDetail = styled.div`
  padding: 2%;
`
const ProjectAnchor = styled.a`
  color: #212121;
  text-decoration: none;
  font-size: 1.2em;
  text-align: left;
`
const ProjectName = styled.h3`
  height: 1rem;
  color: #212121;
  font-weight: 400;
  font-size: 1.5rem;
`

const ProjectDescription = styled.p`
  color: #212121;
  font-weight: 400;
  height: 3rem;
`

const Projects = props => (
  <div className='Projectos'>
    <H2Styled name='Proyectos' />
    <HRStyled/>
    <ProjectContainer>
      {props.data.map((proj, index) => (
        //Card
        <ProjectCard>
          <div className='Project-item' key={`proj-${index}`}>
            <ProjectAnchor href={proj.demoLink} target='_blank'>
            <ProjectImg src={proj.image} alt={proj.name} />
            <ProjectName>{proj.name}</ProjectName>
            </ProjectAnchor>
            <HRStyled/>
            <ProjectDetail>
              <ProjectDescription>{proj.description}</ProjectDescription>
              <i className={proj.t1}></i>
              <i className={proj.t2}></i>
              <i className={proj.t3}></i>
              <i className={proj.t4}></i>
              <ProjectAnchor href={proj.githubLink} target='_blank'>
                <i className='devicon-github-plain'></i>
              </ProjectAnchor>
            </ProjectDetail>
          </div>
        </ProjectCard>
      ))}
    </ProjectContainer>
  </div>
)

export default Projects
