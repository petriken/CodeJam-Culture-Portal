import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CommonPageItems.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import Description from '../Description/Description';
import data from '../../data/people';

class CommonPageItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: '',
    };
    this.checkMatch = (item, searchWord) => {
      const string = item;
      let array;
      if (string.indexOf('.') !== -1) {
        [array] = string.split('.');
      } else {
        array = string.split(' ');
      }
      return typeof array === 'string'
        ? array.match(new RegExp(`^${searchWord}`, 'i'))
        : array.some(i => i.match(new RegExp(searchWord, 'i')));
    };
  }

  /* eslint-disable camelcase */
  UNSAFE_componentWillMount() {
    this.setState({ items: data });
  }

  render() {
    return this.state.items.map((item, index) => {
      const term = this.props.term ? this.props.term : '';
      const city = this.props.city ? this.props.city : '';
      return (
        <div
          className={`${
            this.checkMatch(item.name, term)
            && this.checkMatch(item.birthPlace, city)
              ? 'common-page'
              : 'hidden'
          }`}
          key={index}
        >
          <Avatar data={item} />
          <div className="description-container">
            <Description data={item} />
            <Link
              to="/personalpage"
              className="read-more-button"
              id={index}
              onClick={this.props.onButtonClick}
            >
              Узнать больше
            </Link>
          </div>
        </div>
      );
    });
  }
}

CommonPageItems.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ term: state.term, city: state.city });
export default connect(mapStateToProps)(CommonPageItems);
