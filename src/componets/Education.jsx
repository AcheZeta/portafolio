// eslint-disable-next-line no-unused-vars
import React from 'react';

const Education = props => (
  <div className="Education">
    <div className="Education-container">
      {props.data.map((edu, index) => (
        <div className="Education-item" key={`Edu-${index}`}>
        <h3>{edu.institution}</h3>
        <p>{edu.degree}</p>
        <p>{edu.description}</p>
        <p>{edu.startDate}-{edu.endDate}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
