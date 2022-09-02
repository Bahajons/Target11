import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import BaseApi from '../../BaseApi'
import moment from 'moment'

export default function CourseDetails() {
  const { id } = useParams()
  const [course, setCourse] = useState([])

  useEffect(() => {
    GetCourse()
  }, [course])



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
    course.forEach(item => {
      if (item.slug === id) obj = item;
    });
    console.log(obj);
    return obj;
  }

  return (
    <div>
      <div className="event-details-area gray-bg pt-20 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="single-event-details-area white-bg mb-40">
                <div className="event-details-thumb">

                </div>
                <div className="single-event-details event-details-padding white-bg">
                  <div className="events-text-title clearfix mb-20">
                    <a>
                      <h4 id="NewsTitle"> {findItem(id).name ? (findItem(id).name)
                        : ""}</h4>
                    </a>
                  </div>
                  {findItem(id).name ? (<div dangerouslySetInnerHTML={{ __html: `${findItem(id).full_description}` }} ></div>)
                    : ""}

                  <div className="events-details-share d-flex justify-content-end mt-30">
                    <div className="events-details-title">
                      <span>Bizni sahifa</span>
                    </div>
                    <div className="events-details-socila-icon">
                      <ul>
                        <li><a href="#"><span className="ti-facebook"></span></a></li>
                        <li><a href="#"><span className="ti-twitter-alt"></span></a></li>
                        <li><a href="#"><span className="ti-github"></span></a></li>
                        <li><a href="#"><span className="ti-google"></span></a></li>
                        <li><a href="#"><span className="ti-pinterest "></span></a></li>
                      </ul>
                    </div>
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
                  <h4 className="widget-title">Kurslar</h4>
                  <div className="sidebar-rc-post">
                    <ul>
                      {course.map((item, index) => (
                        <li key={index}>
                          <div className="sidebar-rc-post-main-area d-flex mb-20">
                            <img className="w-25" src={`${item.image}`} alt="" />
                            <div className="rc-post-content">
                              <h4>
                                <a href="course_details.html"></a>
                                <Link to={`/course/${item.slug}`}>{item.name}</Link>
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



    </div>
  )
}
