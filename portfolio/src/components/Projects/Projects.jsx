import React, { useState } from "react";
import "./Projects.css";
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const categories = ["all", "web", "design"];

  const projects = [
    {
      id: 1,
      title: "TODO App (React + MongoDB)",
      description:
        "A modern TODO app built with React and Node.js using MongoDB (local). Features include add, edit, delete, and delete all tasks. Sidebar with All, Important, Today, and This Week filters. Tasks support date & time, and star icon to mark as important.",
      image: "/images/project-images/todo_app_img.png",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "",
      githubLink: "https://github.com/Kinjal-Patel23/NODE/tree/main/crud_mongo",
      videoLink: "/videos/todo_mongo.mp4",
    },
    {
      id: 2,
      title: "Real Estate Website",
      description:
        "A fully responsive real estate website built with React and Tailwind CSS, featuring property listings, search functionality and modern UI design.",
      image: "/images/project-images/real_estate_img.png",
      category: "design",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "https://real-estate-gamma-beige.vercel.app/",
      githubLink:
        "https://github.com/Kinjal-Patel23/REACT/tree/main/real-estate_webpage",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A fully responsive portfolio website built using HTML, Tailwind CSS, and jQuery, showcasing projects and skills with modern design and smooth interactions.",
      image: "/images/project-images/portfolio_img.png",
      category: "design",
      technologies: ["HTML", "Tailwind CSS", "jQuery"],
      liveLink: "https://portfolio-zeta-orcin-85.vercel.app/",
      githubLink:
        "https://github.com/Kinjal-Patel23/jQuery_Practical/tree/main/Practical_exam",
    },
    {
      id: 4,
      title: "Currency Converter",
      description:
        "A responsive currency converter web app built using HTML, CSS, and JavaScript, featuring real-time exchange rate data fetched from an external API for accurate conversions.",
      image: "/images/project-images/currency_converter_img.png",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      liveLink: "",
      githubLink: "",
      videoLink: "/videos/currency_converter_demo.mp4",
    },
    {
      id: 5,
      title: "Cosmetics Cart Website",
      description:
        "A fully responsive cosmetics shopping website built with HTML and JavaScript, featuring cart functionality, smooth user interactions, and a stylish loading screen.",
      image: "/images/project-images/cosmetics_cart_img.png",
      category: "design",
      technologies: ["HTML", "JavaScript", "CSS"],
      liveLink: "https://cosmetics-cart-website.vercel.app/",
      githubLink:
        "https://github.com/Kinjal-Patel23/JAVASCRIPT/tree/main/Cart_Website",
    },
    {
      id: 6,
      title: "Advanced Storage TODO App",
      description:
        "A customizable TODO application built with React and CSS, allowing users to store tasks in LocalStorage, SessionStorage, or Cookies based on their preference. Features include adding, editing, and deleting tasks with a clean and responsive UI.",
      image: "/images/project-images/advanced_todo_img.png",
      category: "web",
      technologies: [
        "React",
        "CSS",
        "LocalStorage",
        "SessionStorage",
        "Cookies",
      ],
      liveLink: "https://advancedtodoapp.vercel.app/",
      githubLink:
        "https://github.com/Kinjal-Patel23/REACT/tree/main/todo_storage",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideo("");
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {/* For TODO App project (id: 1) and Currency Converter project (id: 4), show video icon with GitHub link */}
                    {project.id === 1 || project.id === 4 ? (
                      <>
                        <button
                          className="project-link video-btn"
                          onClick={() => openVideoModal(project.videoLink)}
                          aria-label="View project demo video"
                        >
                          <i className="fas fa-play-circle"></i>
                        </button>
                        {/* GitHub Link - Only show if link exists */}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source code"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                        )}
                      </>
                    ) : (
                      <>
                        {/* Live Demo Link - Only show if link exists */}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live project"
                          >
                            <i className="fas fa-link"></i>
                          </a>
                        )}
                        {/* GitHub Link - Only show if link exists */}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source code"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="video-modal">
          <div className="video-modal-content">
            <span className="close-modal" onClick={closeVideoModal}>
              &times;
            </span>
            <video controls autoPlay>
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};
export default Projects;
