
import React, {useState} from "react";

import { checkPassword, validateEmail } from '../utils/helpers';


export default function Form () {
    const [name, setName] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [subject, setSubject] = useState(' ');
    const [message, setMessage ] = useState(' ');
    const [errorMessage, setErrorMessage ] = useState('')

    const handleInputChange = (event) => {
        const {target} = event;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue) 
        } else if (inputType === 'subject') {
            setSubject(inputValue)
        } else {
            setMessage(inputValue)
        }
    }
  

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if(!validateEmail(email) || !name || !subject || !message) {
            setErrorMessage('Please enter valid inputs')
            return;
        }

       setName('');
       setEmail('');
       setSubject('');
       setMessage('')
    };



return( 
 <div>
<section className="mb-4 wrapper" id="contact">

    <h2 className="display-4 text-center">Contact Me</h2>

    <p className="text-center lead">Do you have any questions? Please do not hesitate to contact me directly.</p>

    <div className="row">

        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div className="row">

                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input value={name} type="text" id="name" name="name" onChange={handleInputChange} className="form-control"/>
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input value={email}type="text" id="email" name="email" onChange={handleInputChange} className="form-control"/>
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
            

                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input value={subject} type="text" id="subject" name="subject" onChange={handleInputChange} className="form-control"/>
                            <label for="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>
         

        
                <div className="row">

                  
                    <div className="col-md-12">

                        <div class="md-form">
                            <textarea value={message} type="text" id="message" name="message" rows="2" onChange={handleInputChange} className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
          

            </form>
            {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
            <div className="text-center text-md-left">
                <a className="btn btn-primary" onClick={handleFormSubmit}>Send</a>
            </div>
            <div className="status"></div>
        </div>

        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Atlanta, Georgia</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" fill="currentColor" class="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </span>
                    (678) 526-3682
                    </p>
                </li>

                <li>    
                <p>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="50" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                </span>
                xavier.lnrd@gmail.com
                </p>
                </li>
                
            </ul>
        </div>
 

    </div>

</section>
</div>   

)
}