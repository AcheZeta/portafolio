/* eslint-disable no-unused-vars */
import React from 'react';
import Main from '../componets/Main'
import Sidebar from '../componets/Sidebar'
import Info from '../componets/Info'
import About from '../componets/About'
import Education from '../componets/Education'
import Certificates from '../componets/Cerificates'
import Skill from '../componets/Skill'
import Social from '../componets/Social'

const App = () = {
    return (
        <Main>
            <Sidebar>
                <About/>
                <Social/>
            </Sidebar>
            <Info>
                <Education/>
                <Certificates/>
                <Skill/>
            </Info>
        </Main>
    );
}

export default App;