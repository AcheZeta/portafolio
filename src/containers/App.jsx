/* eslint-disable no-unused-vars */
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Main from '../componets/Main'
import Sidebar from '../componets/Sidebar'
import Info from '../componets/Info'
import About from '../componets/About'
import Education from '../componets/Education'
import Experience from '../componets/Experience'
import Skill from '../componets/Skill'
import Softkills from '../componets/Softskills'
import Projects from '../componets/Projects'
import useGetData from '../hooks/useGetData'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`

const App = () => {
  const data = useGetData()
  console.log(data)

  return data.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <Main>
      <GlobalStyle />
      <Sidebar>
        <About
          avatar={data.avatar}
          name={data.name}
          bio={data.bio}
          profession={data.profession}
          address={data.address}
          social={data.social}
        />
        <Softkills data={data.competency} />
      </Sidebar>
      <Info>
        <Experience data={data.experience} />
        <Education data={data.education} />
        <Projects data={data.projects} />
        <Skill data={data.skills} />
      </Info>
    </Main>
  )
}

export default App
