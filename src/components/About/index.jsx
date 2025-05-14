import { motion } from "framer-motion";
import Hole from "../../ui/Hole";
import "./About.css";
import { skills } from "../../data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const skillVariants = {
  hidden: { rotate: -45, scale: 0 },
  visible: (i) => ({
    rotate: -45,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  }),
  hover: {
    rotate: 0,
    scale: 2,
    transition: { duration: 0.3 }
  }
};

const About = () => {
  return (
    <section id='about'>
      <motion.div 
        className="card section__wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Hole />
        <div className="column left-column">
          <motion.h2 className="shine abc" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.div className="skills__container" variants={itemVariants}>
            {skills.map((skills, index) => (
              <div className="flex skill__group" key={index}>
                {skills.data.map((list, key) => (
                  <motion.div 
                    className="blur__overlay flex__center skill" 
                    key={key}
                    variants={skillVariants}
                    custom={key}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div className="column right-column" variants={itemVariants}>
          <motion.h1 className="title" initial={{ x: 50 }} animate={{ x: 0 }}>
            I am <span className="color__primary">ESWARAN JM,</span>
          </motion.h1>
          <motion.p 
            className="text__muted description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A Computer Science Engineer with a strong foundation in full stack development, proficient in HTML, CSS, JavaScript, React.js, Java, Node.js, and MySQL. Experienced in building real-world projects like e-commerce platforms and mobile apps using Flutter, Firebase, and Google Cloud. A proactive problem-solver and collaborative team player with internship experience at Stigmata Techno Solutions. Passionate about building scalable applications and exploring modern tools and frameworks.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;