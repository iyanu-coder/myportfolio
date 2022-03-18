import React from 'react';
import '../style.css'
import './style/home.css'
// import './style/skill.css'



const Home =()=>{

    return(
        <>
    <div className="headerimage">
       <div className="container">
        
            <div className="row">
                    {/* <p className="hello">Hello</p> */}

                <div className="col-sm-3">
                        <div>
                            <img className="prof" src="images/profilepics.jfif" />
                        </div>
                </div>


                
                <div className="col-sm-6 ">

                        
                    <h3>AKINYEMI IYANU OLUWASEYI</h3>
                    <h5>Web Developer</h5> <br/>
                
                  
                    <h6> <img  src="images/Messageicon.png" /> akinyemiiyanu45@gmail.com</h6>
                    <h6> <img  src="images/phoneicon.png"/> +234 903 729 8121</h6>
                    <h6> <img  src="images/Locationicon.png"/> Oyo State, Nigeria</h6><br/>


                <div className="media">
                    <a href=""><img src="images/Facebookicon.png" /></a>
                    <a href=""><img  src="images/Twittericon.png" /></a>
                    <a href="https://github.com/iyanu-coder"><img  src="images/GitHubicon.png" /></a>
                    <a href="https://www.linkedin.com/in/iyanu-akinyemi-15b670214/"><img  src="images/LinkedInicon.png" /></a>
                </div>

                    </div>


                </div>
            </div>
       </div> <br/>


     


        </>
    )

}

export default Home;