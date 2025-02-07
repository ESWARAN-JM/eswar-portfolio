import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import {profile1 } from "../../assets/";
import CodeBlock from "../../ui/CodeBlock";
import SocialHandles from "../../ui/SocialHandles"; 
import BreathCircle from "../../ui/BreathCircle";
const code =`
const developer={
  firstName:"ESWARAN",
  lastname:"JM",
  hobby:repeat=()=>{
    //eat();
    //code();
    //sleep()
    //repeat();
    }
}
`
const Header = () => {
  return (
    <header id='header'>
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
        
          <div className="column">
            
            <HeaderTitle />
          </div>
          <div className="shine abc">Full Stack Developer</div>
          <div className="column1">
            <img src={profile1} className="profile__photo" alt=""/>
          </div>
        </div>
        <div className=" card grid lower">
          <CodeBlock 
            language={"javascript"} 
            code={code}/>
            <div>
              <p className="text__muted description">
              Motivated Computer Science Engineer skilled in coding,
          algorithms, frameworks, and OOPs concepts. Experienced in
          developing interactive projects, including IoT-based solutions
          and a personal portfolio website. Proactive problem-solver with
          hands-on experience in full-stack web development and a
          passion for learning new technologies.
              </p>
              
              <SocialHandles/>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
