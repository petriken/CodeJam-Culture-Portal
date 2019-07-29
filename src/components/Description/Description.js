import React from 'react';
import './Description.css';

function Description(props) {
  return (
    <div className="description">    
      <h1 className="name">{props.data.name}</h1>
      <p className="occupation">{props.data.occupation}</p>
      <p className="years">Годы жизни: <span>{props.data.birthDate}</span> - <span>{props.data.deathDate}</span></p>
      <p className="birth-place">Место рождения: <span>{props.data.birthPlace}</span></p>
    </div>
  )
}

export default Description;
