import { motion } from "framer-motion";
import "./SkillCard.css";

const SkillCard = ({ title, data }) => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.div
      className="card skill__card"
      initial="offscreen"
      whileInView="onscreen"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
    >
      <h3 className="title">
        <span className="g-text">{title}</span>
      </h3>
      <div className="skill__content">
        {data.map((list, index) => (
          <motion.article
            className="flex skill__details"
            key={index}
            custom={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={itemVariants}
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
  );
};

export default SkillCard;