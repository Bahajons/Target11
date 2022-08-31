import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BaseApi from '../../BaseApi'
import moment from 'moment'
export default function InterSchool() {
  const [news, setNews] = useState([])
  const [school, setSchool] = useState([])

  useEffect(() => {
    GetNews()
    GetSchool()
  }, [])

  const GetNews = async () => {
    await axios.get(`${BaseApi}news/`)
      .then((res) => {
        console.log(res.data.results);
        setNews(res.data.results)
      })
      .catch((err) => { console.log(err) })
  }
  const GetSchool = async () => {
    await axios.get(`${BaseApi}schools/`)
      .then((res) => {
        console.log(res.data.results);
        setSchool(res.data.results)
      })
      .catch((err) => { console.log(err) })
  }
  const findItem = (id) => {
    let obj = {};
    school.forEach(item => {
      if (item.slug === id) obj = item;
    });
    console.log(obj);
    return obj;
  }


  return (
    <>
      <div classNameName="slider-area">
      <div className="pages-title">
          <div className="single-slider slider-height slider-height-breadcrumb d-flex align-items-center"
            style={{ backgroundImage: "url('./img/bg/school.jpg')" }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider-content slider-content-breadcrumb text-center">
                    {/* <h1 className="white-color f-700">So'ngi yangiliklar</h1> */}
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
              {findItem('school').slug ? (<div dangerouslySetInnerHTML={{ __html: `${findItem('school').description}` }} ></div>)
                : ""}

            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="courses-details-sidebar-area">
                <div className="widget mb-40 widget-padding white-bg">
                  <h4 className="widget-title">So'ngi yangiliklar</h4>
                  <div className="sidebar-rc-post">
                    <ul>
                      {news !== undefined && news.slice(0, 5).map((item, index) => (
                        <li>
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
