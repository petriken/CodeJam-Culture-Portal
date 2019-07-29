import React from 'react';
import './PersonalPage.css';
import Avatar from '../components/Avatar/Avatar'
import Description from '../components/Description/Description';
import Timeline from '../components/Timeline/Timeline';
import ImageGalleryComponent from '../components/ImageGallery/ImageGallery';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import MapContainer from '../components/Map/Map';
import data from '../data/people';
import Layout from "../components/layout";

function PersonalPage() {
  let profile = data[0];
  return (
    <Layout>
      <div className="personal-page">
        <Avatar data={profile} />
        <Description data={profile} />
        <Timeline data={profile} />
        <ImageGalleryComponent data={profile} />
        <VideoPlayer data={profile} />
        <MapContainer />
      </div>
    </Layout>
  );
}

export default PersonalPage;