import React from 'react'
import '../styles/App.css'

const styles = {
  htmlStyle: {
    width: '100%',
  },
  javaScript: {
    width: '80%'
  },
  react: {
    width: '70%'
  },
  SQL: {
  width: "85%"
  },
  node: {
    width: "90%"
  },
  express: {
    width: "90%"
  }
}
export default function Skills () {
    return (
        <div id="skills" className = "skills section-bg">
          <div className = "container aos-init aos-animate" data-aos="fade-up">
            <div className="section-skills-title">
              <h1 className = "display-4">Skills</h1>
              <p className="lead">Check out only a few of my best current skill sets</p>
            </div>
          </div>
          <div className = "row skills-content b-md-0 mb-2">
          <div className = "skills-content col-lg-6 ">
          <div className="progress">
            <span className = "skill">
              HTML
            <i className = "val">100</i>
            </span>
            <div className="progress-bar" role="progressbar" style={styles.htmlStyle} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">HTML</div>  
          </div>

          <div className="progress">
             <span className = "skill">
              CSS
               <i className = "val">100%</i>
             </span>
            <div className="progress-bar" role="progressbar" style={styles.htmlStyle} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">CSS</div>  
          </div>

          <div className="progress">
          <span className = "skill">
              JavaScript
            <i className = "val">80%</i>
            </span>
            <div className="progress-bar" role="progressbar" style={styles.javaScript} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">JavaScript</div>  
          </div>

            <div className="progress">
               <span className = "skill">
                 React
                <i className = "val">70%</i>
                </span>
                <div className="progress-bar" role="progressbar" style={styles.react} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">React</div>  
             </div>
          </div>

          <div className = "skills-content col-lg-6 ">
          <div className="progress">
          <span className = "skill">
              MySQL
            <i className = "val">85%</i>
            </span>
            <div className="progress-bar" role="progressbar" style={styles.SQL} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">MySQL</div>  
          </div>
          <div className="progress">
          <span className = "skill">
              NodeJS
            <i className = "val">90%</i>
            </span>
            <div className="progress-bar" role="progressbar" style={styles.node} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">NodeJS</div>  
          </div>
          <div className="progress">
          <span className = "skill">
              Express
            <i className = "val">90%</i>
            </span>
            <div className="progress-bar" role="progressbar" style={styles.react} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">Express</div> 
          </div>
        </div>
      </div>
    </div>
    )
}