import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Graduate from "../components/Graduate";
import Skills from "../components/Skills";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";


function MainLayout() {
  return (
    <div>
      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn>
        <Projects />
      </FadeIn>
      
      <FadeIn>
        <Experience />
      </FadeIn>
      
      <FadeIn>
        <Graduate />
      </FadeIn>
      
      <FadeIn>
        <Skills />
      </FadeIn>
      
      <FadeIn>
        <Profile />
      </FadeIn>
      
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
}

export default MainLayout;
