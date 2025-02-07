import { credentials } from "../../data";
import "./Credentials.css";
import ServiceCard from "../../ui/ServiceCard";
const Credentials = () => {
  return (
    <section id='credentials'>
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className='shine'>Credentials</h2>
        </div>
        <div className="services__group">
          { credentials.map(
            ({title,name, description, icon,at, color, colorRGB},index)=>(
            <ServiceCard 
            title={title}
            name={name}
            description={description}
            icon={icon}
            at={at}
            color={color}
            colorRGB={colorRGB}
            key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
