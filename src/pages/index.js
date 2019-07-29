import React from 'react';
import './MainPage.css';
import Avatar from '../components/Avatar/Avatar';
import Description from '../components/Description/Description';
import data from '../data/people';
import Layout from "../components/layout";

function MainPage() {
  const date = new Date();
  const day = date.getDate();
  const authorDay = day % data.length;
  let profile = data[authorDay];
  return (
    <Layout>
      <div className="main-page">
        <h2 className="title-mainpage">Автор дня</h2>
        <Avatar data={profile} />
        <Description data={profile} />
        <p className="description-mainpage">
          <span>Добро пожаловать на портал,</span> <span>посвященный фотографам Беларуси.</span>
          <span>Здесь можно найти информацию о фотографе </span>
          <span>и вдохновиться его работами.</span>
        </p>
      </div>
    </Layout>
  )
}

export default MainPage;
