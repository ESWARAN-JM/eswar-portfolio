import { motion } from "framer-motion";
import "./Skills.css"
import { skills } from "../../data"
import SkillCard from "../../ui/SkillCard"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Skills = () => {
  return (
    <section id='skills'>
      <div className="section__wrapper">
        <motion.div 
          className="section__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="shine">My Skills</h2>
        </motion.div>
        <motion.div 
          className="skill__container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((list, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCard {...list} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 

export default Skills