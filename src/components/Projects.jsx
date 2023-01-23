import Footer from "./footer"
import useScript from './useScript';

const Project =()=>{
    useScript('js/vendor/jquery-2.2.4.min.js')
  useScript('js/jquery.easing.min.js')
  useScript('js/jquery.nicescroll.min.js')
  useScript('js/owl.carousel.min.js')
  useScript('js/main.js')
    return(<>
      <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                <div class="page-title text-center">
                                    <h2>My <span class="primary">projects</span> <span class="title-bg">projects</span></h2>
                                    <p>Visit my gitHub repository</p>
                                    <a href="https://github.com/Pokelo97" class="link">Pokelo97</a>
                                </div>
                            </div>                            
                        </div> 

                        <div class="row isotope-gutter">
                            
                        <div class="col-xs-12 col-sm-6 col-md-4 Illustrator">
                                <figure class="works-item">
                                    <img src="img/works/2.jpg" alt=""/>
                                    <div class="overlay"></div>
                                    <figcaption class="works-inner" >
                                        <h4><a href="https://github.com/Pokelo97/Web-Chat" class="link"> Web Chat</a></h4>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 Illustrator">
                                <figure class="works-item">
                                    <img src="img/works/2.jpg" alt=""/>
                                    <div class="overlay"></div>
                                    <figcaption class="works-inner">
                                        <h4><a href="https://github.com/Pokelo97/reactjs-nodejs-redux-E-commerce" class="link">E-Commerce</a></h4>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 Indesign Photoshop">
                                <figure class="works-item">
                                    <img src="img/works/3.jpg" alt=""/>
                                    <div class="overlay"></div>
                                    <figcaption class="works-inner">
                                        <h4><a href="https://github.com/Pokelo97/nodeJS-API-Authentication-Project" class="link">Authentication Project</a></h4>
                                    </figcaption>
                                </figure>
                            </div>
                        </div> 
                    </div> 
                    <br/>
                    <Footer prev="/Certifications" next="/Contact"/>
                </>
        
    )
}
export default Project