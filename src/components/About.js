import React from 'react'

export default function About() {
  return (
    <section id="about">
        <div className="container">
            <div className="about-wrapper">
                <div className="row">
                        <div className="col-4">
                            <h3 className="About-tittle ">
                                About Me :
                            </h3>
                        </div>
                        <div className="col-8">
                            <p className="about-description ms-auto">
                                <span>Hello! my name is Riddhesh</span> and I enjoy creating things on the web. I was the guy who always wanted to deep dive into coding. My interest build-in web development back in 2021 when I decided to make things that live on internet and it turned out to become Front end developer. 
                            </p>
                            <p className="about-description ms-auto">
                            <span>As a Front-end Developer</span>, I enjoy making interactive and user-friendly websites/web apps. My goal is to always build things that are scalable and interactive for Users.
                            </p>
                            <p className="about-description ms-auto">
                                <span>What I do in my free time,</span> I'm probably reading books, travelling or playing video games.
                            </p>
                            <p className="about-description ms-auto">
                                <span className=''>Get in touch <i className="fa fa-envelope"></i></span><a href="mailto:riddheshdesai56@gmail.com">riddheshdesai56@gmail.com</a>
                            </p>
                        </div>
                </div>
                <div className="row skill-section">
                        <div className="col-4 ">
                            <h3 className="Skill-tittle">
                                Skills :
                            </h3>
                        </div>
                        <div className="col-7 ">
                            <div className="icon-container d-flex justify-content-around">
                                <li className="coding-icon">
                                    <i className="devicon-html5-plain"></i>
                                </li>
                                <li className="coding-icon">
                                    <i className="devicon-css3-plain"></i>
                                </li>
                                <li className="coding-icon">
                                    <i className="devicon-javascript-plain"></i>
                                </li>
                            </div>
                            <div className="icon-container d-flex justify-content-around">
                                <li className="coding-icon">
                                    <i className="devicon-react-original"></i>
                                </li>
                                <li className="coding-icon">
                                    <i className="devicon-bootstrap-plain"></i>
                                </li>
                                <li className="coding-icon">
                                <i className="devicon-figma-plain"></i>
                                </li>
                            </div>
                            <div className="icon-container d-flex justify-content-around">
                                <li className="coding-icon">
                                    <i class="devicon-npm-original-wordmark"></i>
                                </li>
                                <li className="coding-icon">
                                    <i className="devicon-git-plain"></i>
                                </li>
                                <li className="coding-icon">
                                    <i className="devicon-github-original"></i>
                                </li>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
