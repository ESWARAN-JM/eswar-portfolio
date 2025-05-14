import { motion } from "framer-motion";
import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets/";
import CodeBlock from "../../ui/CodeBlock";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";

const code = `
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
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Header = () => {
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <motion.div 
          className="grid upper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="column" variants={itemVariants}>
            <HeaderTitle />
          </motion.div>
          <motion.div className="shine abc" variants={itemVariants}>
            Full Stack Developer
          </motion.div>
          <motion.div className="column1" variants={itemVariants}>
            <motion.img 
              src={profile1} 
              className="profile__photo" 
              alt=""
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="card grid lower"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <CodeBlock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">
              Motivated and detail-oriented recent graduate with a strong foundation in full stack development for both
              web and mobile applications. Seeking an entry-level position where I can contribute to building responsive
              frontends, scalable backends, and maintainable codebases that enhance user experience and support
              business objectives.
            </p>

            <SocialHandles />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;