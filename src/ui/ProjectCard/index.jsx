import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { id, title, category, image, description, stacks } = project;

  return (
    <Link 
      to={`/projects/${id}`} 
      state={{ fromProjects: true }}
      className="card-link"
      onClick={() => sessionStorage.setItem("fromProjects", "true")}
    >
      <motion.div 
        className="card project__card"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="project__card-top">
          <div className="picture">
            <motion.img 
              src={image} 
              alt={title}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        <div className="project__card-bottom">
          <div className="flex project__info">
            <div className="img">
              <img src={image} alt={title} />
            </div>
            <div>
              <h3 className="title">{title}</h3>
              <p className="text__muted category">{category}</p>
            </div>
          </div>
          <p className="text__muted description">
            {description.length > 60
              ? `${description.substring(0, 60)}... `
              : description}
            <span className="read-more">more</span>
          </p>
          <div className="flex__center stacks">
            {stacks.map((stack, index) => (
              <motion.div 
                className="stack" 
                key={index}
                whileHover={{ scale: 2 }}
                transition={{ duration: 0.2 }}
              >
                <img src={stack.logo} alt={stack.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;