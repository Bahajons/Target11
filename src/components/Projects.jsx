import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BaseApi from '../BaseApi'
import { Project } from './Styled.component'

export default function Projects() {

  const [project, setProject] = useState(null)
 

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
