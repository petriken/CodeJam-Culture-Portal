import React from 'react';
import './MainPage.css';
import Avatar from '../../components/Avatar/Avatar';
import Description from '../../components/Description/Description';
import Developer from '../../components/Developer/Developer';
import data from '../../data/people';
import avatarVitaly from './__QBzAfm4wQ.jpg';

function MainPage(props) { 
  const date = new Date();
  const day = date.getDate();
  const authorDay = day % data.length;  
  let profile = data[authorDay];
  return (
    <>
      <div className="main-page">
        <h2 className="title-mainpage">Автор дня</h2>
        <Avatar data={profile}/>
        <Description data={profile}/>
        <p className="description-mainpage">
          <span>Добро пожаловать на портал,</span> <span>посвященный фотографам Беларуси.</span> 
          <span>Здесь можно найти информацию о фотографе </span>
          <span>и вдохновиться его работами.</span>
        </p>
      </div>
      <div className="developers-container">
        <p>Команда разработчиков</p>
        <div className="developers">
          <Developer name="Vitaly Mikulich" gitHub="VitalyMikulich" avatar={avatarVitaly}/>
          <Developer name="Vitaly Mikulich" gitHub="VitalyMikulich" avatar={avatarVitaly}/>
          <Developer name="Vitaly Mikulich" gitHub="VitalyMikulich" avatar={avatarVitaly}/>
          <Developer name="Vitaly Mikulich" gitHub="VitalyMikulich" avatar={avatarVitaly}/>
          <Developer name="Vitaly Mikulich" gitHub="VitalyMikulich" avatar={avatarVitaly}/>
          <Developer name="Vitaly Mikulich" gitHub="VitalyMikulich" avatar={avatarVitaly}/>
        </div>
      </div>
    </>
  )
}

export default MainPage;