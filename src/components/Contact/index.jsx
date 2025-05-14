import "./Contact.css";
import Pyramid from "../../ui/Pyramid";
import {contactInfo} from "../../data";
import { BsFillSendFill } from "react-icons/bs";
import SocialHandles from "../../ui/SocialHandles";
import React from "react";
import Swal from 'sweetalert2'
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
        <div className="contact__group">
          <div>
            <h3 className="title shine" >
              Contact Me
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact,index)=>(
                <article className="flex option" key={index}>
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
                      <div className="flex__center icon" style={{background: contact.color }}>
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="social">
            <SocialHandles /></div>
          </div>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Your full name" name="name" required />
            <input type="email" placeholder="Your email" name="email" required />
            <textarea name="message" rows={7} placeholder="Your message"></textarea>
            <button type="submit" className="btn flex__center submit__btn">
               <div className="icon">
               <BsFillSendFill />
               </div>
               <span>Send Now</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;