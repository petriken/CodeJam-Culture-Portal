import React from 'react';
import './PersonalPage.css';
import PropTypes from 'prop-types';
import Avatar from '../../components/Avatar/Avatar';
import Description from '../../components/Description/Description';
import Timeline from '../../components/Timeline/Timeline';
import ImageGalleryComponent from '../../components/ImageGallery/ImageGallery';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import MapContainer from '../../components/Map/Map';
import data from '../../data/people';

function PersonalPage(props) {
  const profile = data[props.person];
  return (
    <div className="personal-page">
      <Avatar data={profile} />
      <Description data={profile} />
      <Timeline data={profile} />
      <ImageGalleryComponent data={profile} />
      <VideoPlayer data={profile} />
      <MapContainer data={profile} />
    </div>
  );
}

PersonalPage.propTypes = {
  person: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PersonalPage;
