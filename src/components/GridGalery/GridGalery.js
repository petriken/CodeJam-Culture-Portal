import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import { connect } from 'react-redux';
import './GridGalery.css';

class GridGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.IMAGES = [{
      src: props.data.works[0].image,
      thumbnail: props.data.works[0].image,
      thumbnailWidth: 543,
      thumbnailHeight: 300,
      caption: `${props.data.works[0].description}, ${props.data.name}`,
      tags: [{
        value: `${props.data.works[0].description}, ${props.data.name}`,
        title: `${props.data.works[0].description}, ${props.data.name}`,
      }],
    },
    {
      src: props.data.works[1].image,
      thumbnail: props.data.works[1].image,
      thumbnailWidth: 662,
      thumbnailHeight: 300,
      caption: `${props.data.works[1].description}, ${props.data.name}`,
      tags: [{
        value: `${props.data.works[1].description}, ${props.data.name}`,
        title: `${props.data.works[1].description}, ${props.data.name}`,
      }],
    },

    {
      src: props.data.works[2].image,
      thumbnail: props.data.works[2].image,
      thumbnailWidth: 640,
      thumbnailHeight: 300,
      caption: `${props.data.works[2].description}, ${props.data.name}`,
      tags: [{
        value: `${props.data.works[2].description}, ${props.data.name}`,
        title: `${props.data.works[2].description}, ${props.data.name}`,
      }],
    },
    {
      src: props.data.works[3].image,
      thumbnail: props.data.works[3].image,
      thumbnailWidth: 566,
      thumbnailHeight: 300,
      caption: `${props.data.works[3].description}, ${props.data.name}`,
      tags: [{
        value: `${props.data.works[3].description}, ${props.data.name}`,
        title: `${props.data.works[3].description}, ${props.data.name}`,
      }],
    },
    {
      src: props.data.works[4].image,
      thumbnail: props.data.works[4].image,
      thumbnailWidth: 564,
      thumbnailHeight: 300,
      caption: `${props.data.works[4].description}, ${props.data.name}`,
      tags: [{
        value: `${props.data.works[4].description}, ${props.data.name}`,
        title: `${props.data.works[4].description}, ${props.data.name}`,
      }],
    },
    {
      src: props.data.works[5].image,
      thumbnail: props.data.works[5].image,
      thumbnailWidth: 642,
      thumbnailHeight: 300,
      caption: `${props.data.works[5].description}, ${props.data.name}`,
      tags: [{
        value: `${props.data.works[5].description}, ${props.data.name}`,
        title: `${props.data.works[5].description}, ${props.data.name}`,
      }],
    }];
  }

  render() {
    return (
      <Gallery
        images={this.IMAGES}
        rowHeight={300}
        lightboxWidth={1220}
        backdropClosesModal={true}
      />
    );
  }
}

GridGallery.propTypes = {
  lang: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ lang: state.locales.lang });
export default connect(mapStateToProps)(GridGallery);
