import Hole from "../../ui/Hole";
import "./About.css";
import {skills } from "../../data";
import CardUi from "../../assets/CardUi";
const About = () => {
  return (
    <section id='about'>
      <div className="card section__wrapper">
               <Hole /> 
        <div className="column left-column">
        <h2 className="shine abc" >About Me</h2>
          <div className="skills__container">
            {skills.map((skills,index)=>(
              <div className="flex skill__group" key={index}>
                {skills.data.map((list,key)=>(
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"}/>
        </div>
        <div className="column right-column">
          
          <h1 className="title">
            I am <span className="color__primary">ESWARAN JM,</span>
          </h1>
          <p className="text__muted description">
          A Computer Science Engineer skilled in coding,
          algorithms, frameworks, and OOPs concepts. Experienced in
          developing interactive projects, including IoT-based solutions
          and a personal portfolio website. Proactive problem-solver with
          hands-on experience in full-stack web development and a
          passion for learning new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;