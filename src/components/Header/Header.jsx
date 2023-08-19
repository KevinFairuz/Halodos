import React, { useState } from 'react';
import logoHalo from '../../../src/Assets/halodos-logo-removebg-preview.png';
import logoHalo2 from '../../../src/Assets/logo-utama.jpg';
import { Button } from '@material-tailwind/react';
import './header.css';
import Form from '../Login/Form';

const Header = () => {
  /*=================== Change Background Header ===================== */
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  /*=================== Toggle Menu ===================== */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className="header">
      <nav className="nav container">
        <div className="">
          <a href="index.html" className="">
            <img src={logoHalo} alt="" className="mt-200 h-100px"></img>
          </a>
        </div>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className="uil uil-estate nav__icon"></i> Beranda
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={
                  activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => setActiveNav('#skills')}
                className={
                  activeNav === '#skills'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Artikel
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#services"
                onClick={() => setActiveNav('#services')}
                className={
                  activeNav === '#services'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Riwayat
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#portofolio"
                onClick={() => setActiveNav('#portofolio')}
                className={
                  activeNav === '#portofolio'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-scenery nav__icon"></i>
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === '#contact'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-message nav__icon"></i> <Form />
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
