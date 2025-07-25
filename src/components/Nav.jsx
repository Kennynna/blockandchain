import { NavLink } from 'react-router-dom';
import Container from './Container';
import { Logo } from '../assets/icons/logo';
import {BurgerMenu} from  '../assets/icons/BurgerMenu'
const Nav = () => {
  return (
    <nav className="nav-container">
      <Container className="flex justify-between items-center">


        <div className='flex items-center nav-logo-block'>
        <Logo/>
         <p className='logo-text'>BLOCKANDCHAIN</p>
        </div>


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
            Terms & Conditions
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


        <div className='nav-block'>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `nav-links__item--contact ${isActive ? 'active' : ''}`
            }
          >
            Contact Us
          </NavLink>
        </div>
        <BurgerMenu/>
      </Container>
    </nav>
  );
};

export default Nav;
