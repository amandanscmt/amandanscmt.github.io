import classes from "./Profile.module.css";
import profilePic from "../../assets/IMG_7620-2.jpg";

const Profile = () => {
  return (
    <>
      <section className={classes.profile}>
        <span className={classes.profileText}>
          <p>
            <h3 id="#quem-sou">quem sou</h3>
            <span className={classes.picContainer}>
              <img
                src={profilePic}
                alt="Profile picture"
                className={classes.profilePic}
                draggable={false}
              />
            </span>
            Me chamo <em>Amanda</em>, sou pernambucana e tenho 27 anos. Sou
            formada em Licenciatura em Letras pela UFRPE e atualmente estou
            cursando o segundo semestre de Análise e Desenvolvimento de Sistemas
            no SENAC.
          </p>
        </span>
        <hr />
        <span className={classes.xpText}>
          <p>
            <h3>minha experiência</h3>
            Fui bolsista de Front-end na <em>Compass UOL</em> durante 5 meses
            onde tive a oportunidade de adquirir e colocar em prática
            conhecimentos em <b>Metodologias Ágeis</b>, <b>Git</b>, <b>HTML</b>,{" "}
            <b>CSS</b>, <b>JavaScript</b>, <b>TypeScript</b>, <b>React</b>,{" "}
            <b>Design System</b> e afins. Além disso, através do programa de
            bolsas, me tornei{" "}
            <b>AWS Certified Cloud Practitioner</b>. No momento estou iniciando meus estudos em {" "}
            <b>Angular</b> e, em breve, <b>React Native</b>, com o objetivo de aperfeiçoar
            e ampliar meus conhecimentos.
          </p>
        </span>
      </section>
    </>
  );
};

export default Profile;
