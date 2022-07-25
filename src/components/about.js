import React, {useState } from 'react'
import Me from '../assets/me.jpeg'

export default function About () {
    return (
        <div id="about" class ='about'>
        <div class="about-container container-fluid">
        <div>
            <h1 className = "display-4">About Me</h1>
            <p className="lead">"First make the change easy(warning: this might be hard), then make the easy change."</p>
        </div>
        <div className="aboutme-card card mb-4">
        <div className="row g-0">
          <div className="about-img col-md-3 ">
            <img src={Me} className="about-img img-fluid" alt="..."/>
          </div>
        
          <div className="col-md-9 pt-4 pt-lg-0">
            <div className="card-body">
              <h3 className="card-title">Full Stack Web Developer</h3>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className = "row">
                  <div className = ' about-details col-lg-6'>
                      <ul className = 'about-ul'>
                          <li className = 'about-li'>
                         <i className = "bi bi-chevron-right"></i>
                         <strong>Birthday:</strong>
                         <span> 08 August 1993</span> 
                         </li>
                         <li className = 'about-li'>
                         <i className = "bi bi-chevron-right"></i>
                         <strong>Email:</strong>
                         <span> xavier.lnrd@gmail.com</span> 
                         </li>
                         <li className = 'about-li'> 
                         <i className = "bi bi-chevron-right"></i>
                         <strong>Phone:</strong>
                         <span> (678)-526-3682</span> 
                         </li>
                         <li className = 'about-li'>
                         <i className = "bi bi-chevron-right"></i>
                         <strong>City:</strong>
                         <span> Atlanta, Georgia</span> 
                         </li>
                      </ul>
                  </div>
                  <div class = 'about-details col-lg-6'>
                      <ul className = 'about-ul'>
                          <li className = 'about-li'>
                         <i className = "bi bi-chevron-right"></i>
                         <strong>Age:</strong>
                         <span> 29 </span> 
                         </li>
                         <li className = 'about-li'>
                         <i className = "bi bi-chevron-right"></i>
                         <strong>Education:</strong>
                         <span> Georgia Institute of Technology</span> 
                         </li>
                         <li className = 'about-li'>
                         <i className = "bi bi-chevron-right"></i>
                         <strong> Website:</strong>
                         <span> Github.com/xleonard1</span> 
                         </li>
                         <li className = 'about-li'>
                         <i className = "bi bi-chevron-right"></i>
                         <strong>Status:</strong>
                         <span> Open to Work </span> 
                         </li>
                      </ul>
                  </div>
              </div>
              <p>
                  I'm Xavier Leonard, a Full Stack Web Developer formally trainied in computer science, software engineering, and web development. Currently, I am working with a small LLC to bring public defender's work digital. I am interested in learning about opportunities where my combined software development skills, and my communication skills that I gained through teaching and entreprenuership will contribute to team motivation and cloud-native product solutions. Feel free to shoot me a contact request. 
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
}