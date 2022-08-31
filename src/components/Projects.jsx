import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BaseApi from '../BaseApi'

export default function Projects() {

  const [project, setProject] = useState(null)
  const Project = styled.div`
    background-image:url('img/bg/loyihalar.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    h2{
      text-align: center;
      color: #0177ea;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding-top: 15px;
    }
    .loyiha{
      .row{
        border-radius: 30px;
        padding: 15px;
        margin-bottom: 24px;
        border: 3px solid #0177ea;
        font-size: 35px;
        font-weight: 700;
      }
    }
    @media screen and (max-width:480px) {
      .loyiha{
        .row{
          border-radius: 30px;
          border: 3px solid #0177ea;
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  `

  useEffect(() => {
    getProject()
    window.scrollTo(0, 0)
  }, [])

  const getProject = async () => {
    await axios.get(`${BaseApi}projects/`)
      .then((res) => {
        console.log(res);
        setProject(res.data.results)
      })
      .catch((err) => { console.log(err); })
  }

  return (
    <>
      <Project>
        <div className='container'>
          <h2>Loyihalarimiz</h2>
          <div className="loyiha">
            {project?.map((item, index) => (
              <div key={index} className='row align-items-center'>
                <div className="col-md-8 col-7">
                  <Link to={`/project/${item.slug}`}>{item.name}</Link>
                </div>
                <div className="col-md-4 col-5">
                  <img className='w-100' src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Project>
    </>
  )
}
