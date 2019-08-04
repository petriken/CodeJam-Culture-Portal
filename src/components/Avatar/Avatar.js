import React, { Component } from 'react';
import './Avatar.css';
import PropTypes from 'prop-types';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: props.data.avatar,
      name: props.data.name
    }
  }

  render() {
    return (
      <div className="avatar-container" id="avatar">
        <img src={this.state.avatar} alt={this.state.name} />
      </div>
    );
  }
}

Avatar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Avatar;
