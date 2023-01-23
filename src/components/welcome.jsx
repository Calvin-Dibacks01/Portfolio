import Footer from "./footer"
import useScript from './useScript';

const Welcome =()=>{
    useScript('js/vendor/jquery-2.2.4.min.js')
  useScript('js/jquery.easing.min.js')
  useScript('js/jquery.nicescroll.min.js')
  useScript('js/owl.carousel.min.js')
  useScript('js/main.js')
    return(
        <>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="page-title text-center">
                            <h2>McCalvin <span class="primary">Dibakoane</span> <span class="title-bg">About</span></h2>
                            <p>A software developer, who focuses on web development  &  A React Native developer </p>
                        </div>
                    </div>
                </div> 
            </div> <br/>
            <Footer prev="/" next="/About"/>
        </>
    )
}
export default Welcome;