import React from 'react';
import './Avatar.css';
import PropTypes from 'prop-types';

function Avatar(props) {
  console.log(props.data)
  return (
    <div className="avatar-container" id="avatar">
      <img src={props.data.avatar} alt={props.data.name} />
    </div>
  );
}

Avatar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Avatar;
