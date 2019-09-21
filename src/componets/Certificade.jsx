// eslint-disable-next-line no-unused-vars
import React from 'react';

const Certificade = props => (
  <div className="Experience">
    <h2>Experiencia</h2>
    <div className="Experience-container">
      <div className="Experience-item">
        {props.data.map((exp, index) => (
          <div className="Experience-item" key={`exp-${index}`}>
            <h3>{exp.jobTitle}</h3>
            <p>{exp.company}</p>
            <p>{exp.jobDescription}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Certificade;
