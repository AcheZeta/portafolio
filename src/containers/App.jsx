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
import Projects from '../componets/Projects'
import useGetData from '../hooks/useGetData'
import Loading from '../componets/Loading'

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

  return data.length === 0 ? (
    <Main>
      <GlobalStyle />
      <Loading />
    </Main>
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
        </Sidebar>
        <Projects data={data.projects} />
        <Skill
          softskills={data.competency}
          hardskills={data.skills}
        />
        <Info>
          <Education data={data.education} />
          <Experience data={data.experience} />
        </Info>
      </Main>
    )
}

export default App
