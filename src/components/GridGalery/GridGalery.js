import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import { connect } from 'react-redux';
import messages from '../../translations';
import './GridGalery.css';

class GridGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.IMAGES = [{
      src: props.data.works[0],
      thumbnail: props.data.works[0],
      thumbnailWidth: 543,
      thumbnailHeight: 300,
      caption: `${messages[this.props.lang].caption1}, ${messages[this.props.lang]}.${props.data.name}`,
      tags: [{
        value: `${messages[this.props.lang].caption1}, ${messages[this.props.lang]}.${props.data.name}`,
        title: `${messages[this.props.lang].caption1}, ${messages[this.props.lang]}.${props.data.name}`,
      }],
    },
    {
      src: props.data.works[1],
      thumbnail: props.data.works[1],
      thumbnailWidth: 662,
      thumbnailHeight: 300,
      caption: `${messages[this.props.lang].caption2}, ${messages[this.props.lang]}.${props.data.name}`,
      tags: [{
        value: `${messages[this.props.lang].caption2}, ${messages[this.props.lang]}.${props.data.name}`,
        title: `${messages[this.props.lang].caption2}, ${messages[this.props.lang]}.${props.data.name}`,
      }],
    },

    {
      src: props.data.works[2],
      thumbnail: props.data.works[2],
      thumbnailWidth: 640,
      thumbnailHeight: 300,
      caption: `${messages[this.props.lang].caption3}, ${messages[this.props.lang]}.${props.data.name}`,
      tags: [{
        value: `${messages[this.props.lang].caption3}, ${messages[this.props.lang]}.${props.data.name}`,
        title: `${messages[this.props.lang].caption3}, ${messages[this.props.lang]}.${props.data.name}`,
      }],
    },
    {
      src: props.data.works[3],
      thumbnail: props.data.works[3],
      thumbnailWidth: 566,
      thumbnailHeight: 300,
      caption: `${messages[this.props.lang].caption4}, ${messages[this.props.lang]}.${props.data.name}`,
      tags: [{
        value: `${messages[this.props.lang].caption4}, ${messages[this.props.lang]}.${props.data.name}`,
        title: `${messages[this.props.lang].caption4}, ${messages[this.props.lang]}.${props.data.name}`,
      }],
    },
    {
      src: props.data.works[4],
      thumbnail: props.data.works[4],
      thumbnailWidth: 564,
      thumbnailHeight: 300,
      caption: `${messages[this.props.lang].caption5}, ${messages[this.props.lang]}.${props.data.name}`,
      tags: [{
        value: `${messages[this.props.lang].caption5}, ${messages[this.props.lang]}.${props.data.name}`,
        title: `${messages[this.props.lang].caption5}, ${messages[this.props.lang]}.${props.data.name}`,
      }],
    },
    {
      src: props.data.works[5],
      thumbnail: props.data.works[5],
      thumbnailWidth: 642,
      thumbnailHeight: 300,
      caption: `${messages[this.props.lang].caption6}, ${messages[this.props.lang]}.${props.data.name}`,
      tags: [{
        value: `${messages[this.props.lang].caption6}, ${messages[this.props.lang]}.${props.data.name}`,
        title: `${messages[this.props.lang].caption6}, ${messages[this.props.lang]}.${props.data.name}`,
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
