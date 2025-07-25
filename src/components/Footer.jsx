import Container from "./Container"
import { NavLink } from 'react-router-dom';
import { LangChange } from "./ui/LangChange";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className=' footer-block'>
        <div className="flex items-center gap-[11px]">
          <NavLink
            to="/conditions"
            end
            className='footer-link  footer-text'
          >
            Terms & Conditions
          </NavLink>
          <NavLink
            to="/policy"
            end
            className='footer-link footer-text'
          >
            Privacy Policy
          </NavLink>
          <LangChange />
        </div>


        <p className="small footer-text">© 2025 BlockAndChain. All rights reserved.</p>
      </Container>
    </footer>
  )
}
