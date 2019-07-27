import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './SearchPanel.css';
import store from '../../store/store';
import bg from '../../img/assets/SearchPannelBG';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      city: '',
      bg: localStorage.getItem('bg'),
    };
  }

  componentWillMount() {
    const BGs = Object.values(bg);
    BGs.forEach((item, i) => {
      if (i === Math.floor(Math.random() * 10)) {
        if (localStorage.getItem('bg') && localStorage.getItem('refreshed') !== 'true') {
          this.setState({ bg: localStorage.getItem('bg') });
        } else {
          this.setState({ bg: item });
          localStorage.setItem('bg', item);
        }
      }
    });
  }

  onTermChange(event) {
    this.setState({
      term: event.target.value,
    });
    store.dispatch({ type: 'term', value: event.target.value });
  }

  onCityChange(event) {
    this.setState({
      city: event.target.value,
    });
    store.dispatch({ type: 'city', value: event.target.value });
  }

  onClickHandler() {
    const term = document.getElementById('termInput').value;
    const city = document.getElementById('cityInput').value;
    this.setState({ term, city });
    store.dispatch({ type: 'term', value: term });
    store.dispatch({ type: 'city', value: city });
  }

  render() {
    return (
      <div className="search-container"
        style={{ background: `url(${this.state.bg}) center center / cover` }}>
        <form className="search-panel">
          <label>
            <FormattedMessage id="searchName" />
            <input type="text"
              className="search-input"
              placeholder="search"
              id="termInput"
              value={this.state.term}
              onChange={e => this.onTermChange(e)} />
          </label>
          <label>
            <FormattedMessage id="searchCity" />
            <input type="text"
              className="search-input"
              placeholder="search"
              id="cityInput"
              value={this.state.city}
              onChange={e => this.onCityChange(e)} />
          </label>
          <button className="btn-search" type="button" onClick={() => this.onClickHandler()}>
            <FormattedMessage id="searchButton" />
          </button>
        </form>
      </div>
    );
  }
}
