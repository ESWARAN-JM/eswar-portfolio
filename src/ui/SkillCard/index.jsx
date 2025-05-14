import { motion } from "framer-motion";
import "./SkillCard.css"

const SkillCard = ({title, data}) => {
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

  return (
    <motion.div 
      className="card skill__card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="title">
          <span className="g-text">{title}</span>
      </h3>
      <div className="skill__content">
          {data.map((list,index) => (
              <motion.article 
                className="flex skill__details" 
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                  <div className="skill__logo">
                      <img src={list.logo} alt="" />
                  </div>  
                  <div>
                      <h4 className="skill__name">{list.skill}</h4>
                      <small className="text__muted skill__level">{list.level}</small>
                  </div>
              </motion.article>
          ))}
      </div>
    </motion.div>
  )
}

export default SkillCard