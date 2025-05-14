import { motion } from "framer-motion";
import "./ServiceCard.css";

const ServiceCard = ({title, name, at, description, icon, color, colorRGB}) => {
  const cardVariants = {
    rest: { transform: "rotate3d(0, 0, 0, 0deg)" },
    hover: { transform: "rotate3d(1, 1, 0, 30deg)" }
  };

  const ballVariants = {
    rest: { transform: "translate3d(0,0,100px)" },
    hover: { 
      transform: "translate3d(0,0,120px)",
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="blur__overlay flex service__card"
      style={{"--color-primary": color, "--color-primary-rgb":colorRGB}}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
    >
      <div className="service__card-top">
        <motion.div className="ball ball1" variants={ballVariants} />
        <motion.div 
          className="ball ball2" 
          variants={ballVariants}
          transition={{ delay: 0.1 }}
        />
        <motion.div 
          className="ball ball3" 
          variants={ballVariants}
          transition={{ delay: 0.2 }}
        />
        <motion.div 
          className="ball ball4" 
          variants={ballVariants}
          transition={{ delay: 0.3 }}
        />
        <motion.div 
          className="ball ball5 flex__center"
          variants={ballVariants}
          transition={{ delay: 0.4 }}
        >
          {icon}
        </motion.div>
      </div>
      <div className="service__card-middle">
        <h2 className="title">
            <span className="g-text">{title}</span>
        </h2>
        <h3 className="name">{name}</h3>
        <p className="text__muted description">{description}</p>
      </div>
      <div className="service__card-bottom">
        <p className="at">{at}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;