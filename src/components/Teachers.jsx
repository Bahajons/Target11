import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';
import BaseApi from '../BaseApi';

export default function Teachers() {
  const [advisors, setAdvisors] = useState([])

  useEffect(() => {

    GetAdvisors()

  }, [])

  const GetAdvisors = async () => {
    await axios.get(`${BaseApi}advisors/`)
      .then(res => {
        console.log(res.data);
        setAdvisors(res.data)
      })
      .catch(err => { console.log(err); })
  }

  return (
    <>
      {/* <!-- team start --> */}
      <div className="team-area pt-95 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="section-title mb-50 text-center">
                <div className="section-title-heading mb-20">
                  <h1 className="primary-color">Bizning jamoa</h1>
                </div>
                <div className="section-title-para">
                  {/* <p className="gray-color">Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scelerisqu
                    Nullam arcu liquam here was consequat.</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="team-list">
            <div className="row">
              <Swiper
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
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  991: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // navigation
                // parallax={Navigation}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')} style={{ width: "100%" }}
              >


                {advisors.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="col-xl-12">
                      <div className="team-wrapper mb-30">
                        <div className="team-thumb">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="team-social-info text-center">
                          <div className="team-social-para">
                            <p>{item.experience}</p>
                          </div>
                        </div>
                        <div className="team-teacher-info text-center">
                          <h1>{item.full_name}</h1>
                          <h2>{item.position}</h2>
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
      {/* <!-- team end --> */}
    </>
  )
}
