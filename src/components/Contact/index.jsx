import { motion } from "framer-motion";
import "./Contact.css";
import Pyramid from "../../ui/Pyramid";
import { contactInfo } from "../../data";
import { BsFillSendFill } from "react-icons/bs";
import SocialHandles from "../../ui/SocialHandles";
import React from "react";
import Swal from 'sweetalert2'

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
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e17f6fc1-7359-4054-984a-38e1bcb2d094");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Submitted!",
        text: "Message Sent Successfully!",
        icon: "success"
      })
      event.target.reset();;
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id='contact' className="contact">
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid/>
        </div>
        <motion.div 
          className="contact__group"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="title shine">
              Contact Me
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index) => (
                <motion.article 
                  className="flex option" 
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">{contact.value}</p>
                    </div>
                    <a href={contact.link} target="_blank" className="flex__center btn">
                      <span className="btn__shine text">Message</span>
                      <div className="flex__center icon" style={{ background: contact.color }}>
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="social">
              <SocialHandles />
            </div>
          </motion.div>
          <motion.form 
            onSubmit={onSubmit}
            variants={itemVariants}
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <input type="text" placeholder="Your full name" name="name" required />
            <input type="email" placeholder="Your email" name="email" required />
            <textarea name="message" rows={7} placeholder="Your message"></textarea>
            <motion.button 
              type="submit" 
              className="btn flex__center submit__btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="icon">
                <BsFillSendFill />
              </div>
              <span>Send Now</span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;