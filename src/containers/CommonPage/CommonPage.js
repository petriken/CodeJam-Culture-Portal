import React from 'react';
import './CommonPage.css';
import PropTypes from 'prop-types';
import CommonPageItems from '../../components/CommonPageItems/CommonPageItems';
import SearchPanel from '../../components/SearchPanel/SearchPanel';

function CommonPage(props) {
  return (
    <div className="commonpage-container">
      <SearchPanel />
      <CommonPageItems onButtonClick={props.onButtonClick} />
    </div>
  );
}

CommonPage.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default CommonPage;
