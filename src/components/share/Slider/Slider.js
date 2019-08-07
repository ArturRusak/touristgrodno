import React from 'react';
import Swiper from 'react-id-swiper';
import './slider.css';

function Slider() {
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
    spaceBetween: 30
  };

  return (
    <Swiper {...params}>
      <div><img src="https://grodnoinvest.by/uploads/news/2019/may/gorod.jpg" title="https://grodnoinvest.by"
                alt="https://grodnoinvest.by"/></div>
      <div><img src="https://grodnoinvest.by/uploads/news/2019/may/gorod.jpg" title="https://grodnoinvest.by"
                alt="https://grodnoinvest.by"/></div>
      <div><img src="https://grodnoinvest.by/uploads/news/2019/may/gorod.jpg" title="https://grodnoinvest.by"
                alt="https://grodnoinvest.by"/></div>
    </Swiper>
  );
}

export default Slider;