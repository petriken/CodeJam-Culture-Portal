import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function TimeLine(props) {
  return ( 
    <div>
    <h2 style={{textAlign: 'center', color: '#e86971', fontSize: '2em' }}>Биография фотографа</h2>
    <Timeline lineColor={'#ddd'}>
      {props.data.activity.map((item, index) => {
      return (
        <TimelineItem
          key={index}
          dateText={item.date}
          dateInnerStyle={{ background: '#e86971', color: '#fff' }}
        >
          <h3>{item.place}</h3>
          <p>{item.description}</p>
        </TimelineItem>
      )
    }
    )}
    </Timeline>
    </div>
  )
}


export default TimeLine;