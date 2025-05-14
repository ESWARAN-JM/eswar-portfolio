import { motion } from "framer-motion";
import "./SocialHandles.css";
import { socialHandles } from "../../data";

const SocialHandles = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="social__handles__container"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {
        socialHandles.map((media,index) => (
          <motion.a 
            href={media.link} 
            target="_blank" 
            className="icon__container social__handle"
            key={index}
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="flex__center tooltip">
                {media.icon} {media.name}
            </span>
            {media.icon}
          </motion.a>
        ))
      }
    </motion.div>
  )
}

export default SocialHandles