import "../../assets/styles/footer.css";
import Logo from "../../assets/images/logos/artelak512px.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container__footer">
        <div className="box__footer">
          <div className="logo">
            <img src={Logo} alt="Artelak" />
          </div>
          <div className="terms">
            <p>
              Tómate tu tiempo, mira alrededor y entérate de todo lo
              que hay para saber sobre nosotros.
              <br />
              Esperamos que disfrutes nuestro sitio web, pues fue hecho con
              mucho amor, ese con el que elaboramos todos nuestros productos.
            </p>
          </div>
        </div>
        <div className="box__footer">
          <h2>Productos</h2>
          <a href="#">Quesos frescos y esparcibles</a>
          <a href="#">Quesos semi-maduros</a>
          <a href="#">Quesos maduros</a>
          <a href="#">Leche y yogures</a>
          <a href="#">Postres</a>
        </div>

        <div className="box__footer">
          <h2>Contácto</h2>
          <a href="#">
            {" "}
            <i className="fas">
              <FontAwesomeIcon icon={faHome} />
            </i>{" "}
            Bogotá, Colombia
          </a>
          <a href="#">
            <i className="fas">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>{" "}
            e-mail@correo.com
          </a>
          <a href="#">
            <i className="fas">
              <FontAwesomeIcon icon={faPhone} />
            </i>{" "}
            +57 310 310 31 31
          </a>
        </div>

        <div className="box__footer">
          <h2>Redes Sociales</h2>
          <a href="#">
            {" "}
            <i className="fab">
              <FontAwesomeIcon icon={faFacebook} />
            </i>{" "}
            Facebook
          </a>
          <a href="#">
            <i className="fab">
              <FontAwesomeIcon icon={faInstagram} />
            </i>{" "}
            Instagram
          </a>
          <a href="#">
            <i className="fab">
              <FontAwesomeIcon icon={faWhatsapp} />
            </i>{" "}
            Whatsapp
          </a>
        </div>
      </div>

      <div className="box__copyright">
        <hr />
        <p>
          Todos los derechos reservados © 2022 <b>Artelak</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
