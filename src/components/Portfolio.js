import React, {useState } from 'react'
import Jumbotron from './jumbotron'
import Skills from './skills'
import Projects from './projects'
import About from './about'
import Navigation from './navbar'
import Footer from './Footer'
import ContactForm from './Contact'

export default function Portfolio () {
  return (
      <div>
          <Navigation/>
          <Jumbotron/>
          <About/>
          <Skills/>
          <Projects/>
          <ContactForm/>
          <Footer/>        
      </div>
  )




}