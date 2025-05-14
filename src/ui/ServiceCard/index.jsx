import { motion } from "framer-motion";
import "./ServiceCard.css"; 

const ServiceCard = ({ title, name, at, description, icon, color, colorRGB }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
     
      <div 
        className="blur__overlay flex service__card"
        style={{
          "--color-primary": color,
          "--color-primary-rgb": colorRGB
        }}
      >
        <div className="service__card-top">
          <div className="ball ball1"></div>
          <div className="ball ball2"></div>
          <div className="ball ball3"></div>
          <div className="ball ball4"></div>
          <div className="ball ball5 flex__center">{icon}</div>
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
      </div>
    </motion.div>
  );
};

export default ServiceCard;