import React from 'react';
import Gallery from 'react-grid-gallery';
import './GridGalery.css';

import Slide1 from '../../img/assets/gridGallery/1.jpg';
import Slide2 from '../../img/assets/gridGallery/2.jpg';
import Slide3 from '../../img/assets/gridGallery/3.jpg';
import Slide4 from '../../img/assets/gridGallery/4.jpg';
import Slide5 from '../../img/assets/gridGallery/5.jpg';
import Slide6 from '../../img/assets/gridGallery/6.jpg';
import Slide7 from '../../img/assets/gridGallery/7.jpg';
import Slide8 from '../../img/assets/gridGallery/8.jpg';
import Slide9 from '../../img/assets/gridGallery/9.jpg';
import Slide10 from '../../img/assets/gridGallery/10.jpg';
import Slide11 from '../../img/assets/gridGallery/11.jpg';
import Slide12 from '../../img/assets/gridGallery/12.jpg';

const IMAGES = [{
  src: Slide1,
  thumbnail: Slide1,
  thumbnailWidth: 543,
  thumbnailHeight: 330,
  caption: 'Сказки волшебного леса',
  tags: [{ value: 'Сказки волшебного леса', title: 'Сказки волшебного леса' }],
},
{
  src: Slide2,
  thumbnail: Slide2,
  thumbnailWidth: 662,
  thumbnailHeight: 330,
  caption: 'Башня Шамиля',
  tags: [{ value: 'Башня Шамиля', title: 'Башня Шамиля' }],
},

{
  src: Slide3,
  thumbnail: Slide3,
  thumbnailWidth: 640,
  thumbnailHeight: 330,
  caption: 'Рассветная песня ангелов',
  tags: [{ value: 'Рассветная песня ангелов', title: 'Рассветная песня ангелов' }],
},
{
  src: Slide4,
  thumbnail: Slide4,
  thumbnailWidth: 566,
  thumbnailHeight: 330,
  caption: 'Сказки волшебного леса',
  tags: [{ value: 'Сказки волшебного леса', title: 'Сказки волшебного леса' }],
},
{
  src: Slide5,
  thumbnail: Slide5,
  thumbnailWidth: 564,
  thumbnailHeight: 330,
  caption: 'На закате',
  tags: [{ value: 'На закате', title: 'На закате' }],
},
{
  src: Slide6,
  thumbnail: Slide6,
  thumbnailWidth: 642,
  thumbnailHeight: 330,
  caption: 'В берёзоиом лесу',
  tags: [{ value: 'В берёзоиом лесу', title: 'В берёзоиом лесу' }],
},
{
  src: Slide7,
  thumbnail: Slide7,
  thumbnailWidth: 603,
  thumbnailHeight: 300,
  caption: 'Моя любимая река',
  tags: [{ value: 'Моя любимая река', title: 'Моя любимая река' }],
},
{
  src: Slide8,
  thumbnail: Slide8,
  thumbnailWidth: 603,
  thumbnailHeight: 300,
  caption: 'Вечер в деревне',
  tags: [{ value: 'Вечер в деревне', title: 'Вечер в деревне' }],
},

{
  src: Slide9,
  thumbnail: Slide9,
  thumbnailWidth: 542,
  thumbnailHeight: 330,
  caption: 'Апрельский вечер',
  tags: [{ value: 'Апрельский вечер', title: 'Апрельский вечер' }],
},
{
  src: Slide10,
  thumbnail: Slide10,
  thumbnailWidth: 664,
  thumbnailHeight: 330,
  caption: 'На подходе к леднику',
  tags: [{ value: 'На подходе к леднику', title: 'На подходе к леднику' }],
},
{
  src: Slide11,
  thumbnail: Slide11,
  thumbnailWidth: 671,
  thumbnailHeight: 330,
  caption: 'Тропинка к свету',
  tags: [{ value: 'Тропинка к свету', title: 'Тропинка к свету' }],
},
{
  src: Slide12,
  thumbnail: Slide12,
  thumbnailWidth: 535,
  thumbnailHeight: 330,
  caption: 'После грозы',
  tags: [{ value: 'После грозы', title: 'После грозы' }],
}];

export default class GridGallery extends React.Component {
  render() {
    return (
        <Gallery
          images={IMAGES}
          rowHeight={330}
          lightboxWidth={1220}
          backdropClosesModal={true}
        />
    );
  }
}
