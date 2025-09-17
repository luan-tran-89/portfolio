import React, { useEffect } from "react";

import { Account } from './components/Account';
import Navbar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SkillsAndExperience from './components/SkillsAndExperience';

import BackToTop from './components/back-top';
import Preloader from './components/preloader';
import Timeline from './components/Timeline';
import Utils from './common/Utils';
import StaticData from './common/StaticData';

import "./styles/common.scss";
import Certification from "./components/Certification";
import Award from "./components/Award";

const App = (props) => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = hash.split("&");
      const tokens = params.filter(s => s.includes("id_token"));
      if (tokens && tokens.length > 0) {
        const idToken = tokens[0].split("=")[1];

        if (idToken) {
          const expires = params.filter(s => s.includes("expires_in"));
          const options = {
            path: "/",
            domain: Utils.getSubDomain(),
            expires: expires ? expires[0] : 3600
          }
          Utils.saveCookie('idToken', idToken, options);
          window.location.href = "/";
        }
      }
    }
  }, []);

  return (
    <Account>
      <Navbar />
      <Intro />
      <About />
      <SkillsAndExperience />
      <Portfolio />
      {/* <Timeline
        id="experience"
        setions={StaticData.getExperience()}
        sectionName="Experience"
      /> */}
      <Timeline 
        id="education"
        setions={StaticData.getEducation()}
        sectionName="Education"
      />
      <Award />
      <Certification />
      <Blog />
      <Contact />
      <BackToTop />
      <Preloader />
    </Account>
  );
}

export default App;
