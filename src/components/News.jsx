import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BaseApi from '../BaseApi'
import moment from 'moment'

export default function News() {

  const [news, setNews] = useState([])

  const GetNews = async () => {
    await axios.get(`${BaseApi}news/`)
      .then(res => {
        setNews(res.data.results)
      })
      .catch(err => { console.log(err) })
  }
  useEffect(() => {
    GetNews()
    window.scrollTo(0, 0)

  }, [])

  return (
    <>
      <div className="slider-area">
        <div className="pages-title">
          <div className="single-slider slider-height slider-height-breadcrumb d-flex align-items-center"
            style={{ backgroundImage: "url('./img/bg/bg_news.jpg')" }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider-content slider-content-breadcrumb text-center">
                    <h1 className="white-color f-700">So'ngi yangiliklar</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="events-area gray-bg pt-100 pb-70">
        <div className="container">
          <div className="events-list">
            <div className="row">
              {news.map((item, index) => (
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
                                {console.log(item)}
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
        </div>
      </div>
    </>
  )
}
