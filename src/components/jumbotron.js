import React, {useCallback, useEffect, useState} from 'react';
import city from '../assets/city.jpg'


const wordsList = ["Software Engineer", "Creator", "Teacher", "Learner", "Problem Solver"]


export default function Jumbotron (props) {
  const [greeting, setGreeting] = useState("Software Engineer")
  const shuffle = useCallback(()=>{
    const index = Math.floor(Math.random() * wordsList.length);
    setGreeting(wordsList[index])
  }, []);
  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID)
  }, [shuffle])
 
    return (
  
      
  <div>
  <header>
  <div id="intro-example" className ="p-5 text-center bg-image">
    <div className="mask">
      <div className ="d-flex justify-content-center align-items-center h-100">
        <div className ="text-white">
          <h1 className = "jumbo-title display-4">Hi, I'm Xavier Leonard</h1>
          <h2 className ="display-6">
            {greeting}
          </h2>
        </div>
      </div>
    </div>
  </div>
</header>
</div>



  
         
    )
}