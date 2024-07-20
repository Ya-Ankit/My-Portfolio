import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Project Name",
      img: IMG1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      technologies: "Html | CSS | Javascript | React Js",
      link: "",
      github: "",
    },
    {
      id: 2,
      title: "project Name",
      img: IMG1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      technologies: "HTML | CSS | JavaScript | Express Js",
      link: "",
      github: "",
    },
    {
      id: 3,
      title: "Project Name",
      img: IMG1,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      technologies: "HTML | CSS | JavaScript",
      link: "",
      github: "",
    },
    {
      id: 4,
      title: "Project Name",
      img: IMG1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      technologies: "Html | CSS | JavaScript",
      link: "",
      github: "",
    },
    {
      id: 5,
      title: "Project Name",
      img: IMG1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      technologies: "Html | Typescript",
      link: "",
      github: "",
    },
    {
      id: 6,
      title: "Project Name",
      img: IMG1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      technologies: "Html | Scss | Javascript",
      link: "",
      github: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
