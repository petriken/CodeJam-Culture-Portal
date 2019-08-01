import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MainPage.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import SimpleSlider from '../../components/Slider/Slider';
import Avatar from '../../components/Avatar/Avatar';
import Description from '../../components/Description/Description';
import Developer from '../../components/Developer/Developer';
import MainPageNavigation from '../../components/MainPageNavigation/MainPageNavigation';
import GridGallery from '../../components/GridGalery/GridGalery';
import ru from '../../data/people';
import en from '../../data/peopleEN';
import be from '../../data/peopleBE';
import avatarVitalyMikulich from '../../img/developers/VitalyMikulich.jpg';
import avatarPetriken from '../../img/developers/petriken.jpg';
import avatarIrinainina from '../../img/developers/irinainina.jpg';
import avatarAlexSkir from '../../img/developers/AlexSkir.jpg';
import avatarJulanick from '../../img/developers/Julanick.jpg';

function MainPage(props) {
  let data;
  if (props.lang === 'ru') {
    data = ru;
  } else if (props.lang === 'en') {
    data = en;
  } else if (props.lang === 'be') {
    data = be;
  }
  const date = new Date();
  const day = date.getDate();
  const authorDay = day % data.length;
  const profile = data[authorDay];
  return (
    <>
      <div className="main-page"
        id="home">
        <div className="main-page-title">
          <p>
            <span className="portal"><FormattedMessage id="headerSubtitleSpan" /></span>
            <span><FormattedMessage id="headerSubtitle" /></span>
          </p>
          <div className="mainpage-navigation-container">
            <AnchorLink
              offset='40px'
              href='#author'>
              <FormattedMessage id="todayAuthor" />
            </AnchorLink>
            <AnchorLink
              offset='40px'
              href='#project-info'>
              <FormattedMessage id="infoAboutPortal" />
            </AnchorLink>
            <AnchorLink
              offset='0px'
              href='#developers'>
              <FormattedMessage id="developers" />
            </AnchorLink>
          </div>
        </div>
        <SimpleSlider />
        <MainPageNavigation />
        <section className="author-day" id="author">
          <h2 className="title-author-day">
            <FormattedMessage id="todayAuthor" />
          </h2>
          <Avatar data={profile} />
          <Description data={profile} />
        </section>
        <section className="description-mainpage"
          id="project-info">
          <h2>
            <FormattedMessage id="infoAboutPortal" />
          </h2>
          <FormattedHTMLMessage id="welcome" />
          <GridGallery />
        </section>
      </div>
      <div className="developers-container"
        id="developers">
        <h2><FormattedMessage id="developers" /></h2>
        <FormattedMessage id="purpose" />
        <div className="developers">
          <Developer name="Vitaly Mikulich" gitHub="VitalyMikulich" avatar={avatarVitalyMikulich} />
          <Developer name="Piotr Stashukevich" gitHub="petriken" avatar={avatarPetriken} />
          <Developer name="Irina Inina" gitHub="irinainina" avatar={avatarIrinainina} />
          <Developer name="Aleksandra Skirnevskaia" gitHub="AlexSkir" avatar={avatarAlexSkir} />
          <Developer name="Yuliya Pakidzka" gitHub="Julanick" avatar={avatarJulanick} />
        </div>
      </div>
    </>
  );
}

MainPage.propTypes = {
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ lang: state.locales.lang });
export default connect(mapStateToProps)(MainPage);
