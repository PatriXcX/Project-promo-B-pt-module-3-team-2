import avatarImage from "../images/avatar.webp";
import ebookkExampleImagen from "../images/ebook-example.jpg";
import gitHubIcon from "../images/icons/github.svg";
import globeSolid from "../images/icons/globe-solid.svg";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import CreateBtns from "./Sections/Buttons/Create-Btns";
import "../styles/App.scss";
import Info from "./Sections/Info";

function App() {
  //Función guardar form en API

  const handleCreateBtnsSave = (ev) => {
    ev.preventDefault();
    console.log("has hecho click");
  };

  return (
    <div className="container">
      <Header />

      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <a className="button--link" href="./">
            Ver proyectos
          </a>
        </section>

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
              <p className="card__job">Full stack Developer</p>
              <h3 className="card__name">Emmelie Bjôrklund</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">Elegant Workspace</h3>
              <p className="card__slogan">Diseños Exclusivos</p>
              <h3 className="card__descriptionTitle">Product description</h3>
              <p className="card__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                quos? Itaque, molestias eveniet laudantium adipisci vitae
                ratione
              </p>

              <div className="card__technicalInfo">
                <p className="card__technologies">React JS - HTML - CSS</p>

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
        <form className="addForm">
          <Info />
          <fieldset className="addForm__group--upload">
            <label className="button">
              Subir foto del proyecto
              <input className="addForm__hidden" type="file" />
            </label>
            <label className="button">
              Subir foto de la autora
              <input className="addForm__hidden" type="file" />
            </label>
            <CreateBtns handleCreateBtnsSave={handleCreateBtnsSave} />
          </fieldset>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default App;
