import React from 'react';
import './ListOfWorks.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function ListOfWorks(props) {
  return (
    <div id="listOfWorks">
      <h2 style={{ textAlign: 'center', color: '#e86971', fontSize: '2em' }}>
        Список произведений
      </h2>
      <List className="list-works">

          <ListItem button className="listitem-title listitem-container">
            <span className="year">Дата создания</span>
            <span className="work">Произведение</span>
          </ListItem>

      {props.data.listOfWorks.map((item, index) => (
        <ListItem button className="listitem-container" key={index}>
          <span className="year">{item.year}</span>
          <span className="work">{item.work}</span>
        </ListItem>
      ))}
      </List>
    </div>
  );
}

export default ListOfWorks;
