import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BaseApi from '../../BaseApi'
import moment from 'moment'

export default function Course() {
  const [course, setCourse] = useState([])
  const [news, setNews] = useState([])

  const GetNews = async () => {
    await axios.get(`${BaseApi}news/`)
      .then(res => {
        setNews(res.data.results)
      })
      .catch(err => { console.log(err) })
  }

  useEffect(() => {
    GetCourse()
    GetNews()
    window.scrollTo(0, 0)

  }, [])

  const GetCourse = async () => {
    await axios.get(`${BaseApi}courses/`)
      .then((res) => {
        console.log(res.data.results);
        setCourse(res.data.results)
      })
      .catch((err) => { console.log(err); })
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
      <div className="slider-area">
        <div className="pages-title">
          <div className="single-slider slider-height slider-height-breadcrumb d-flex align-items-center"
            style={{ backgroundImage: "url('./img/bg/others_bg.jpg')" }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider-content slider-content-breadcrumb text-center">
                    <h1 className="white-color f-700">Kurslar</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-details-area gray-bg pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="row">
                {course.map((item, index) => (
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="courses-wrapper courses-wrapper-3 mb-30">
                      <div className="courses-thumb">
                        <Link to={`/course/${item.slug}`}>
                          <img src={item.image} alt="" />
                        </Link>
                      </div>
                      <div className="courses-content courses-content-3 clearfix">
                        <div className="courses-heading mt-25 d-flex">
                          <div className="course-title-3">
                            <Link to={`course/${item.slug}`}><h1>{item.name}</h1></Link>
                          </div>
                        </div>
                        <div className="courses-para mt-15">
                          <p>{item.description}</p>
                        </div>
                        <div className="courses-wrapper-bottom clearfix mt-35">
                          <div className="courses-button">
                            <a href="course_details.html"><Link to={'/contact'}> Kursga yozilish</Link></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="courses-details-sidebar-area">
                <div className="widget mb-40 widget-padding white-bg">
                  <h4 className="widget-title">So'ngi yangiliklar</h4>
                  <div className="sidebar-rc-post">
                    <ul>
                      {news !== undefined && news.slice(0, 5).map((item, index) => (
                        <li key={index}>
                          <div className="sidebar-rc-post-main-area d-flex mb-20">
                            <img className='w-25' src={item.image} alt="" />
                            <div className="rc-post-content">
                              <h4>
                                <Link to={`/newsdetails/${item.slug}`}>{item.title} </Link>
                              </h4>
                              <div className="widget-advisors-name">
                                <span>
                                  {moment(item.created_at).format('MM.DD.YYYY')}
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
