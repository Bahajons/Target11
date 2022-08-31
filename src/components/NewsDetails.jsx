import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BaseApi from '../BaseApi'

export default function NewsDetails() {

  const { id } = useParams()
  const [news, setNews] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    GetNews()
  }, [id])


  const GetNews = async () => {
    await axios.get(`${BaseApi}news/`)
      .then(res => {
        console.log(res.data.results);
        setNews(res.data.results)
      })
      .catch(err => { console.log(err) })
  }

  const findItem = (id) => {
    let obj = {};
    news.forEach(item => {
      if (item.slug === id) obj = item;
    });
    console.log(obj);
    return obj;
  }

  return (
    <>
      <div className="event-details-area gray-bg pt-20 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="single-event-details-area white-bg mb-40">
                <div className="event-details-thumb">
                  <img src="img/events/event_details_thumb.jpg" alt="" />
                </div>
                <div className="single-event-details event-details-padding white-bg">
                  <div className="events-text-title clearfix mb-20">
                    <a>
                      <h4 id="NewsTitle"> {findItem(id).title ? (findItem(id).title)
                        : ""}</h4>
                    </a>
                    <div className="time-area">
                      <span className="ti-time"></span>
                      <span className="published-time">
                        {moment(findItem(id).created_at).format('MM.DD.YYYY')}
                        {/* 05:23, 22.04.2022 */}
                      </span>
                    </div>
                  </div>
                  {findItem(id).title ? (<div dangerouslySetInnerHTML={{ __html: `${findItem(id).full_description}` }} ></div>)
                    : ""}
                  <div className="events-details-share d-flex justify-content-end mt-30">
                    <div className="events-details-title">
                      <span><a href="https://www.instagram.com/targetedu.uz/">Bizni instagram sahifa</a></span>
                    </div>
                    {/* <div className="events-details-socila-icon">
                      <ul>
                        <li><a href="#"><span className="ti-facebook"></span></a></li>
                        <li><a href="#"><span className="ti-twitter-alt"></span></a></li>
                        <li><a href="#"><span className="ti-github"></span></a></li>
                        <li><a href="#"><span className="ti-google"></span></a></li>
                        <li><a href="#"><span className="ti-pinterest "></span></a></li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                <div className="events-details-form faq-area-form white-bg mb-30">
                  <form>
                    <div className="col-xl-12">
                      <div className="faq-form-btn events-form-btn text-center">
                        <Link className="btn" style={{ color: '#fff' }} to={'/contact'}>Ro'yxatdan o'ting</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="courses-details-sidebar-area">
                <div className="widget mb-40 widget-padding white-bg">
                  <h4 className="widget-title">So'ngi yangiliklar</h4>
                  <div className="sidebar-rc-post">
                    <ul>
                      {news.map((item, index) => (
                        <li key={index}>
                          <div className="sidebar-rc-post-main-area d-flex mb-20">
                            <div className="rc-post-thumb">
                              {/* <a href="course_details.html">
                              <img src="img/courses/rcourses_thumb01.png" alt="" />
                            </a> */}
                            </div>
                            <div className="rc-post-content">
                              <h4>
                                <a href="course_details.html">
                                  <Link to={`/newsdetails/${item.slug}`}>{item.title}</Link></a>
                              </h4>
                              <div className="widget-advisors-name">
                                <span>{moment(item.created_at).format('MM.DD.YYYY')}
                                  {/* <span className="f-500">Marcelo</span> */}
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
