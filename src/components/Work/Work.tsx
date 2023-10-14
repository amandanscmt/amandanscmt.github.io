import classes from "./Work.module.css";
import img1 from "../../assets/work-imgs/1.gif";
import img2 from "../../assets/work-imgs/2.gif";
import img3 from "../../assets/work-imgs/3.gif";

import html from "../../assets/icons/html-svgrepo-com.svg";
import css from "../../assets/icons/css-svgrepo-com.svg";
import javascript from "../../assets/icons/javascript-16-svgrepo-com.svg";
import react from "../../assets/icons/react-16-svgrepo-com.svg";
import typescript from "../../assets/icons/typescript-16-svgrepo-com.svg";

const Work = () => {
  return (
    <>
      <section className={classes.myWork}>
        <h3 id="#meu-trabalho">o que eu faço</h3>
        <span className={classes.workImg}>
          <div className={classes.projectCard}>
            <img
              src={img1}
              alt="Projeto 1"
              className={classes.img}
              draggable={false}
            />
            <h4 className={classes.projectTitle}>FORMULÁRIO</h4>
            <ul>
              <li>projeto individual</li>
              <li>formulário de interesse</li>
              <li>validação dos campos usando regex</li>
              <li>dados salvos no local storage</li>
            </ul>
            <a href="https://github.com/amandanscmt/challenge-01" target="blank">veja no github</a>
            <div className={classes.techUsed}>
              <span className={classes.iconsContainer} title="HTML">
                <img src={html} alt="HTML Icon" className={classes.icons} />
              </span>
              <span className={classes.iconsContainer} title="CSS">
                <img src={css} alt="CSS Icon" className={classes.icons} />
              </span>
              <span className={classes.iconsContainer} title="JavaScript">
                <img
                  src={javascript}
                  alt="JavaScript Icon"
                  className={classes.icons}
                />
              </span>
            </div>
          </div>
          <div className={classes.projectCard}>
            <img
              src={img2}
              alt="Projeto 2"
              className={classes.img}
              draggable={false}
            />
            <h4 className={classes.projectTitle}>PLANTPEACE</h4>
            <ul>
              <li>projeto em grupo</li>
              <li>site responsivo</li>
              <li>criação da homepage e formulário</li>
              <li>auxílio em demais tarefas</li>
            </ul>
            <a
              href="https://github.com/WagnerSousaLima/PlantShop-ChallengeCompassUOL"
              target="blank"
            >
              veja no github
            </a>
            <div className={classes.techUsed}>
              <span className={classes.iconsContainer} title="HTML">
                <img src={html} alt="HTML Icon" className={classes.icons} />
              </span>
              <span className={classes.iconsContainer} title="CSS">
                <img src={css} alt="CSS Icon" className={classes.icons} />
              </span>
              <span className={classes.iconsContainer} title="JavaScript">
                <img
                  src={javascript}
                  alt="JavaScript Icon"
                  className={classes.icons}
                />
              </span>
              <span className={classes.iconsContainer} title="React">
                <img src={react} alt="React Icon" className={classes.icons} />
              </span>
            </div>
          </div>
          <div className={classes.projectCard}>
            <img
              src={img3}
              alt="Projeto 3"
              className={classes.img}
              draggable={false}
            />
            <h4 className={classes.projectTitle}>AUDIO</h4>
            <ul>
              <li>projeto individual</li>
              <li>mobile first e responsivo</li>
              <li>integração com API</li>
              <li>firebase authenticator</li>
              <li>context API para criação do carrinho</li>
            </ul>
            <a href="https://github.com/amandanscmt/final-challenge" target="blank">veja no github</a>
            <div className={classes.techUsed}>
              <span className={classes.iconsContainer} title="HTML">
                <img src={html} alt="HTML Icon" className={classes.icons} />
              </span>
              <span className={classes.iconsContainer} title="CSS">
                <img src={css} alt="CSS Icon" className={classes.icons} />
              </span>
              <span className={classes.iconsContainer} title="TypeScript">
                <img
                  src={typescript}
                  alt="TypeScript Icon"
                  className={classes.icons}
                />
              </span>
              <span className={classes.iconsContainer} title="React">
                <img src={react} alt="React Icon" className={classes.icons} />
              </span>
            </div>
          </div>
        </span>
      </section>
    </>
  );
};

export default Work;
