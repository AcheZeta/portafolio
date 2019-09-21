// eslint-disable-next-line no-unused-vars
import React from 'react';

const Social = props => (
  <div className="Social">
    <h2>Social</h2>
    <div className="Social">
      {props.social && (
        <ul>
          {props.map((item, index) => (
            <div className="Social-item" key={`soc-${index}`}>
              <li> key={`soc-${index}`}</li>
              <a href={item.url} target="_blank">
                {item.name}
              </a>
            </div>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default Social;
