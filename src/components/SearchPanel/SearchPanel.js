import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onTermChange = (event) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      term: event.target.value
    });
    onSearchChange(event.target.value);
  };

  render() {
    return (
      <div className="search-container">
        <input type="text"
               className="form-control search-input"
               placeholder="search"
               value={this.state.term}
               onChange={ this.onTermChange } />
      </div>
    );
  };
}
