import React from 'react';
import './MainPage.css';
import Avatar from '../../components/Avatar/Avatar';
import Description from '../../components/Description/Description';
import Developer from '../../components/Developer/Developer';
import data from '../../data/people';
import avatarVitalyMikulich from '../../img/developers/VitalyMikulich.png';
import avatarPetriken from '../../img/developers/petriken.e3b7ff7c.png';
import avatarIrinainina from '../../img/developers/irinainina.fb191d76.jpg';
import avatarAlexSkir from '../../img/developers/AlexSkir.1a2f411d.jpg';
import avatarJulanick from '../../img/developers/Julanick.4e8df6e1.jpg';

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
          <span>Добро пожаловать на портал <font color="red">Photo.by</font>,</span> <span>посвященный фотографам Беларуси.</span> 
          <span>Здесь можно найти информацию о фотографе </span>
          <span>и вдохновиться его работами.</span>
        </p>
        <p className="description-mainpage">Портал разработан студентами Rolling Scopes School с целью просвящения о культуре Беларуси.</p>
      </div>
      <div className="developers-container">
        <p>Команда разработчиков</p>
        <div className="developers">
          <Developer name="Vitaly Mikulich" gitHub="VitalyMikulich" avatar={avatarVitalyMikulich} />
          <Developer name="Piotr Stashukevich" gitHub="petriken" avatar={avatarPetriken} />
          <Developer name="Irina Inina" gitHub="irinainina" avatar={avatarIrinainina} />
          <Developer name="Aleksandra Skirnevskaia" gitHub="AlexSkir" avatar={avatarAlexSkir} />
          <Developer name="Yuliya Pakidzka" gitHub="Julanick" avatar={avatarJulanick} />
        </div>
      </div>
    </>
  )
}

export default MainPage;
