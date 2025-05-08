import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { id, title, category, image, description, stacks } = project;

  return (
    <Link to={`/projects/${id}`} className="card-link">
      <div className="card project__card">
        <div className="project__card-top">
          <div className="picture">
            <img src={image} alt={title} />
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
              <div className="stack" key={index}>
                <img src={stack.logo} alt={stack.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;