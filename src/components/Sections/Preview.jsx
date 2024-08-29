import PropTypes from "prop-types";
function Preview({ info }) {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            Personal project card
          </span>
        </h2>

        <div className="card__author">
          <div className="card__authorPhoto"></div>
          <p className="card__job">{info.job}</p>
          <h3 className="card__name">{info.autor || "Patri"}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">{info.name || "Elegant Workspace"}</h3>
          <p className="card__slogan">{info.slogan}</p>
          <h3 className="card__descriptionTitle">{info.demo}</h3>
          <p className="card__description">{info.desc}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{info.technologies}</p>

            <a
              className="icon icon__www"
              href="#"
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href="#"
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

Preview.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Preview;
