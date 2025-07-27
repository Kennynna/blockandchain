import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container';
import { Logo } from '../assets/icons/logo';
import { BurgerMenuIcon } from '../assets/icons/BurgerMenu';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="nav-container">
      <Container className="flex justify-between items-center">

        {/* Логотип и текст */}
        <div className="flex items-center nav-logo-block">
          <Logo />
          <p className="logo-text">BLOCKANDCHAIN</p>
        </div>

        {/* Десктоп‑ссылки */}
        <div className="flex nav-links nav-block">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-links__item ${isActive ? 'nav-links__item-active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/conditions"
            className={({ isActive }) =>
              `nav-links__item ${isActive ? 'nav-links__item-active' : ''}`
            }
          >
            Terms &amp; Conditions
          </NavLink>
          <NavLink
            to="/policy"
            className={({ isActive }) =>
              `nav-links__item ${isActive ? 'nav-links__item-active' : ''}`
            }
          >
            Privacy Policy
          </NavLink>
        </div>

        {/* Десктоп‑кнопка “Contact Us” */}
        <div className="nav-block">
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `nav-links__item--contact ${isActive ? 'active' : ''}`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Бургер‑иконка для мобильного */}
        <button
          className="burger-menu"
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
        >
          <BurgerMenuIcon />
        </button>
      </Container>

      {/* Мобильное меню (всегда в DOM, управляется классами) */}
      <div className={`mobile-nav-links ${menuOpen ? 'open' : 'closed'}`}>
        <button
          className="mobile-nav-close"
          onClick={handleCloseMenu}
          aria-label="Close menu"
        >
          &#10005;
        </button>

        {/* Ссылки в мобильном меню */}
        <NavLink
          to="/"
          end
          onClick={handleCloseMenu}
          className={({ isActive }) =>
            `nav-links__item ${isActive ? 'nav-links__item-active' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/conditions"
          onClick={handleCloseMenu}
          className={({ isActive }) =>
            `nav-links__item ${isActive ? 'nav-links__item-active' : ''}`
          }
        >
          Terms &amp; Conditions
        </NavLink>
        <NavLink
          to="/policy"
          onClick={handleCloseMenu}
          className={({ isActive }) =>
            `nav-links__item ${isActive ? 'nav-links__item-active' : ''}`
          }
        >
          Privacy Policy
        </NavLink>
        <NavLink
          to="/contacts"
          onClick={handleCloseMenu}
          className="nav-links__item--contact"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
