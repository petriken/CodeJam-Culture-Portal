import React, { Component } from 'react';
import './Avatar.css';
import PropTypes from 'prop-types';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      name: '',
      src: ''
    }
  }

  componentDidMount() {
    this.setState({ avatar: this.props.data.avatar, name: this.props.data.name, src: this.props.src })
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.src !== this.state.src) {
      this.setState({ src: nextProp.src })
    }
  }

  render() {
    return (
      <div className="avatar-container" id="avatar">
        <img src={this.state.src || this.state.avatar} alt={this.state.name} />
      </div>
    );
  }
}

Avatar.propTypes = {
  data: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired
};

export default Avatar;
