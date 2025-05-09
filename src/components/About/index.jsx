import Hole from "../../ui/Hole";
import "./About.css";
import {skills } from "../../data";
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
          
        </div>
        <div className="column right-column">
          
          <h1 className="title">
            I am <span className="color__primary">ESWARAN JM,</span>
          </h1>
          <p className="text__muted description">
          A Computer Science Engineer with a strong foundation in full stack development, proficient in HTML, CSS, JavaScript, React.js, Java, Node.js, and MySQL. Experienced in building real-world projects like e-commerce platforms and mobile apps using Flutter, Firebase, and Google Cloud. A proactive problem-solver and collaborative team player with internship experience at Stigmata Techno Solutions. Passionate about building scalable applications and exploring modern tools and frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;