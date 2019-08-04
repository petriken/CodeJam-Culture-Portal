import Layout from '../../components/layout';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PersonalPage.css';
import PropTypes from 'prop-types';
import Avatar from '../../components/Avatar/Avatar';
import Description from '../../components/Description/Description';
import Timeline from '../../components/Timeline/Timeline';
import ListOfWorks from '../../components/ListOfWorks/ListOfWorks';
import ImageGalleryComponent from '../../components/ImageGallery/ImageGallery';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import ModalVideo from '../../components/ModalVideo/ModalVideo';
import MapContainer from '../../components/Map/Map';
import PersonalPageNavigation from '../../components/PersonalPageNavigation/PersonalPageNavigation';
import { people } from '../../data';

class PersonalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: '',
      media: ''
    };
    this.data = people[this.props.lang];
    this.profile = '';
  }

  /* eslint-disable camelcase */
  componentDidMount() {
    typeof window !== 'undefined' ? window.scrollTo(0, 0) : this.setState({ scroll: 0 });
  }

  /* eslint-disable class-methods-use-this */
  componentWillMount() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === this.props.person) {
        this.profile = this.data[i];
      }
    }
  }

  render() {
    return (
      <Layout>
        <div className="personal-page">
          <PersonalPageNavigation />
          <Avatar data={this.profile} />
          <Description data={this.profile} id="description" />
          <Timeline data={this.profile} />
          <ListOfWorks data={this.profile} />
          <ImageGalleryComponent data={this.profile} />
          <VideoPlayer data={this.profile} />
          <ModalVideo data={this.profile} />
          <MapContainer data={this.profile} />
        </div>
      </Layout>
    );
  }
}

PersonalPage.propTypes = {
  person: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ lang: state.locales.lang, person: state.person });
export default connect(mapStateToProps)(PersonalPage);
