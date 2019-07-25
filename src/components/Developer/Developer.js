import React from 'react';
import './Developer.css';

function Developer(props) {
  const gitHubLink = `https://github.com/${props.gitHub}`;

  return (
    <div className="developer-container">
      <img src={props.avatar} alt={props.name} />
      <p className="developer-name">{props.name}</p>
      <a href={gitHubLink} target="_blank" rel="noopener noreferrer">{props.gitHub}</a>
    </div>
  )
}

export default Developer