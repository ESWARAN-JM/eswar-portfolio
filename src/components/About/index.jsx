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
          A Computer Science Engineer with a strong foundation in software development, proficient in HTML, CSS, JavaScript, MySQL, and Python. Experienced in building interactive projects such as Smart Human-Computer Interaction and IoT-based hand gesture control systems. A proactive problem-solver and collaborative team player with hands-on experience in full-stack web development through an internship at Stigmata Techno Solutions. Passionate about learning emerging technologies and delivering innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;