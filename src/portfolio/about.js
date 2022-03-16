import React from 'react'
import './style/about.css'
import './style/skill.css'



const About =()=>{

    return(
        <>
            <header>

                <div className="container">
                    <div className="row" >
                        <div className="col-6">
                
                             {/* <img className="about"  src="images/ab-img.png" /> */}
                             <img className="about" src="images/ab-img.png" />
                           

                        </div>
                        <div className="col-md-6 ">

                            <div>

                                <h1>About Me</h1><br/>
                               <p> Hello, I’m Iyanu, web-developer based on Nigeria. Iam good <br/>
                                    in web site design & building and customization.</p>

                                    <input type="submit" value="Html" />
                                    <input type="submit" value="Css" />
                                    <input type="submit" value="Wordpress" />
                                    <input type="submit" value="Javascript" />
                                    <input type="submit" value="React Js" /><br/><br/>
                                    <input type="submit" value="Vue" />

                                    <input type="submit" value="Angular" />
                                    <input type="submit" value="Php" />
                                    <input type="submit" value="Node Js" />
                            </div>

                        </div>
                    </div>

                    <section id="resume" class="resume">


        <div class="section-title">
          <h2>Resume</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Akinyemi Iyanu O</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <ul>
            
                <li>Oyo State, Nigeria</li>
                <li>(+234) 903 729 8121</li>
                <li>akinyemiiyanu45@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title-edu">Education</h3>
            <div class="resume-item">
              <h4>O'level Certificate</h4>
              <h5>2012 - 2018</h5>
              <p><em>Government Science College, Ayede Ekiti, Ekiti State. Nigeria</em></p>
              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
            </div>
            <div class="resume-item">
              <h4>Deploma in Web Development</h4>
              <h5>2020 - 2022</h5>
              <p><em>SQI College of ICT, Ogbomoso, Oyo State. Nigeria</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                {/* <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li> */}
              </ul>
            </div>
            <div class="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
            </div>
          </div>
        </div>

    
    </section>


    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div id="one" className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div id="two" className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div id="three" className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Angular Js <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div id="six" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">MongoDB <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div id="nine" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">C++ <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div id="eleven" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="progress">
              <span className="skill">PHP <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div id="four" className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">WordPress/CMS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div id="five" className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>


            <div className="progress">
              <span className="skill">React js <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div id="seven" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Node Js <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div id="eight" className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">MySql <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div id="ten" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">C++ <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div id="twelve" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
           

          </div>

        </div>

      </div>
    </section>

                </div>  

            </header>
        
        </>
    )

}

export default About;