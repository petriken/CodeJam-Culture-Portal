import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MainPage.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import SimpleSlider from '../components/Slider/Slider';
import Avatar from '../components/Avatar/Avatar';
import Description from '../components/Description/Description';
import Developer from '../components/Developer/Developer';
import MainPageNavigation from '../components/MainPageNavigation/MainPageNavigation';
import GridGallery from '../components/GridGalery/GridGalery';
import avatarVitalyMikulich from '../img/developers/VitalyMikulich.jpg';
import avatarPetriken from '../img/developers/petriken.jpg';
import avatarIrinainina from '../img/developers/irinainina.jpg';
import avatarAlexSkir from '../img/developers/AlexSkir.jpg';
import avatarJulanick from '../img/developers/Julanick.jpg';
import Layout from "../components/layout";
import { people } from '../data';

function MainPage(props) {
  const data = people[props.lang];
  const date = new Date();
  const day = date.getDate();
  const authorDay = day % data.length;
  const profile = data[authorDay];
  return (
    <Layout>
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
          <GridGallery data={profile} />
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
    </Layout>
  )
}

MainPage.propTypes = {
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ lang: state.locales.lang });
export default connect(mapStateToProps)(MainPage);
