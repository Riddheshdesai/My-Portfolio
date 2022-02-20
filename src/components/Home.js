import React from 'react'
import codeboy from '../Images/codeboy.png'

export default function Home() {
  return (
    <section id='home'>
        <div className="container ">
            <div className="home-wrapper">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="heading-container ms-5">
                            <h2 className="heading">
                                Hello, I'm <br />
                                a Front end Developer
                            </h2>
                            <p className="subtittle">
                            I'm developer based in Mumbai, India. <br />
                            I love building beautiful interfaces and web applications.
                            </p>
                            <div className="resume-btn mt-5">
                                <button className='main-btn'>
                                    View my resume
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-12">
                        <img src={codeboy} alt="codeboy" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
