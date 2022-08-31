import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BaseApi from '../BaseApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from './Axios';

export default function Contact() {
  return (
    <>
      {/* <!-- courses start --> */}
      <div className="advisors-area gray-bg pt-95 pb-70">
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-10 offset-md-1 ml-md-auto">
              <div className="contact-info-text">
                <div className="section-title mb-20">
                  <div className="section-title-heading mb-10">
                    <h1>Biz bilan aloqa</h1>
                  </div>
                  <div className="section-title-para">
                    <p>Lorem ipsum dolor sit amet, consecte adipisicing elit sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
              </div>
              <div className="contact-info mb-50 wow fadeInRight" data-wow-delay=".3s"
                style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInRight' }}>
                <ul>
                  <li>
                    <div className="contact-icon">
                      <i className="ti-headphone"></i>
                    </div>
                    <div className="contact-text">
                      <h5>Bizga bog'laning</h5>
                      <span> 71 200 07 37</span>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="ti-email"></i>
                    </div>
                    <div className="contact-text">
                      <h5>Email Us</h5>
                      <span>target@gmail.com</span>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="ti-location-pin"></i>
                    </div>
                    <div className="contact-text">
                      <h5>Joylashuv</h5>
                      <span>Toshkent shahri, Sergili tumani Shokirariq 85-uy</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-10 offset-md-1 ml-md-auto">
              <div className="events-details-form faq-area-form mb-30 p-0">
                {/* <form> */}
                {/* <div className="row">
                  <div className="col-xl-8">
                    <div className="events-form-title mb-25">
                      <h2>Savolingiz bormi</h2>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <input className='form-control my-2' placeholder="Ism :" type="text" value={contact.full_name} onChange={(e) => { setContact({ ...contact, full_name: e.target.value }) }} />
                  </div>
                  {console.log(contact)}
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <input className='form-control my-2' placeholder="Tel :" type="text" value={contact.phone} onChange={(e) => { setContact({ ...contact, phone: e.target.value }) }} />
                  </div>
                  <div className="col-xl-12">
                    <textarea className='form-control my-2' cols="30" rows="10" value={contact.text} placeholder="Savol :" onChange={(e) => { setContact({ ...contact, text: e.target.value }) }}></textarea>
                  </div>
                  <div className="col-xl-12">
                    <div className="faq-form-btn events-form-btn d-flex flex-column">
                      <button type='button' className="btn m-0" onClick={() => { PostContact() }}>Yuborish</button>
                    </div>
                  </div>
                </div> */}

                <iframe width="100%" style={{overflow:"hidden"}} height="450px" src="https://forms.amocrm.ru/forms/html/form_972841_327bd32fbf98ec9b36c62e503b4a71a2.html?date=1661869235#{%22form_id%22:972841,%22form_hash%22:%22327bd32fbf98ec9b36c62e503b4a71a2%22,%22user_origin%22:{%22datetime%22:%22Tue%20Aug%2030%202022%2019:20:35%20GMT+0500%20(Uzbekistan%20Standard%20Time)%22,%22referer%22:%22http://localhost:3000/%22},%22is_modal%22:false,%22success_message%22:%22%D0%A1%D0%B8%D0%B7%20%D1%80%D1%9E%D0%B9%D1%85%D0%B0%D1%82%D0%B4%D0%B0%D0%BD%20%D1%9E%D1%82%D0%B4%D0%B8%D0%BD%D0%B3%D0%B8%D0%B7!%22,%22has_redirect%22:%22true%22,%22is_dark_bg%22:true,%22utm%22:{%22source%22:%22%22,%22medium%22:%22%22,%22content%22:%22%22,%22campaign%22:%22%22,%22term%22:%22%22},%22ga%22:{},%22location%22:%22https://forms.amocrm.ru/xzvmdr%22,%22dp%22:{}}"
                  title="Ro'yxatdan o'tish" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>




                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- courses end --> */}
      {/* <!-- map start --> */}
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500.6732632497744!2d69.21439283423202!3d41.2142615857405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61c623494167%3A0x3526fbd1e97ed388!2sTarget%20Xususiy%20Maktabi!5e0!3m2!1suz!2s!4v1651194070767!5m2!1suz!2s"
          width="100%" height="600" style={{ border: 0 }} loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* <!-- map end --> */}
    </>
  )
}
