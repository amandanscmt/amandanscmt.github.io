import classes from "./Home.module.css";
import header from "../../assets/Prancheta 1.png";
import github from "../../assets/icons/github-svgrepo-com.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Home = () => {
  return (
    <>
      <section className={classes.header}>
        <span className={classes.headerText}>
          <h1>amanda nascimento</h1>
          <h2>front-end developer</h2>
          <div className={classes.socialIcons}>
            <a href="https://github.com/amandanscmt" target="blank">
              <span className={classes.iconsContainer}>
                <img src={github} alt="Github icon" className={classes.icons} />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/amandanscmnt/" target="blank">
              <span className={classes.iconsContainer}>
                <img
                  src={linkedin}
                  alt="LinkedIn icon"
                  className={classes.icons}
                />
              </span>
            </a>
          </div>
        </span>
        <img
          src={header}
          alt="Geometric shapes"
          className={classes.headerImg}
          draggable={false}
        />
      </section>
    </>
  );
};

export default Home;
