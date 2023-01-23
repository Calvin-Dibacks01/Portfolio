import Footer from "./footer"
import useScript from './useScript';

const Resume = () => {
    useScript('js/vendor/jquery-2.2.4.min.js')
  useScript('js/jquery.easing.min.js')
  useScript('js/jquery.nicescroll.min.js')
  useScript('js/owl.carousel.min.js')
  useScript('js/main.js')
    return(
        <>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                <div class="page-title text-center">
                                    <h2>My <span class="primary">history</span> <span class="title-bg">Resume</span></h2>
                                </div>
                            </div>
                        </div>  

                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="history-block"  style={{height:"320px"}}>
                                    <div class="section-title light clear">
                                        <h3>Education</h3>
                                    </div> 
                                    <div class="history-scroller">
                                        <div class="history-item">
                                            <img class="history-hex" src="img/mhs.jpg" alt=""></img>
                                            <div class="history-text">
                                                <h5>Lekete Secondary School</h5>
                                                <span>2010 - 2015</span>
                                                <p>National Diploma</p>
                                            </div>
                                        </div> 
                                        <div class="history-item">
                                            <img class="history-hex" src="img/tut.jpg" alt=""></img>
                                            <div class="history-text">
                                                <h5>TUT</h5>
                                                <span>2016 - 2021</span>
                                                <p>National in Information Technology </p>
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                            </div>  
                            <div class="col-xs-12 col-sm-6">
                                <div class="history-block" style={{height:"320px"}}>
                                    <div class="section-title light clear">
                                        <h3>Work Experiences</h3>
                                    </div> 
                                    <div class="history-scroller">
                                        <div class="history-item">
                                            <img class="history-hex" src="img/hcls.png" alt=""></img>
                                            <div class="history-text">
                                                <h5>Investhood IT Pty</h5>
                                                <span>2022 ( 7 Months )</span>
                                            </div>
                                        </div> 
                                    </div>
                                </div>  
                            </div> 
                        </div> 
                    </div><br/><br/>
                    <Footer prev="/About" next="/Certifications"/>
        </> 
    )
}
export default Resume