import React from 'react'

export default function Project() {
  return (
    <section id="Project">
        <div className="container">
            <div className="project-wrapper">
                <div className="row">
                    <div className="col-sm-12 col-lg-4">
                        <div className="tittle-container d-flex justify-content-lg-end">
                        <h3 className="Project-tittle pe-lg-5">
                            Projects :
                        </h3>
                        </div>
                    </div>
                    <div className="col-sm-11 col-lg-8">
                        <ul>

                        <li className="project-container">
                            <p className="project-name">
                                News App
                            {/* <a href="https://google.com" class="project-btn" target="_blank" rel="noreferrer">live</a>  */}
                            <a href="https://google.com" class="project-btn" target="_blank" rel="noreferrer">Github</a>
                            </p>
                            <p className="project-des">
                            A fully responsive news web app that fetch news from Api and showcase latest trending news category-wise.<br/>
                            <span >Technologies used: React Js, bootstrap, and news API.</span>
                            </p>
                        </li>
                        <li className="project-container">
                            <p className="project-name">
                                Weather App
                            <a href="https://weather-app-self-two.vercel.app/" class="project-btn" target="_blank" rel="noreferrer">live</a> 
                            <a href="https://github.com/Riddheshdesai/weatherApp" class="project-btn" target="_blank" rel="noreferrer">Github</a>
                            </p>
                            <p className="project-des">
                            A weather web app that helps you for checking the weather for your current location or other places. <br />
                            <span>Technologies used: Html/Css, Bootstrap, JavaScript, weather API.</span>
                            </p>
                        </li>
                        <li className="project-container">
                            <p className="project-name">
                                Food Landing Page
                                <a href="https://food-landing-page2.vercel.app/" class="project-btn" target="_blank" rel="noreferrer">live</a> 
                                <a href="https://github.com/Riddheshdesai/food-landing-page" class="project-btn" target="_blank" rel="noreferrer">Github</a> 
                            </p>
                            <p className="project-des">
                            Responsive and mobile-friendly food landing page including header, home, footer,button etc<br/>
                            <span>Technologies used: Html/Css, React Js, Bootstrap, JavaScript.</span>

                            </p>
                        </li>
                        <li className="project-container">
                            <p className="project-name">
                                Portfolio Website
                                <a href="https://my-portfolio-hazel-psi.vercel.app/" class="project-btn" target="_blank" rel="noreferrer">live</a> 
                                <a href="https://github.com/Riddheshdesai/My-Portfolio" class="project-btn" target="_blank" rel="noreferrer">Github</a> 
                            </p>
                            <p className="project-des">
                            A personal porfolio website that bring everything about me ,mainly focus on the project section and design for that website<br/>
                            <span>Technologies used: Html/Css, React Js, bootstrap,.</span>
                            </p>
                        </li>
                        </ul>
                        <h3 className="github-heading mt-5"><a href="https://github.com/Riddheshdesai/" target="_blank" rel="noreferrer"><i class="devicon-github-original"></i> See more project on Github <i class="devicon-github-original"></i></a></h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
