import { useParams, useNavigate, useLocation } from "react-router-dom";
import { projects } from "../data";
import  { useEffect} from "react";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projects[id];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  if (!project) return <div className="project-not-found">Project not found</div>;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  // Touch handling
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextImage();
    if (touchStart - touchEnd < -50) prevImage();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleBack = () => {
    if (location.state?.fromProjects) {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById("projects");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Delay to allow DOM render
    } else {
      navigate(-1);
    }
  };

  const handleImageLoad = () => {
    setLoading(false); // ✅ Hide the loading spinner once the image has loaded
  };

  return (
    <div className="project-details-container">
      <button className="back-btn" onClick={handleBack}>
        <FaArrowLeft /> Back
      </button>

      <div className="project-details-card">
        <div className="image-section">
          <div className="info-section">
            <h1>{project.title}</h1>
            <span className="category">{project.category}</span>
          </div>
          <div className="image-carousel">
            <button className="carousel-btn prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>

            <div
              className="swipe-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* ✅ Add loading spinner when image is loading */}
              {loading && <div className="loading-spinner">Loading...</div>}

              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} ${currentImageIndex + 1}`}
                onLoad={handleImageLoad} // ✅ Trigger loading state change
              />
            </div>

            <button className="carousel-btn next" onClick={nextImage}>
              <FaChevronRight />
            </button>
          </div>

          <div className="image-indicators">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="info-section">
          <p className="descrption">
            {project.imageDescriptions?.[currentImageIndex] || project.description}
          </p>

          <div className="stacks">
            {project.stacks.map((stack, idx) => (
              <div className="stack" key={idx}>
                <img src={stack.logo} alt={stack.name} title={stack.name} />
              </div>
            ))}
          </div>

          <div className="button-group">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-button"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
            {project.pptLink && (
              <a
                href={project.pptLink}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button ppt-button"
              >
                View PPT <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
