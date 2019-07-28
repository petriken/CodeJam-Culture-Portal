import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImageGallery from 'react-image-gallery';
import './ImageGallery.css';
import PropTypes from 'prop-types';

function ImageGalleryComponent(props) {
  const images = [];
  props.data.works.forEach((item) => {
    const obj = {
      original: item,
      thumbnail: item,
    };
    images.push(obj);
  });

  return (
    <div id="imageGalleryComponent" >
      <h2 style={{ textAlign: 'center', color: '#e86971', fontSize: '2em' }}>
        <FormattedMessage id="imageGalery" />
      </h2>
      <ImageGallery items={images} />
    </div>
  );
}

ImageGalleryComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ImageGalleryComponent;
