import React, { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BaseApi from '../../BaseApi';
import styled from 'styled-components';

export default function MainSlider() {
  const [slider, setSlider] = useState([])

  const MainSlider = styled.div`
    padding-top: 50px;
  `


  useEffect(() => {

    GetSlider()

  }, [])

  async function GetSlider() {
     axios.get(`${BaseApi}banners/`)
      .then(res => {
        setSlider(res.data)
        console.log(res);
      })
      .catch(err => { })
  }

  return (
    <>
      <Swiper className=' wow fadeInRight'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={true} data-swiper-autoplay="2000"

        parallax={Navigation}
        pagination={{ clickable: true }}

        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) =>}
        style={{ width: "100%" }}
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index} className='py-lg-4 py-1 '
            style={{ backgroundImage: `url(${item.image})`, height: "80vh", backgroundPosition: "center top", backgroundSize: "cover" }}  >
            <MainSlider>


              <div className="container wow fadeInRight">
                <div className="col-xl-9 col-md-12">
                  <div className="slider-content slider-content-2">
                    <h1 className="white-color f-700" data-animation="fadeInUp" data-delay=".2s"><span>{item.title}</span><br />{item.subtitle}</h1>
                    <p data-animation="fadeInUp" data-delay=".4s">{item.description}</p>
                    <button className="theme-btn" data-animation="fadeInUp" data-delay=".6s"><span className="btn-text"><a
                      href="#">
                      <Link to={'/contact'} style={{ color: "black" }}>Bog'lanish</Link> </a></span></button>
                  </div>
                </div>
              </div>
            </MainSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
