import React from "react";

const projects = [
  { 
    img: new URL("../assets/portfolio/project3.png", import.meta.url).href, 
    title: "Travel Landing Page", 
    category: "landing page",
    demo: "https://salmasnawi.github.io/travel/"
  },
  { 
    img: new URL("../assets/portfolio/project1.png", import.meta.url).href, 
    title: "E-commerce Exclusive", 
    category: "E-commerce",
    demo: "https://salmasnawi.github.io/eCommerce-Exclusive/"
  },
  { 
    img: new URL("../assets/portfolio/project3.png", import.meta.url).href, 
    title: "Movie Streaming Website", 
    category: "E-commerce",
    demo: "https://salmasnawi.github.io/Movie-Streaming/"
  },
  { 
    img: new URL("../assets/portfolio/project4.png", import.meta.url).href, 
    title: "Pharmacy CRUD Project", 
    category: "javascript",
    demo: "https://salmasnawi.github.io/phramsy/"
  },
  { 
    img: new URL("../assets/portfolio/project5.png", import.meta.url).href, 
    title: " Twitter Clone", 
    category: "full-stack",
    demo: "https://github.com/salmasnawi/native_twitter_blog" 
  },
  { 
    img: new URL("../assets/portfolio/project6.png", import.meta.url).href, 
    title: "Bakery Website", 
    category: "97% Bootstrap-based",
    demo: "https://salmasnawi.github.io/bakery/" 
  },
  { 
    img: new URL("../assets/portfolio/project3.png", import.meta.url).href, 
    title: "weather App", 
    category: "API Integration",
    demo: "https://salmasnawi.github.io/weather-api/" 
  },
  { 
    img: new URL("../assets/portfolio/project4.png", import.meta.url).href, 
    title: "Quiz App", 
    category: "API Integration",
    demo: "https://salmasnawi.github.io/Quiz-/" 
  },
  
   
];

const Portfolio = () => {
  return (
    <section className="portfolio py-5 text-center">
      <div className="container">
        <h2 className="section-title animate mb-4">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="portfolio-item animate"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <div className="portfolio-item animate">
                  <img src={project.img} alt={project.title} className="img-fluid" />
                  <div className="overlay">
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
