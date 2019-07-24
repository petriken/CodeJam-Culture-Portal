import React from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";

function VideoPlayer(props) {
  return (
    <div style={{maxWidth: 1200, margin: '60px auto'}}>
      <h2 style={{textAlign: 'center', color: '#e86971', fontSize: '2em' }}>Видео</h2>
      <Player
        playsInline
        poster=""
        src={props.data.video}
      />
    </div>
  );
}

export default VideoPlayer
