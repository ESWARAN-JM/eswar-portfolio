import { motion } from "framer-motion";
import "./Footer.css";
import { menu } from "../../data";
import { Link } from "react-scroll";
import SocialHandles from "../../ui/SocialHandles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const Footer = () => {
  return (
    <footer>
      <motion.div 
        className="section__wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.ul className="flex__center nav" variants={itemVariants}>
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              smooth={true}
              duration={500}
              className="nav__item"
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </motion.ul>
        <motion.div className="social" variants={itemVariants}>
          <SocialHandles />
        </motion.div>
        <motion.div className="copyright" variants={itemVariants}>
          <h3>Copyright &copy; All right reserved - | 2025</h3>
          <p className="text__muted">Built with love by Eswar</p>
        </motion.div>
        <motion.div 
          className="base__logo"
          variants={itemVariants}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="full__name shine">ESWARAN JM</h1>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;