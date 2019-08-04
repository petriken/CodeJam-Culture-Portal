import React from 'react';
import { connect } from 'react-redux';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import './MainPage.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Button, Grid } from '@material-ui/core';
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
import store from '../store/store';

function MainPage(props) {
  const data = people[props.lang];
  let authorDay;
  let authorID;
  const profileRand = Math.floor(Math.random() * 8);
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === profileRand) {
      authorDay = i;
      authorID = data[i].id;
    }
  }
  const profile = data[authorDay];
  return (
    <Layout>
      <Grid>
        <Grid className="main-page" id="home">
          <Grid className="main-page-title">
            <p>
              <span className="portal">
                <FormattedMessage id="headerSubtitleSpan" />
              </span>
              <span>
                <FormattedMessage id="headerSubtitle" />
              </span>
            </p>
            <Grid className="mainpage-navigation-container">
              <AnchorLink offset="40px" href="#author">
                <FormattedMessage id="todayAuthor" />
              </AnchorLink>
              <AnchorLink offset="40px" href="#project-info">
                <FormattedMessage id="infoAboutPortal" />
              </AnchorLink>
              <AnchorLink offset="0px" href="#developers">
                <FormattedMessage id="developers" />
              </AnchorLink>
            </Grid>
          </Grid>
          <SimpleSlider />
          <MainPageNavigation />
          <section className="author-day" id="author">
            <h2 className="title-author-day">
              <FormattedMessage id="todayAuthor" />
            </h2>
            <Grid className="avatar-description">
              <Avatar data={profile} />
              <Grid>
                <Description data={profile} />
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className="author-day-button"
                >
                  <Button variant="contained" className="author-day__btn">
                    <FormattedMessage id="toAuthorPage">
                      {text => (
                        <Link
                          to={`/photographers/person${authorDay}`}
                          className="author-day__btn-text"
                          id={authorDay}
                          onClick={(e) => {
                            localStorage.setItem('person', authorID)
                            store.dispatch({ type: 'person', value: authorID });
                          }}
                        >
                          {text}
                        </Link>
                      )}
                    </FormattedMessage>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </section>
          <section className="description-mainpage" id="project-info">
            <h2>
              <FormattedMessage id="infoAboutPortal" />
            </h2>
            <FormattedHTMLMessage id="welcome" />
            <GridGallery data={profile} />
          </section>
        </Grid>
        <Grid className="developers-container" id="developers">
          <h2>
            <FormattedMessage id="developers" />
          </h2>
          <FormattedMessage id="purpose" />
          <Grid className="developers">
            <Developer
              name="Vitaly Mikulich"
              gitHub="VitalyMikulich"
              avatar={avatarVitalyMikulich}
            />
            <Developer
              name="Piotr Stashukevich"
              gitHub="petriken"
              avatar={avatarPetriken}
            />
            <Developer
              name="Irina Inina"
              gitHub="irinainina"
              avatar={avatarIrinainina}
            />
            <Developer
              name="Aleksandra Skirnevskaia"
              gitHub="AlexSkir"
              avatar={avatarAlexSkir}
            />
            <Developer
              name="Yuliya Pakidzka"
              gitHub="Julanick"
              avatar={avatarJulanick}
            />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

MainPage.propTypes = {
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ lang: state.locales.lang });
export default connect(mapStateToProps)(MainPage);
