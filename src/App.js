import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Components/Navbar/Navbar";
import Services from './Components/Services/Services';
import Aboutme from './Components/Aboutme/Aboutme';
import Technologies from "./Components/Technologies/Technologies";
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const navBarList = [
  { text: 'Services', url: "services" },
  { text: 'About Me', url: "aboutme" },
  { text: 'Technologies', url: "technologies" }, 
  { text: 'Projects', url: "projects" },
  { text: 'Contact', url: "contact" }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar items={navBarList} />

        <Services title="Services" dark={true} id="services" />
        <Aboutme title="About Me" dark={false} id="aboutme" />
        <Technologies title="Technologies" dark={true} id="technologies"/>
        <Project title="Projects" dark={false} id="projects" />
        <Contact title="Contact Me" dark={false} id="contact" />
        <Footer />
        <FontAwesomeIcon icon={faArrowCircleUp} className="scrollTop" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} />
        
      </div>
    );
  }
}

export default App;
