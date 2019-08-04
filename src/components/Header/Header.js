import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './Header.css';
import { Link, changeLocale } from 'gatsby-plugin-intl';
import Button from '@material-ui/core/Button';
import Language from '@material-ui/icons/Language';
import messages from '../../translations';
import store from '../../store/store';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLangButton: this.props.lang,
      isActiveLangContainer: false,
    };
    this.toggleLangContainer = this.toggleLangContainer.bind(this);
  }

  langClickHandler(e, message) {
    this.setState({
      activeLangButton: e.currentTarget.id,
    });
    const locales = {
      lang: e.currentTarget.id,
      messages: message,
    };
    store.dispatch({ type: 'locales', value: locales });
    changeLocale(e.currentTarget.id);
  }

  /* eslint-disable class-methods-use-this */
  toggleLangContainer() {
    const langNav = document.querySelector('.lang-nav');
    langNav.classList.toggle('show-lang-nav');
    document.body.addEventListener('click', (event) => {
      if (!event.target.parentElement.classList.contains('MuiSvgIcon-root')) {
        langNav.classList.remove('show-lang-nav');
      }
    });
  }

  render() {
    return (
      <header>
        <div className="header-container">
          <nav className="header-links homepage-links">
            <ul>
              <li>
                <Link
                  to={`/`}
                  className="header-link homepage-link"
                >
                  <Button variant="text" color="inherit">
                    <FormattedMessage id="headerMainLink" />
                  </Button>
                </Link>
              </li>
              <li className="lng-icon">
                <Button
                  variant="text"
                  color="inherit"
                  onClick={this.toggleLangContainer}
                >
                  <Language />
                </Button>
              </li>
            </ul>
          </nav>
          <nav className="lang-nav">
            <ul className="lang-list">
              <Button variant="text" color="inherit">
                <li
                  id="ru"
                  className={`lang-item ${
                    this.state.activeLangButton === 'ru' ? 'active-lang' : ''
                    }`}
                  onClick={e => this.langClickHandler(e, messages.ru)}
                >
                  Русский
                </li>
              </Button>
              <Button variant="text" color="inherit">
                <li
                  id="be"
                  className={`lang-item ${
                    this.state.activeLangButton === 'be' ? 'active-lang' : ''
                    }`}
                  onClick={e => this.langClickHandler(e, messages.be)}
                >
                  Беларуская
                </li>
              </Button>
              <Button variant="text" color="inherit">
                <li
                  id="en"
                  className={`lang-item ${
                    this.state.activeLangButton === 'en' ? 'active-lang' : ''
                    }`}
                  onClick={e => this.langClickHandler(e, messages.en)}
                >
                  English
                </li>
              </Button>
            </ul>
          </nav>

          <nav className="header-links">
            <ul>
              <li>
                <Link
                  to={`/photographers/`}
                  className="header-link commonpage-link"
                >
                  <Button variant="text" color="inherit">
                    <FormattedMessage id="headerLink" />
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ lang: state.locales.lang });
export default connect(mapStateToProps)(Header);
