import { motion } from "framer-motion";
import { credentials } from "../../data";
import "./Credentials.css";
import ServiceCard from "../../ui/ServiceCard";

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

const Credentials = () => {
  return (
    <section id='credentials'>
      <div className="section__wrapper">
        <motion.div 
          className="section__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='shine'>Credentials</h2>
        </motion.div>
        <motion.div 
          className="services__group"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {credentials.map((cred, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard 
                title={cred.title}
                name={cred.name}
                description={cred.description}
                icon={cred.icon}
                at={cred.at}
                color={cred.color}
                colorRGB={cred.colorRGB}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Credentials;