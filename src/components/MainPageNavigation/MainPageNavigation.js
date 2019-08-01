import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './MainPageNavigation.css';
import Button from '@material-ui/core/Button';
import Person from '@material-ui/icons/Person';
import People from '@material-ui/icons/People';
import Info from '@material-ui/icons/Info';
import Home from '@material-ui/icons/Home';

export default class MainPageNavigation extends Component {
  state = {
    display: 'none',
  }

  listenScrollEvent = () => {
    if (window.scrollY > window.innerHeight) {
      this.setState({
        display: 'block',
      });
    } else {
      this.setState({
        display: 'none',
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    return (
      <div className="mainpage-navigation"
           style={{ display: this.state.display }}>
        <Button variant="contained" className="btn-navigation">
        <AnchorLink
          href='#home'
          title='home'>
          <Home/>
        </AnchorLink>
        </Button>
        <Button variant="contained" className="btn-navigation">
        <AnchorLink
          offset='40px'
          href='#author'
          title='author'>
          <Person/>
        </AnchorLink>
        </Button>
        <Button variant="contained" className="btn-navigation">
        <AnchorLink
          offset='40px'
          href='#project-info'
          title='info'>
          <Info/>
        </AnchorLink>
        </Button>
        <Button variant="contained" className="btn-navigation">
        <AnchorLink
          offset='0px'
          href='#developers'
          title='developers'>
          <People/>
        </AnchorLink>
        </Button>
      </div>
    );
  }
}
