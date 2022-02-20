import React from 'react'

export default function Footer() {
  return (
    <section id="Footer">
        <div className="container  d-flex justify-content-center">
            <div className="social-media-container p-5">
                <ul className='d-flex justify-content-around'>
                    <li className="social-icon"><a href="https://www.linkedin.com/in/riddhesh-desai/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
                    <li className="social-icon"><a href="https://twitter.com/RiddheshDesai4" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a></li>
                    <li className="social-icon"><a href="https://www.instagram.com/riddhesh_code/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a></li>
                    <li className="social-icon"><a href="https://github.com/Riddheshdesai/" target="_blank" rel="noreferrer"><i class="devicon-github-original"></i></a></li>                 
                    <li className="social-icon"><a href="mailto:riddheshdesai56@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>                 
                </ul>
                <div className="company-name text-center mt-5">
                    <h4>Hand crafted by me</h4>
                </div>
            </div>
        </div>
    </section>
  )
}
