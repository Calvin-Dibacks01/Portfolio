import Footer from "./footer"

const Certifications =()=>{

    return(
        <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                <div class="page-title text-center">
                    <h2>My <span class="primary">Certifications</span> <span class="title-bg">Certs</span></h2>
                </div>
            </div>
        </div>

                <div class="row">
                    <div class="testimonials">
                        <div class="col-xs-12 col-md-6">
                            <div class="item clear">
                                <a href="https://www.credly.com/badges/261fb568-8181-4d2a-bb73-985c5ae98609/linked_in">
                                <figure  class="thumb">
                                            <div class="tm-hex" style={{backgroundImage:`url(https://images.credly.com/size/340x340/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png)`}}>
                                                <div class="hexTop"></div>
                                                <div class="hexBottom"></div>
                                            </div>
                                </figure></a>
                                <div class="text">
                                                <h4>Microsoft</h4>
                                                <span>Developing Solutions for Microsoft Azure</span>
                                                <br/><span>2021-2023</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <div class="item clear">
                                <a href="https://www.credly.com/badges/80baf8b8-4b54-4318-80f2-4ec196568e26/linked_in">
                                <figure class="thumb">
                                    <div class="tm-hex" style={{backgroundImage:`url(https://images.credly.com/size/340x340/images/74790a75-8451-400a-8536-92d792c5184a/CompTIA_Security_2Bce.png)`}}>
                                                <div class="hexTop"></div>
                                                <div class="hexBottom"></div>
                                    </div>
                                </figure></a>
                                <div class="text">
                                    <h4>CompTIA</h4>
                                    <span>CompTIA Security+</span><br/>
                                    <span>2021-2024</span>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div><br/><br/><br/>
            <Footer prev="/Resume" next="/Projects"/>
        </div>)
}
export default Certifications