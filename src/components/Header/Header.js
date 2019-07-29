import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import './Header.css';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Language from '@material-ui/icons/Language';
import logo from '../../img/assets/logo.png';
import messages from '../../translations';
import store from '../../store/store';

class Header extends Component {
  constructor(props) {
    super(props);
    this.logo = logo;
    this.state = {
      activeLangButton: 'ru',
      lang: 'ru',
    };
    this.page = this.props.page;
  }

  componentWillMount() {
    window.addEventListener('beforeunload', () => localStorage.setItem('refreshed', true));
    if (localStorage.getItem('lang')) {
      this.setState({ lang: localStorage.getItem('lang'), activeLangButton: localStorage.getItem('lang') });
    }
  }

  langClickHandler(e, lang, message) {
    localStorage.setItem('lang', lang);
    localStorage.setItem('refreshed', false);
    this.setState({ lang: e.currentTarget.id, activeLangButton: e.currentTarget.id });
    const locales = {
      lang,
      messages: message,
    };
    store.dispatch({ type: 'locales', value: locales });
  }

  isRedirected() {
    if (this.state.lang) {
      const page = this.page.split('/');
      page[1] = this.state.lang;
      const redirecTo = page.join('/');
      return <Redirect to={`${redirecTo}`} />;
    }
    return <Redirect to={this.props.page} />;
  }

  render() {
    return (
      <header>
        {this.isRedirected()}
        <div className="header-container">
          <Link
            to={`/${this.state.lang}`}
            className="logo"
            onClick={() => {
              localStorage.setItem('page', `/${this.state.lang}`);
              store.dispatch({ type: 'page', value: `/${this.state.lang}` });
            }}>
            <img src={this.logo} alt="logo" />
          </Link>
          <nav className="lang-nav">
            <ul className="lang-list">
              <li
                id="ru"
                className={`lang-item ${this.state.activeLangButton === 'ru' ? 'active-lang' : ''}`}
                onClick={e => this.langClickHandler(e, 'ru', messages.ru)}
              >

              </li>
              <li
                id="be"
                className={`lang-item ${this.state.activeLangButton === 'be' ? 'active-lang' : ''}`}
                onClick={e => this.langClickHandler(e, 'be', messages.be)}
              >

              </li>
              <li
                id="en"
                className={`lang-item ${this.state.activeLangButton === 'en' ? 'active-lang' : ''}`}
                onClick={e => this.langClickHandler(e, 'en', messages.en)}
              >

              </li>
            </ul>
          </nav>
          <div className="header-title-container">
            <p className="header-title">Photo.by</p>
            <p className="header-subtitle"><FormattedMessage id="headerSubtitle" /></p>
          </div>
          <nav className="header-links">
            <ul>
              <li>
                <Link
                  to={`/${this.state.lang}/commonpage`}
                  className="header-link"
                  onClick={() => {
                    localStorage.setItem('page', `/${this.state.lang}/commonpage`);
                    store.dispatch({ type: 'page', value: `/${this.state.lang}/commonpage` });
                  }}>
                    <Button variant="text" color="inherit">
                      <FormattedMessage id="headerLink" />
                    </Button>
                </Link>
              </li>
              <li className="lng-container">
                <Button variant="text" color="inherit">
                  <Language/>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header >
    );
  }
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ page: state.page });
export default connect(mapStateToProps)(Header);
