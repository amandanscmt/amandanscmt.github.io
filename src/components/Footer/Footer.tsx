import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footer}>
        <h4>contato</h4>
        <ul>
          <li>
            <a href="https://github.com/amandanscmt" target="blank">
              github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amandanscmnt/" target="blank">
              linkedin
            </a>
          </li>
          <li>
          <a href="mailto:apmnsilva@gmail.com?subject=ol%C3%A1!">email</a>
          </li>
        </ul>
    </section>
  );
};

export default Footer;
