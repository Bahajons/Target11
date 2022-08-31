import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BaseApi from '../../BaseApi'
import moment from 'moment'

export default function Project() {

  const { id } = useParams()
  const [project, setProject] = useState([])
  const [news, setNews] = useState([])
  useEffect(() => {
    GetPractise()
    GetNews()
    window.scrollTo(0, 0)
  }, [])




  const GetNews = async () => {
    await axios.get(`${BaseApi}news/`)
      .then((res) => {
        console.log(res.data.results);
        setNews(res.data.results)
      })
      .catch((err) => { console.log(err) })
  }



  const GetPractise = async () => {
    await axios.get(`${BaseApi}projects/`)
      .then(res => {
        console.log(res.data.results);
        setProject(res.data.results)
      })
      .catch(err => { console.log(err); })
  }

  const findItem = (id) => {
    let obj = {};
    project.forEach(item => {
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
            style={{ backgroundImage: "url(" + findItem(id).image + ")" }}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="slider-content slider-content-breadcrumb text-center">
                    <h1 className="white-color f-700">{findItem(id).name}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course-details-area gray-bg pt-100">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 col-lg-8">
              <div class="single-course-details-area mb-30">
                <div class="course-details-thumb">
                  <img src="img/courses/course_details_thumb.jpg" alt="" />
                </div>
                <div class="single-course-details white-bg">
                  <div class="course-details-title mb-20">
                    <h1>{findItem(id).name} loyihamiz haqida</h1>
                  </div>
                  <div class="course-details-tabs" style={{ width: "100%" }}>
                    {findItem(id).description ? (<div dangerouslySetInnerHTML={{ __html: `${findItem(id).description}` }} ></div>) : ("")}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4">
              <div class="courses-details-sidebar-area">
                <div class="widget mb-40 widget-padding white-bg">
                  <h4 class="widget-title">So'ngi yangiliklar</h4>
                  <div class="sidebar-rc-post">
                    <ul>
                      {news !== undefined && news.slice(0, 5).map((item, index) => (
                        <li>
                          <div class="sidebar-rc-post-main-area d-flex mb-20">
                            <img class='w-25' src={item.image} alt="" />
                            <div class="rc-post-content">
                              <h4>
                                <Link to={`/newsdetails/${item.slug}`}>{item.title} </Link>
                              </h4>
                              <div class="widget-advisors-name">
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
