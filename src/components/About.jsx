import Footer from "./footer"
import useScript from './useScript';
const About =()=>{
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
                                    <h2>About <span class="primary">me</span> <span class="title-bg">Lucky</span></h2>
                                    <p>I am software development!</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-md-6">
                                <div class="about-author">
                                    <figure class="author-thumb">
                                        <img src="img/IMG_20190117_154737.jpg" alt=""/>
                                    </figure> 
                                    <div class="author-desc">
                                        <p><b>Date of birth:</b> 02 April, 1997</p>
                                        <p><b>Language:</b> English, Sepedi</p>
                                        <p><b>In:</b>Web development</p>
                                    </div>
                                    
                                </div> 
                                <p>Energetic software developer, seeking to use proven skills in React.js, Node.js and C++ to provide expert development. Created 6 working web apps. Contributed to 5 GitHub projects</p>
                            </div> 

                            <div class="col-xs-12 col-md-6">
                                <div class="section-title clear">
                                    <h3>Skills</h3>
                                </div>
                                <div class="row skill-wrapper">
                                    <div className="col-xs-6 col-sm-4">
                                    <div class="history-item ">
                                        <img class="history-hex" src="img/react.svg" alt=""></img>
                                        <div class="history-text ">
                                            <h5>React.js</h5>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-4">
                                        <div class="history-item ">
                                            <img class="history-hex" src="img/node.svg" alt=""></img>
                                            
                                            <div class="history-text">
                                                <h5>Node.js</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-4">
                                        <div class="history-item ">
                                            <img class="history-hex" src="img/redux.svg" alt=""></img>
                                            <div class="history-text">
                                                <h5>Rudex</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-4">
                                        <div class="history-item ">
                                            <img class="history-hex" src="img/cPlas.svg" alt=""></img>
                                            <div class="history-text">
                                                <h5>C++</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-4">
                                        <div class="history-item ">
                                            <img class="history-hex" src="img/cSharp.svg" alt=""></img>
                                            <div class="history-text">
                                                <h5>C#</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-4">
                                        <div class="history-item ">
                                            <img class="history-hex" src="img/html5.svg" alt=""></img>
                                            <div class="history-text">
                                                <h5>HTML5</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-4">
                                        <div class="history-item ">
                                            <img class="history-hex" src="img/github.svg" alt=""></img>
                                              <div class="history-text">
                                                <h5>GitHub</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-4">
                                        <div class="history-item ">
                                            <img class="history-hex" src="img/sql.svg" alt=""></img>
                                            <div class="history-text">
                                                <h5>Sql</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-4">
                                        <div class="history-item ">
                                            <img class="history-hex" src="img/firebase.svg" alt=""></img>
                                            <div class="history-text">
                                                <h5>Firebase</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                    </div> <br/>
                    <Footer prev="/Welcome" next="/Resume"/>
        </>
    )
}
export default About