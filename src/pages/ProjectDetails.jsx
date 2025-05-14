import { useParams, useNavigate, useLocation } from "react-router-dom";
import { projects } from "../data";
import { useEffect } from "react";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [loading, setLoading] = useState(true);

  if (!project) return <div className="project-not-found">Project not found</div>;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
    setLoading(true);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
    setLoading(true);
  };

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
      }, 100);
    } else {
      navigate(-1);
    }
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="project-details-container"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="back-btn"
        onClick={handleBack}
      >
        <FaArrowLeft /> Back
      </motion.button>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="project-details-card"
      >
        <div className="image-section">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="info-section"
          >
            <h1>{project.title}</h1>
            <span className="category">{project.category}</span>
          </motion.div>
          
          <div className="image-carousel">
            <motion.button
              className="carousel-btn prev"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </motion.button>

            <div
              className="swipe-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {loading && <div className="loading-spinner">Loading...</div>}

              <AnimatePresence custom={currentImageIndex}>
                <motion.img
                  key={currentImageIndex}
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} ${currentImageIndex + 1}`}
                  onLoad={handleImageLoad}
                  custom={currentImageIndex}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      nextImage();
                    } else if (swipe > swipeConfidenceThreshold) {
                      prevImage();
                    }
                  }}
                />
              </AnimatePresence>
            </div>

            <motion.button
              className="carousel-btn next"
              onClick={nextImage}
            >
              <FaChevronRight />
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="image-indicators"
          >
            {project.images.map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`indicator ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setLoading(true);
                }}
              />
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="info-section"
        >
          <p className="descrption">
            {project.imageDescriptions?.[currentImageIndex] || project.description}
          </p>

          <motion.div 
            className="stacks"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {project.stacks.map((stack, idx) => (
              <motion.div 
                className="stack" 
                key={idx}
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img src={stack.logo} alt={stack.name} title={stack.name} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="button-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-button"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Live Demo <FaExternalLinkAlt />
            </motion.a>
            {project.pptLink && (
              <motion.a
                href={project.pptLink}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button ppt-button"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View PPT <FaExternalLinkAlt />
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;