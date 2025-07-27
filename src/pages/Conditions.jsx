import { Footer } from '../components/Footer';
import Container from "../components/Container";
import Nav from "../components/Nav";
import { translations } from "../config/lang";
import { useLanguage } from "../context/LanguageContext";
export default function Conditions() {
  const { lang } = useLanguage();
  const condition = translations[lang]?.condition || translations.en.condition;
  return (
  <div className="conditions">

  <Nav/>
  <section className="conditions-section ">
      <Container >
      <div className="conditions-title">
          <h1>Terms of Use</h1>
          <p>Last update: 07.28.2025</p>
      </div>

          <div className="terms--block">
            <p className="terms__title">{condition.title}</p>
            <ol className="terms__list">
              {condition.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </div>

      </Container>
    </section>

    <Footer/>
  </div>

  )}