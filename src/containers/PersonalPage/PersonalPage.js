import React from 'react';
import './PersonalPage.css';
import Avatar from '../../components/Avatar/Avatar'
import Description from '../../components/Description/Description';
import Timeline from '../../components/Timeline/Timeline';
import ImageGalleryComponent from '../../components/ImageGallery/ImageGallery';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import MapContainer from '../../components/Map/Map';
import data from '../../data/people';

function PersonalPage(props) {
  let profile = data[props.person];
  return (
    <div className="personal-page">
      <Avatar data={profile}/>
      <Description data={profile}/>
      <Timeline data={profile}/>
      <ImageGalleryComponent data={profile}/>
      <VideoPlayer data={profile}/>
      <MapContainer/>
    </div>
  );
}

export default PersonalPage;