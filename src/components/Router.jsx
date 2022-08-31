import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Course from './loyihalar/Course'
import InterSchool from './loyihalar/InterSchool'
import Navbar from './Navbar'
import News from './News'
import NewsDetails from './NewsDetails'
import Teachers from './Teachers'
import Project from './loyihalar/Project'
import CourseDetails from './loyihalar/CourseDetails'
import Projects from './Projects'

export default function Router() {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/news" element={<News />} />
                <Route path="/newsdetails/:id" element={<NewsDetails />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/inter-school" element={<InterSchool />} />
                <Route path="/course" element={<Course />} />
                <Route path="/course/:id" element={<CourseDetails />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}
