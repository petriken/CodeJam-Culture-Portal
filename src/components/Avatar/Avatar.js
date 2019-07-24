import React from 'react';
import './Avatar.css';

function Avatar(props) {  
  return (
    <div className="avatar-container">
      <img src={props.data.avatar} alt={props.data.name} />
    </div>
  )
}  

export default Avatar;
