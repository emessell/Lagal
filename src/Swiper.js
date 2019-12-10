import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SimpleSwiper = () => {
    const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true,
        spaceBetween: 30
      }

      return(
        <div id="Gallery" className="swiper-container">
            <Swiper {...params}>
                <div className="pic1"></div>
                <div className="pic2"></div>
                <div className="pic3"></div>
                <div className="pic4"></div>
            </Swiper>
        </div>
      )

}

export default SimpleSwiper;