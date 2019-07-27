import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../img/assets/logo.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.logo = logo;
  }

  render() {
    return (
      <header>
        <div className="header-container">
          <Link to="/" className="logo">
            <img src={this.logo} alt="logo" />
          </Link>
          <div className="header-title-container">
            <p className="header-title">Photo.by</p>
            <p className="header-subtitle">Портал фотографов Беларуси</p>
          </div>
          <nav className="header-links">
            <ul>
              <li>
                <Link to="/commonpage" className="header-link">
                  Фотографы
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
