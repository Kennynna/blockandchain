import Container from "./Container"
import { NavLink } from 'react-router-dom';
import { LangChange } from "./ui/LangChange";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../config/lang";
export const Footer = () => {
    const { lang } = useLanguage();
    const t = translations[lang].footer;
  return (
    <footer className="footer">
      <Container className=' footer-block'>
        <div className="flex items-center gap-[11px]">
          <NavLink
            to="/conditions"
            end
            className='footer-link  footer-text'
          >
            {t.terms}
          </NavLink>
          <NavLink
            to="/policy"
            end
            className='footer-link footer-text'
          >
            {t.privacy}

          </NavLink>
          <LangChange />
        </div>


        <p className="small footer-text">© 2025 BlockAndChain. All rights reserved.</p>
      </Container>
    </footer>
  )
}
