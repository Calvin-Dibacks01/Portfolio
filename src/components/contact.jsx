import Footer from "./footer"
import React,{useState} from "react"
import emailjs from 'emailjs-com'
import useScript from './useScript';

const Contact =()=>{
    useScript('js/vendor/jquery-2.2.4.min.js')
  useScript('js/jquery.easing.min.js')
  useScript('js/jquery.nicescroll.min.js')
  useScript('js/owl.carousel.min.js')
  useScript('js/main.js')
    const [showError,setShowError]=useState(false)
    const [success,setSuccess]=useState(false)
    const [emailError,setEmailError]=useState(false)
    const [error,setError]=useState(false)
    const [values,setValues]=useState({
        name:{value:"",errorMessage:""},
        subject:{value:"",errorMessage:""},
        email:{value:"",errorMessage:""},
        message:{value:"",errorMessage:""}
    })
    const handleChange = (prop) => (e) => {
        e.preventDefault();
        let errM=""
        if(e.target.value===""){
          errM="Is Required"
          }
          setValues({...values, [prop]:{value:e.target.value,errorMessage:errM}});
      };

      const onSubmit=(e)=>{
          e.preventDefault();
            if(values.email.value===""||values.name.value===""||values.subject.value===""||values.message.value===""){
                setShowError(true)
                setSuccess(false)
                setError(false)
                setEmailError(false)
            }else{
                if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email.value)){
                try {
                    emailjs.init(process.env.REACT_APP_USER_ID)
                    let info ={
                        name:values.name.value,
                        subject:values.subject.value,
                        email:values.email.value,
                        message:values.message.value
                    }
                    emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,info)
                        .then(()=>{
                            setSuccess(true)
                            setError(false)
                            setEmailError(false)
                            setShowError(false)
                        })
                        .catch((error)=>{
                            setShowError(false)
                            setError(true)
                            setSuccess(false)
                            setEmailError(false)
                            console.log(error)
                        })
                    
                } catch (error) {
                    setShowError(false)
                    setError(true)
                    setSuccess(false)
                    setEmailError(false)
                    console.log(error)
                }
            }else{
                setEmailError(true)
                setShowError(false)
                setError(false)
                setSuccess(false)
            }
            }
      }

    return(

                
<>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                            <div class="page-title text-center">
                                <h2>Get in  <span class="primary">touch</span> <span class="title-bg">Contact</span></h2>
                            </div>
                        </div>                            
                    </div> 

                    <div class="row">
                        <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
                            <div class="contact-block">
                                <div class="media">
                                    <div class="media-left">
                                        <i class="bi bi-envelope"></i>
                                    </div>
                                    <div class="media-body">
                                        <h4>Email</h4>
                                        <p><a href="mailto:tervincalvin@gmail.com">tervincalvin@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-block">
                                <div class="media">
                                    <div class="media-left">
                                        <i class="bi bi-phone"></i>
                                    </div>
                                    <div class="media-body">
                                        <h4>Phone</h4>
                                        <p><a href="tel:+27608788114">060 878 8114</a></p>
                                    </div>
                                </div>
                            </div>

                            <ul class="contact-social">
                                <li style={{margin:"2px"}}>
                                    <span class="contact-social-hex"></span>
                                    <a href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a>
                                </li>
                                <li style={{margin:"2px"}}>
                                    <span class="contact-social-hex"></span>
                                    <a href="https://www.linkedin.com/in/McCalvin-Dibakoane-bb496a185"><i class="bi bi-linkedin"></i></a>
                                </li>
                                <li style={{margin:"2px"}}>
                                    <span class="contact-social-hex"></span>
                                    <a href="https://github.com/Calvin-Dibacks01"><i class="bi bi-github"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-7 col-md-7 col-md-offset-1 col-lg-offset-2">
                            <div class="section-title clear">
                                <h3>Send me a meesage</h3>
                                <span class="bar-dark"></span>
                                <span class="bar-primary"></span>
                            </div>

                            <form class="row contact-form no-gutter" >
                                <div class="col-xs-12 col-sm-6">
                                    <div class="input-field name">
                                        <span class="input-icon" id="name" ><i class="bi bi-person"></i></span>
                                        <input type="text" 
                                        class="form-control"  
                                        placeholder="Enter your name"
                                        value={values.name.value}
                                        onChange={handleChange('name')}
                                        />
                                    </div>
                                </div> 
                                <div class="col-xs-12 col-sm-6">
                                    <div class="input-field email">
                                        <span class= "input-icon" id="email"><i class="bi bi-at"></i></span>
                                        <input 
                                        type="email" 
                                        class="form-control" 
                                        name="email" 
                                        placeholder="Your email address"
                                        value={values.email.value}
                                        onChange={handleChange('email')}/>
                                    </div>
                                </div> 
                                <div class="col-xs-12 col-sm-12">
                                    <div class="input-field">
                                        <span class= "input-icon" id="subject"><i class="bi bi-tags"></i></span>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            name="subject" 
                                            placeholder="Enter the discussion title"
                                            value={values.subject.value}
                                            onChange={handleChange('subject')}/>
                                    </div>
                                </div> 
                                <div class="col-xs-12 col-sm-12">
                                    <div class="input-field message">
                                        <span class= "input-icon" ><i class="bi bi-pencil"></i></span>
                                        <textarea 
                                         name="message"
                                         class="form-control" 
                                         placeholder="Write your message"
                                         value={values.message.value}
                                         onChange={handleChange('message')}
                                         ></textarea>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-12">
                                    <div class="input-field">
                                        <span class="btn-border">
                                            <button type="submit" class="btn btn-primary btn-custom-border text-uppercase" onClick={onSubmit}>Send Message now</button>
                                        </span>
                                    </div>
                                    {(success)&& 
                                        <div class="msg-success">Your Message was sent successfully</div>}
                        
                                      { (error||showError||emailError)&& <>
                                            {emailError?<div class="msg-failed">Please enter the correct email address</div>:<>
                                            {showError? 
                                                <div class="msg-failed">Please fill in the empty fields</div>
                                                :<div class="msg-failed">Something went wrong, please try again later</div>}</>}
                                    </>}
                                </div>
                            </form> 
                        </div>
                    </div> 
                </div><br/>
                <Footer prev="/Projects" next={null}/>
                </>
)
}
export default Contact