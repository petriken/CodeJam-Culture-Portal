import React from 'react';
import './CommonPage.css';
import Avatar from '../../components/Avatar/Avatar';
import Description from '../../components/Description/Description';
import data from '../../data/people';
import {Link} from 'react-router-dom';

function CommonPage(props) {  
  return (
    data.map((item, index) => {
      return (
        <div className="common-page"
             key={index}>          
          <Avatar data={item}/>
          <div className="description-container">
            <Description data={item}/>
            <Link to="/personalpage"  
                  className="read-more-button"
                  id={index}
                  onClick={props.onButtonClick}>
                  Узнать больше
            </Link>        
          </div>
        </div>
      );
    })
  )
}

export default CommonPage;