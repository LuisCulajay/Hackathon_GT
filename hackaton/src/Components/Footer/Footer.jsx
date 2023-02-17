import React from "react";

import "./footer.css";
import logo from "../../assets/logo-footer.png";

export default function Footer() {
  return (
    <>
      <footer class="footer">
        <div>
          <img alt="logo" src={logo} />
        </div>
        <div>
          <ul class="social-icon">
            <li class="social-icon__item">
              <a
                class="social-icon__link"
                href="https://www.instagram.com/gytcontinental/"
              >
                LOGO ING
              </a>
            </li>
            <li class="social-icon__item">
              <a
                class="social-icon__link"
                href="https://twitter.com/gytcontinental"
              >
                Logo tw
              </a>
            </li>
            <li class="social-icon__item">
              <a class="social-icon__link" href="https://www.facebook.com/gtc">
                logo face
              </a>
            </li>
            <li class="social-icon__item">
              <a
                class="social-icon__link"
                href="https://www.youtube.com/channel/UCKTRATiQ_uKes7FO6txwiGw"
              >
                logo yt
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="menu__item">
              <a class="menu__link" href="/">
                Inicio
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="dos">
                Impuestos
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="tes">
                Calculadora de impuestos
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="cinco">
                Estadisticas
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="siete">
                Plan de retiro
              </a>
            </li>
          </ul>
          <p className="otro">
            &copy;2023 Todos los derechos reservados G&T Continental
          </p>
        </div>
      </footer>
    </>
  );
}
