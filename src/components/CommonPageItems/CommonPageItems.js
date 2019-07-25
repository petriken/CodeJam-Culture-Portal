import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CommonPageItems.css';
import Avatar from '../../components/Avatar/Avatar';
import Description from '../../components/Description/Description';
import data from '../../data/people';
import { Link } from 'react-router-dom';

class CommonPageItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ''
    }
  }

  componentWillMount() {
    this.setState({ items: data });
  }

  checkMatch(item, searchWord) {
    let string = item;
    let array;
    if (string.indexOf('.') !== -1) {
      array = string.split('.')[1];
    } else {
      array = string.split(' ');
    }
    return typeof array === 'string'
      ? array.match(new RegExp(`^${searchWord}`, 'i'))
      : array.some(i => i.match(new RegExp(searchWord, 'i')))
  };

  render() {
    return (
      this.state.items.map((item, index) => {
        const term = this.props.term ? this.props.term : '';
        const city = this.props.city ? this.props.city : '';
        return (
          <div
            className={
              `${this.checkMatch(item.name, term) && this.checkMatch(item.birthPlace, city) ? 'common-page' : 'hidden'}`
            }
            key={index}>
            <Avatar data={item} />
            <div className="description-container">
              <Description data={item} />
              <Link to="/personalpage"
                className="read-more-button"
                id={index}
                onClick={this.props.onButtonClick}>
                Узнать больше
            </Link>
            </div>
          </div>
        );
      })
    )
  }
}

const mapStateToProps = state => ({ term: state.term, city: state.city })
export default connect(mapStateToProps)(CommonPageItems);
