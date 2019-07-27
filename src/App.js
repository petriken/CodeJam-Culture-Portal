import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './containers/MainPage/MainPage';
import CommonPage from './containers/CommonPage/CommonPage';
import PersonalPage from './containers/PersonalPage/PersonalPage';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  state = {
    person: 0,
  };

  onButtonClick = (event) => {
    this.setState({
      person: event.target.id,
    });
  };

  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Route
            path="/"
            render={() => <MainPage onButtonClick={this.onButtonClick} />}
            exact
          />
          <Route
            path="/commonpage"
            render={() => <CommonPage onButtonClick={this.onButtonClick} />}
            exact
          />
          <Route
            path="/personalpage"
            render={() => <PersonalPage person={this.state.person} />}
            exact
          />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}
