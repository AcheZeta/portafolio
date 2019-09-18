/* eslint-disable no-unused-vars */
import React from 'react';
import Main from '../componets/Main';
import Sidebar from '../componets/Sidebar';
import Info from '../componets/Info';
import About from '../componets/About';
import Social from '../componets/Social';
import Education from '../componets/Education';
import Certificates from '../componets/Certificade';
import Skill from '../componets/Skill';


const App = () => {
  return (
    <Main>
      <Sidebar />
      <Info />
      <About /> 
      <Social />
      <Education />
      <Certificates />
      <Skill />
    </Main>
  );
};

export default App;
