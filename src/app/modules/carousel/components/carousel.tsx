import { FC } from 'react';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Styles from './carousel-styles.module.scss';

const items = [
  {
    src: 'https://www.utracks.com/croppedImages/Walkers-Britain/French-Tours/Nozi_res-The-Ard_che-region_-France-1625160-1920px-16x7.jpg',
    alt: 'Image 1',
    title: 'title 1',
    caption: 'Caption 1',
  },
  {
    src: 'https://www.utracks.com/croppedImages/Walkers-Britain/French-Tours/Nozi_res-The-Ard_che-region_-France-1625160-1920px-16x7.jpg',
    alt: 'Image 2',
    title: 'title 2',
    caption: 'Caption 2',
  },
  {
    src: 'https://www.utracks.com/croppedImages/Walkers-Britain/French-Tours/Nozi_res-The-Ard_che-region_-France-1625160-1920px-16x7.jpg',
    alt: 'Image 3',
    title: 'title 3',
    caption: 'Caption 3',
  },
];

const CarouselComponent: FC = () => {
  return (
    <div className={Styles.carouselWrapper}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {items.map((item, index) => (
          <div key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className={Styles.carouselWrapper__carouselSlide}
            />
            <p className={Styles.carouselWrapper__carouselLegend}>
              <span className={Styles.carouselWrapper__carouselTitle}>
                {item.title}
              </span>
              {item.caption}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
