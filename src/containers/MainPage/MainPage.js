import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MainPage.css';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Avatar from '../../components/Avatar/Avatar';
import Description from '../../components/Description/Description';
import Developer from '../../components/Developer/Developer';
import ru from '../../data/people';
import en from '../../data/peopleEN';
import be from '../../data/peopleBE';
import avatarVitalyMikulich from '../../img/developers/VitalyMikulich.png';
import avatarPetriken from '../../img/developers/petriken.jpg';
import avatarIrinainina from '../../img/developers/irinainina.fb191d76.jpg';
import avatarAlexSkir from '../../img/developers/AlexSkir.1a2f411d.jpg';
import avatarJulanick from '../../img/developers/Julanick.4e8df6e1.jpg';

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
      <div className="main-page">
        <h2 className="title-mainpage">
          <FormattedMessage id="todayAuthor" />
        </h2>
        <Avatar data={profile} />
        <Description data={profile} />
        <p className="description-mainpage">
          <FormattedHTMLMessage id="welcome" />
        </p>
        <p className="description-mainpage">
          <FormattedMessage id="purpose" />
        </p>
      </div>
      <div className="developers-container">
        <p><FormattedMessage id="developers" /></p>
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
