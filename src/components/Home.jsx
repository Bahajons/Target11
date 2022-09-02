import axios from 'axios'
import React, { useEffect, useState, dangerouslySetInnerHTML } from 'react'
import Hamkorlar from './Hamkorlar'
import Navbar from './Navbar'
import Teachers from './Teachers'
import MainSlider from './tools/MainSlider'
import PupilsOpinion from './tools/PupilsOpinion'
import BaseApi from '../BaseApi'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Loading from './tools/Loading'
import styled from 'styled-components'
import { about } from '../Data'
import Qadriyat from './Qadriyat'
import { About } from './Styled.component'

export default function Home() {

  const [news, setNews] = useState([])
  const [abouts, setAbouts] = useState([])

  const GetNews = async () => {
    await axios.get(`${BaseApi}news/`)
      .then(res => {
        console.log(res.data.results);
        setNews(res.data.results)
      })
      .catch(err => { console.log(err) })
  }
  const GetAbout = async () => {
    await axios.get(`${BaseApi}abouts/`)
      .then(res => {
        console.log(res.data);
        setAbouts(res.data)
      })
      .catch(err => { console.log(err); })
  }
  useEffect(() => {
    GetAbout()
    GetNews()
  }, [])



  return (
    <>
      <MainSlider />

      <About>
        <div id="about" className="about-area pt-100 pb-70" >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>BIZ HAQIMIZDA</h2>
                {about.map((item, index) => (
                  <div key={index} className='w-100 py-3 px-md-4 px-2 mt-3 info'>
                    <div>
                      <h4>{item}</h4>
                    </div>
                  </div>
                ))}
                <button className="theme-btn mt-3" data-animation="fadeInUp" data-delay=".6s"><span className="btn-text"><a
                  href="#">
                  <Link to={'/projects'} style={{ color: "black" }}>Loyihalarimiz</Link> </a></span></button>
              </div>
            </div>
          </div>
        </div>
      </About>
      <Qadriyat />
      <div className="container">
        <div className="row pt-65">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature-wrapper mb-30">
              <div className="feature-title-heading">
                <h3>Kreativ muhit</h3>
                <span>01</span>
              </div>
              <div className="feature-text">
                <p>Yuqori tempdagi atmosfera faqat Amerikada emas, endi O'zbekistonda...</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature-wrapper mb-30">
              <div className="feature-title-heading">
                <h3>Professionallar</h3>
                <span>02</span>
              </div>
              <div className="feature-text">
                <p>Har bir xodim va o'qituvchilar maksimal darajada tajribali hamda saviyali.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="feature-wrapper mb-30">
              <div className="feature-title-heading">
                <h3>Imkoniyatlar</h3>
                <span>03</span>
              </div>
              <div className="feature-text">
                <p>Xohish va harakat bo'lsa bas, qolganini bizga qo'yib bering...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Teachers />
      {/* News News */}
      <div id="events" className="events-area events-bg-height pt-100 pb-95"
        style={{ backgroundImage: "url('img/courses/courses_bg.png')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="section-title mb-50 text-center">
                <div className="section-title-heading mb-20">
                  <h1 className="white-color">Yangiliklar</h1>
                </div>
                {/* <div className="section-title-para">
                  <p className="white-color">Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis
                    scelerisqu Nullam arcu liquam here was consequat.</p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="events-list mb-30">
            <div className="row">
              {/* cartNumber !== undefined && cartNumber.length < 3 ? */}
              {news !== undefined && news.slice(0, 4).map((item, index) => (
                <div className="col-xl-6 col-lg-6" key={index}>
                  <div className="single-events mb-30">
                    <div className="events-wrapper">
                      <div className="events-inner d-flex">
                        <div className="events-thumb">
                          <img className="h-100" src={item.image} alt="" />
                        </div>
                        <div className="events-text white-bg">
                          <div className="event-text-heading mb-20">

                            <div className="events-calendar text-center f-left">
                              <span className="date">
                                {moment(item.created_at).format('MM')}
                              </span>
                              <span className="month">
                                {moment(item.created_at).format('MMM YYYY')}
                              </span>
                            </div>
                            <div className="events-text-title clearfix">
                              <a href="event_details.html">
                                <Link to={`/newsdetails/${item.slug}`}>
                                  <h4>{item.title}</h4>
                                </Link>
                              </a>
                              <div className="time-area">
                                <span className="ti-time"></span>
                                <span className="published-time">
                                  {moment(item.created_at).format('LT')}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="events-para">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}






            </div>
          </div>
          <div className="events-view-btn">
            <div className="row">
              <div className="col-xl-12">
                <div className="view-all-events text-center">
                  <Link to={'/news'} style={{ color: "#fdc800" }} className="yewello-btn" >Barcha yangiliklarni ko'rish<span>&rarr;</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <PupilsOpinion />
      <Hamkorlar />

    </>
  )
}
