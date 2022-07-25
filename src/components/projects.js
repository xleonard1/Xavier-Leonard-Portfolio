import { faBlackboard } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import findmycrptoscreenshot from '../assets/findmycryptoscreenshot.png'
import techTalk from '../assets/Images/demo.png'
import game from '../assets/Images/game.png'
import '../styles/App.css'

const styles = {
 
    p1: {
      maxHeight: '380px',
      minHeight: '380px',
    },
    c1: {
      maxHeight: '600px'
    },
    row2: {
     position:"relative",
     height:"1267.13px"
    },
    col1: {
     maxWidth: "50px"
    },
    backgroundImg1: {
     backgroundImage: `url(${findmycrptoscreenshot})`,
     backgroundPosition: "left",
    },
    backgroundImg2: {
      backgroundImage: `url(${techTalk})`,
      backgroundPosition: "center"
    },
    backgroundImg3: {
      backgroundImage: `url(${game})`,
      backgroundPosition: "center"
    }

   
}





export default function Projects () {
  return (
  <div>
  <section className="wrapper" id = "portfolio">
  <div className="container">
    <div className="row">
      <div className="col text-center mb-5">
         <h1 className="display-4">Projects</h1>
         <p className="lead">
           “Those who plan do better than those who do not plan, even though they rarely stick to their plan.” –  Winston Churchill
         </p>
      </div>
    </div>
  <div className="row">
     <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
       <div className="project-card card card-has-bg click-col" style={styles.backgroundImg1} >
         <img className="card-img d-none" src={findmycrptoscreenshot} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"/>
         <div className="card-img-overlay d-flex flex-column">
            <div className="project-card-body card-body">
              <h4 className="card-title mt-0 "><a className="text-white" href="https://xleonard1.github.io/Find-My-Crypto/">Find My Crypto</a></h4>
              <p className="text-white">Crypto Currency Website that allows users to view current crypto news, updated crypto prices, track a crypto wallet, and calculate crypto ownership based on amount invested.</p>
              <p className="text-white">
              <a className="text-white" href="https://github.com/xleonard1/Find-My-Crypto.git">view Github Repo</a>
              </p>
            </div>
         </div>
        </div>
      </div>
     <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div className="project-card card text-white card-has-bg click-col" style={styles.backgroundImg2} >
           <img className="card-img d-none" src={techTalk} alt="techTalk"/>
           <div className="card-img-overlay d-flex flex-column">
           <div className="project-card-body card-body">
             <h4 className="card-title mt-0 "><a className="text-white" href="https://guarded-shelf-26727.herokuapp.com/">Tech Talk</a></h4>
             <p className="text-white">Blog Social Website that allows users to create profiles, upload user photos, create blogs, edit blogs, comment on other's blogs, delete blogs, and delete comments.</p>
             <p className="text-white">
              <a className="text-white" href="https://github.com/xleonard1/Tech-Blog-1.git">view Github Repo</a>
              </p>
           </div>
         </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
       <div className="project-card card card-has-bg click-col" style={styles.backgroundImg3} >
         <img className="card-img d-none" src={game} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"/>
         <div className="card-img-overlay d-flex flex-column">
            <div className="project-card-body card-body">
              <h4 className="card-title mt-0 "><a className="text-white" href="https://nameless-journey-91177.herokuapp.com/">Ninja GO: Game</a></h4>
              <p className="text-white">Ninja Game that requires a user to create a profile, log-in, upload user photo, and play game on user profile.</p>
              <p className="text-white">
              <a className="text-white" href="https://github.com/xleonard1/Game-Project-2.git">view Github Repo</a>
              </p>
            </div>
         </div>
        </div>
      </div>
   </div>
  </div>
</section>
</div>
  )
}