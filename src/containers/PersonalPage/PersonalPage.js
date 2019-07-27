import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PersonalPage.css';
import PropTypes from 'prop-types';
import Avatar from '../../components/Avatar/Avatar';
import Description from '../../components/Description/Description';
import Timeline from '../../components/Timeline/Timeline';
import ImageGalleryComponent from '../../components/ImageGallery/ImageGallery';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import MapContainer from '../../components/Map/Map';
import ru from '../../data/people';
import en from '../../data/peopleEN';
import be from '../../data/peopleBE';

class PersonalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: ru[0],
      person: props.person,
    };
  }

  componentWillMount() {
    let data;
    if (this.props.lang === 'ru') {
      data = ru;
    } else if (this.props.lang === 'en') {
      data = en;
    } else if (this.props.lang === 'be') {
      data = be;
    }
    this.setState({ profile: data[this.state.person] });
  }

  componentWillUnmount() {
    this.setState(null);
    this.props = null;
  }

  render() {
    return (
      <div className="personal-page">
        <Avatar data={this.state.profile} />
        <Description data={this.state.profile} />
        <Timeline data={this.state.profile} />
        <ImageGalleryComponent data={this.state.profile} />
        <VideoPlayer data={this.state.profile} />
        <MapContainer data={this.state.profile} />
      </div>
    );
  }
}

PersonalPage.propTypes = {
  person: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ lang: state.locales.lang });
export default connect(mapStateToProps)(PersonalPage);
