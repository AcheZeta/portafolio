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
import useGetData from '../hooks/useGetData';

const App = () => {
  const data = useGetData();
  console.log(data);

  return (
    <Main>
      <Sidebar />
      <About
        avatar={data.avatar}
        name={data.name}
        bio={data.bio}
        profession={data.profession}
        address={data.address}
      />
      <Social social={data.social} />
      <Info>
        <Education data={data.education} />
        <Certificates data={data.experience} />
        <Skill data={data.skills}/>
      </Info>
    </Main>
  );
};

export default App;
