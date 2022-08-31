import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'

import { Link } from 'react-router-dom'
import BaseApi from '../BaseApi'

export default function Footer() {
  const [project, setProject] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    GetPractise()
  }, [])
  const top = () => {
    window.scrollTo(0, 0)
  }
  const GetPractise = async () => {
    await axios.get(`${BaseApi}projects/`)
      .then(res => {
        setProject(res.data.results)
      })
      .catch(err => {
        // console.log(err);
      })
  }
  return (
    <>
      <footer id="Contact">
        <div className="footer-area primary-bg pt-150">
          <div className="container">
            <div className="footer-top pb-35">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget mb-30">
                    <div className="footer-logo">
                      <Link to={'/'}>
                        <img className='w-50' src="img/white logo.png" alt="" />
                      </Link>
                    </div>
                    <div className="footer-para">
                      <p>Improve your self value</p>
                    </div>
                    <div className="footer-socila-icon">
                      <span>Ijtimoiy tarmoqlarda</span>
                      <div>
                        <ul className="d-flex">
                          <li><SocialIcon url='https://t.me/targetedu' bgColor='#fff' style={{ scale: "0.7" }} /></li>
                          <li><SocialIcon url='https://www.youtube.com/c/TargetEdu' bgColor='#fff' style={{ scale: "0.7" }} /></li>
                          <li><SocialIcon url='https://www.instagram.com/targetedu.uz/' bgColor='#fff' style={{ scale: "0.7" }} /></li>
                          <li><SocialIcon url='https://www.facebook.com/targetedu.uz/' bgColor='#fff' style={{ scale: "0.7" }} /></li>
                          <li><SocialIcon url='http://tiktok.com/@targetedu.uz' bgColor='#fff' style={{ scale: "0.7" }} /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 offset-xl-1 col-lg-4 col-md-6">
                  <div className="footer-widget mb-30">
                    <div className="footer-heading">
                      <h1>Tezkor linklar</h1>
                    </div>
                    <div className="footer-menu clearfix">
                      <ul>
                        <li>
                          <Link to={'/news'}>
                            Yangiliklar
                          </Link>
                        </li>
                        <li>
                          <Link to={'/inter-school'}>
                            International school
                          </Link>
                        </li>
                        <li>
                          <Link to={'/course'}>
                            Kurslar
                          </Link>
                        </li>
                        <li>
                          <Link to={'/contact'}>
                            Aloqa
                          </Link>
                        </li>

                        {project.map((item, index) => (
                          <li key={index}>
                            <Link to={`/project/${item.slug}`} onClick={() => { top() }}>
                              {item.name}
                            </Link>
                          </li>


                          // <a className="dropdown-item" key={index} href="#"><Link onClick={() => { hide() }} style={style} to={`/project/${item.slug}`}>{item.name}</Link></a>



                        ))}

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 offset-xl-1 col-lg-4  col-md-6">
                  <div className="footer-widget mb-30">
                    <div className="footer-heading">
                      <h1>Contact Us</h1>
                    </div>
                    <div className="footer-contact-list">
                      <div className="single-footer-contact-info">
                        <span className="ti-headphone "></span>
                        <span className="footer-contact-list-text"><a style={{ color: "#fff" }} href="tel:712000737">71 200 07 37</a></span>
                      </div>
                      <div className="single-footer-contact-info">
                        <span className="ti-email "></span>
                        <span className="footer-contact-list-text">target@gmail.com</span>
                      </div>
                      <div className="single-footer-contact-info">
                        <span className="ti-location-pin"></span>
                        <span className="footer-contact-list-text">Toshkent shahri, Sergili tumani, Shokirariq 85-uy</span>
                      </div>
                    </div>
                    <div className="opening-time">
                      <span>Ish vaqti</span>
                      <span className="opening-date">
                        Dush - Shan : 9:00  - 18:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom pt-25 pb-25">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="footer-copyright text-center">
                      <span><a target="_blank" href="https://www.iset.uz">iset group</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
