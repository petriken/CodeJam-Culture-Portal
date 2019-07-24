import React from 'react';
import ImageGallery from 'react-image-gallery';
import './ImageGallery.css';

function ImageGalleryComponent(props) {
  const images = [
    {
      original: props.data.works[0],
      thumbnail: props.data.works[0],
    },
    {
      original: props.data.works[1],
      thumbnail: props.data.works[1],
    },
    {
      original: props.data.works[2],
      thumbnail: props.data.works[2],
    },
    {
      original: props.data.works[3],
      thumbnail: props.data.works[3],
    },
    {
      original: props.data.works[4],
      thumbnail: props.data.works[4],
    },
    {
      original: props.data.works[5],
      thumbnail: props.data.works[5],
    }
  ]

  return (
    <div>
      <h2 style={{textAlign: 'center', color: '#e86971', fontSize: '2em' }}>Фотогалерея</h2>
      <ImageGallery items={images} />
    </div>
  );
}

export default ImageGalleryComponent