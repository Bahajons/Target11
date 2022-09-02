import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BaseApi from '../BaseApi'

export default function Navbar() {
  const [project, setProject] = useState([])
  useEffect(() => {
    GetPractise()

  }, [])

  const GetPractise = async () => {
    await axios.get(`${BaseApi}projects/`)
      .then(res => {
        setProject(res.data.results)
      })
      .catch(err => {
        // console.log(err);
      })
  }

  const hide = () => {
    let nav = document.getElementById('navbarSupportedContent')
    nav.classList.toggle('show')
  }

  const style = { fontSize: '16px', color: '#444', textTransform: "uppercase", fontWeight: "600" }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-4 wow fadeInDown">
        <div className="container-fluid" >

          <Link className='w-25' to={'/'}>
            <img className='w-100' src="./img/target_logo.png" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto pr-5" style={style}>
              <li className="nav-item">
                <a className="nav-link">
                  <Link style={style} onClick={() => { hide() }} to={'/news'}>Yangiliklar</Link><span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link onClick={() => { hide() }} style={style} to={'/inter-school'}>International school</Link><span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={""}><Link onClick={() => { hide() }} style={style} to={'/projects'}>Loyihalar</Link><span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={""}><Link onClick={() => { hide() }} style={style} to={'/course'}>Kurslar</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={""}>
                  <Link onClick={() => { hide() }} to={'/contact'}>Aloqa</Link>
                </a>
              </li>
            </ul>
            <a href={"tel:712000737"}>71 200 07 37</a>
          </div>
        </div>

      </nav>
    </>
  )
}
