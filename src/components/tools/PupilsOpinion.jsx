import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BaseApi from '../../BaseApi';
import axios from 'axios';


export default function PupilsOpinion() {
  const [opinion, setOpinion] = useState([])


  useEffect(() => {

    GetOpinion()

  }, [])

  const GetOpinion = async () => {
    await axios.get(`${BaseApi}reviews/`)
      .then(res => {
        console.log(res.data);
        setOpinion(res.data)
      })
      .catch(err => { console.log(err) })
  }


  return (
    <>
      {/* <!-- testimonials start --> */}
      <div className="testimonilas-area pt-100 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="section-title mb-50 text-center">
                <div className="section-title-heading mb-20">
                  <h1 className="primary-color">Ota-onalar fikri </h1>
                </div>
                <div className="section-title-para">
                  <p className="gray-color">Ushbu fikrlarni saralashda maksimal darajada adekvat <br /> va neytral pozitsiyada bo'lishga harakat qildik</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonilas-list">
            <div className="row testimonilas-active">
              <Swiper className='py-md-5 pb-5'
                autoplay={{
                  delay: 20,
                  disableOnInteraction: false
                }}
                slidesPerView={'auto'}
                loop={true}
                spaceBetween={0}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // navigation
                // parallax={Navigation}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')} style={{ width: "100%" }}
              >

                {opinion.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="col-xl-12">
                      <div className="testimonilas-wrapper">
                        <div className="testimonilas-heading d-flex">
                          <img className='w-25' src={item.image} alt="" />
                          <div className="testimonilas-author-title">
                            <h1>{item.author}</h1>
                            <h2>{item.workplace}</h2>
                          </div>
                        </div>
                        <div className="testimonilas-para">
                          {item.author ? (<div dangerouslySetInnerHTML={{ __html: `${item.comment}` }} ></div>)
                            : ""}
                        </div>
                        <div className="testimonilas-rating">
                          <ul>
                            <li><span className="ti-star"></span></li>
                            <li><span className="ti-star"></span></li>
                            <li><span className="ti-star"></span></li>
                            <li><span className="ti-star"></span></li>
                            <li><span className="ti-star"></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- testimonials end --> */}
      {/* <!-- video start --> */}
      {/* <div className="video-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="video-wrapper text-center">
                <div className="video-content">
                  <a className="js-modal-btn" data-video-url="https://developer.a-blogcms.jp/themes/developer/movies/280.mp4" ><img
                    src="img/video/play_icon.png" alt="" /></a>
                  <span>Bizning so'ngi videolarimiz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Modal video */}


      {/* <!-- video end --> */}
      {/* <!-- counter start --> */}
      {/* <div className="counter-area">
        <div className="container pt-90 pb-65">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="couter-wrapper mb-30 text-center">
                <img src="img/counter/counter_icon1.png" alt="" />
                <span className="counter">10532</span>
                <h3>Satisfied Students</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="couter-wrapper mb-30 text-center">
                <img src="img/counter/counter_icon2.png" alt="" />
                <span className="counter">7985</span>
                <h3>Courses Complated</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="couter-wrapper mb-30 text-center">
                <img src="img/counter/counter_icon3.png" alt="" />
                <span className="counter">5382</span>
                <h3>Satisfied Students</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="couter-wrapper mb-30 text-center">
                <img src="img/counter/counter_icon4.png" alt="" />
                <span className="counter">354</span>
                <h3>Expert Advisors</h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- counter end --> */}
    </>
  )
}
