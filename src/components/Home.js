import React from 'react'
import codeboy from '../Images/codeboy.png'

export default function Home() {
  return (
    <section id='home'>
        <div className="container ">
            <div className="home-wrapper">
                <div className="row justify-content-center">
                    <div className=" col-md-7 col-lg-8 col-12">
                        <div className="heading-container ms-5 my-sm-5 my-lg-0">
                            <h2 className="heading">
                                Hello, I'm <br />
                                a Front end Developer
                            </h2>
                            <p className="subtittle">
                            I'm developer based in Mumbai, India. <br />
                            I love building beautiful interfaces and web applications.
                            </p>
                            <div className="resume-btn mt-5">
                                <a href="https://drive.google.com/file/d/1GuJfayWrQ7BvJOVrRbtYPNzZWNSrP-J9/view" target="_blank" rel="noreferrer" className='main-btn'>
                                    View my resume
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5 col-lg-4 col-10 mt-5 mt-lg-0 p-sm-4 p-lg-0">
                        <img src={codeboy} alt="codeboy" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
