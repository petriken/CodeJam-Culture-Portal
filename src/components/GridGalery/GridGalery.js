import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import { connect } from 'react-redux';
import messages from '../../translations';
import './GridGalery.css';

import Slide1 from '../../img/person_4/portfolio/work4.jpg';
import Slide2 from '../../img/person_6/portfolio/work3.jpg';
import Slide3 from '../../img/person_7/portfolio/work1.jpg';
import Slide4 from '../../img/person_7/portfolio/work4.jpg';
import Slide5 from '../../img/person_1/portfolio/work4.jpg';
import Slide6 from '../../img/person_1/portfolio/work3.jpg';
import Slide7 from '../../img/person_2/portfolio/work6.jpg';
import Slide8 from '../../img/person_3/portfolio/work1.jpg';
import Slide9 from '../../img/person_5/portfolio/work6.jpg';
import Slide10 from '../../img/person_8/portfolio/work6.jpg';
import Slide11 from '../../img/person_2/portfolio/work5.jpg';
import Slide12 from '../../img/person_5/portfolio/work3.jpg';

class GridGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.IMAGES = [{
      src: Slide1,
      thumbnail: Slide1,
      thumbnailWidth: 543,
      thumbnailHeight: 330,
      caption: `${messages[this.props.lang].caption1}, ${messages[this.props.lang].name4}`,
      tags: [{
        value: `${messages[this.props.lang].caption1}, ${messages[this.props.lang].name4}`,
        title: `${messages[this.props.lang].caption1}, ${messages[this.props.lang].name4}`,
      }],
    },
    {
      src: Slide2,
      thumbnail: Slide2,
      thumbnailWidth: 662,
      thumbnailHeight: 330,
      caption: `${messages[this.props.lang].caption2}, ${messages[this.props.lang].name6}`,
      tags: [{
        value: `${messages[this.props.lang].caption2}, ${messages[this.props.lang].name6}`,
        title: `${messages[this.props.lang].caption2}, ${messages[this.props.lang].name6}`,
      }],
    },

    {
      src: Slide3,
      thumbnail: Slide3,
      thumbnailWidth: 640,
      thumbnailHeight: 330,
      caption: `${messages[this.props.lang].caption3}, ${messages[this.props.lang].name7}`,
      tags: [{
        value: `${messages[this.props.lang].caption3}, ${messages[this.props.lang].name7}`,
        title: `${messages[this.props.lang].caption3}, ${messages[this.props.lang].name7}`,
      }],
    },
    {
      src: Slide4,
      thumbnail: Slide4,
      thumbnailWidth: 566,
      thumbnailHeight: 330,
      caption: `${messages[this.props.lang].caption4}, ${messages[this.props.lang].name7}`,
      tags: [{
        value: `${messages[this.props.lang].caption4}, ${messages[this.props.lang].name7}`,
        title: `${messages[this.props.lang].caption4}, ${messages[this.props.lang].name7}`,
      }],
    },
    {
      src: Slide5,
      thumbnail: Slide5,
      thumbnailWidth: 564,
      thumbnailHeight: 330,
      caption: `${messages[this.props.lang].caption5}, ${messages[this.props.lang].name1}`,
      tags: [{
        value: `${messages[this.props.lang].caption5}, ${messages[this.props.lang].name1}`,
        title: `${messages[this.props.lang].caption5}, ${messages[this.props.lang].name1}`,
      }],
    },
    {
      src: Slide6,
      thumbnail: Slide6,
      thumbnailWidth: 642,
      thumbnailHeight: 330,
      caption: `${messages[this.props.lang].caption6}, ${messages[this.props.lang].name1}`,
      tags: [{
        value: `${messages[this.props.lang].caption6}, ${messages[this.props.lang].name1}`,
        title: `${messages[this.props.lang].caption6}, ${messages[this.props.lang].name1}`,
      }],
    },
    {
      src: Slide7,
      thumbnail: Slide7,
      thumbnailWidth: 603,
      thumbnailHeight: 300,
      caption: `${messages[this.props.lang].caption7}, ${messages[this.props.lang].name2}`,
      tags: [{
        value: `${messages[this.props.lang].caption7}, ${messages[this.props.lang].name2}`,
        title: `${messages[this.props.lang].caption7}, ${messages[this.props.lang].name2}`,
      }],
    },
    {
      src: Slide8,
      thumbnail: Slide8,
      thumbnailWidth: 603,
      thumbnailHeight: 300,
      caption: `${messages[this.props.lang].caption8}, ${messages[this.props.lang].name3}`,
      tags: [{
        value: `${messages[this.props.lang].caption8}, ${messages[this.props.lang].name3}`,
        title: `${messages[this.props.lang].caption8}, ${messages[this.props.lang].name3}`,
      }],
    },

    {
      src: Slide9,
      thumbnail: Slide9,
      thumbnailWidth: 542,
      thumbnailHeight: 330,
      caption: `${messages[this.props.lang].caption9}, ${messages[this.props.lang].name5}`,
      tags: [{
        value: `${messages[this.props.lang].caption9}, ${messages[this.props.lang].name5}`,
        title: `${messages[this.props.lang].caption9}, ${messages[this.props.lang].name5}`,
      }],
    },
    {
      src: Slide10,
      thumbnail: Slide10,
      thumbnailWidth: 664,
      thumbnailHeight: 330,
      caption: `${messages[this.props.lang].caption10}, ${messages[this.props.lang].name8}`,
      tags: [{
        value: `${messages[this.props.lang].caption10}, ${messages[this.props.lang].name8}`,
        title: `${messages[this.props.lang].caption10}, ${messages[this.props.lang].name8}`,
      }],
    },
    {
      src: Slide11,
      thumbnail: Slide11,
      thumbnailWidth: 671,
      thumbnailHeight: 330,
      caption: `${messages[this.props.lang].caption11}, ${messages[this.props.lang].name2}`,
      tags: [{
        value: `${messages[this.props.lang].caption11}, ${messages[this.props.lang].name2}`,
        title: `${messages[this.props.lang].caption11}, ${messages[this.props.lang].name2}`,
      }],
    },
    {
      src: Slide12,
      thumbnail: Slide12,
      thumbnailWidth: 535,
      thumbnailHeight: 330,
      caption: `${messages[this.props.lang].caption12}, ${messages[this.props.lang].name5}`,
      tags: [{
        value: `${messages[this.props.lang].caption12}, ${messages[this.props.lang].name5}`,
        title: `${messages[this.props.lang].caption12}, ${messages[this.props.lang].name5}`,
      }],
    }];
  }

  render() {
    return (
      <Gallery
        images={this.IMAGES}
        rowHeight={330}
        lightboxWidth={1220}
        backdropClosesModal={true}
      />
    );
  }
}

GridGallery.propTypes = {
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ lang: state.locales.lang });
export default connect(mapStateToProps)(GridGallery);
