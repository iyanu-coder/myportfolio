import React, {Component} from 'react';
import { BrowserRouter, Route,  Switch, Link } from 'react-router-dom';

import  './style.css'
import Home from './portfolio/home';
import Portfolio from './portfolio/portfolio';
// import Skill from './portfolio/skill';
import About from './portfolio/about';
import Contact from './portfolio/contact';
import Error from './portfolio/error'





class App extends Component {
  render(){
    return(
      
      <>
      
<BrowserRouter>
<nav className="navbar fixed-top w-100 navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span id="toggle" class="navbar-toggler-icon">&equiv;</span>
    </button>
    <p className="name">AIO</p>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active ">
              <Link to="/">
                    <a className="nav-link text-light">Home<span className="sr-only">(current)</span></a>
              </Link>
        </li>

        <li className="nav-item">
                <Link to="/about">
                    <a className="nav-link text-light" >About</a>
                </Link>
        </li>
        <li className="nav-item">
                <Link to="/portfolio">
                    <a className="nav-link text-light" >Portfolio</a>
                </Link>
        </li>

        <li className="nav-item">
                <Link to="/contact">
                    <a className="nav-link text-light" >Contact</a>
                </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* <nav className="navbar fixed-top navbar-expand-lg ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">&equiv;</span>
            </button>
            <p className="name">AIO</p>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/">
                    <a className="nav-link text-light">Home<span className="sr-only">(current)</span></a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="/about">
                    <a className="nav-link text-light" >About</a>
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/portfolio">
                    <a className="nav-link text-light" >Portfolio</a>
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/contact">
                    <a className="nav-link text-light" >Contact</a>
                </Link>
                </li>
               

                </ul>
            
            </div>
    </nav> */}
  
    <Switch>
      
        <Route exact path="/" component={Home} /> 
        <Route exact path="/portfolio" component={Portfolio} /> 
        {/* <Route exact path="/skill" component={Skill} />  */}
        <Route exact path="/about" component={About} /> 
        <Route exact path="/contact" component={Contact} /> 
        <Route exact component={Error} />
          
    </Switch>

</BrowserRouter>
      </>
    );
    }
    
  }
  
  
  
   
  export default App;
  
  