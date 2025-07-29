import { NavLink } from "react-router-dom"
import { ArrowIcon } from "../assets/icons/Arrow"
import Container from "./Container"
import { Title } from "./ui/Title"
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../config/lang";
import { FadeInWhenVisible } from './FadeInWhenVisible';

export const Technology = () => {
  const { lang } = useLanguage();
  const disclaimer = translations[lang]?.home?.disclaimer || translations.en.home.disclaimer;
  const t = translations[lang].technology

  return (
    <section className="technology-title">
      <div className="bg-[var(--bg-gray)]">

        <FadeInWhenVisible delay={0.1}>
          <Title title={t.title} desc={t.desc} />

        </FadeInWhenVisible>
      </div>

      <main className="technology-main">
        <Container>

          <FadeInWhenVisible delay={0.1}>

            <div className="technology-cards flex justify-between items-center ">
              <article className="flex flex-col justify-between technology-card">
                <img src="/img/1.webp" alt="technology" />
                <h3>{t.cards[0].title}</h3>
                <p>{t.cards[0].desc}</p>
                <NavLink to="/contacts" className='contact--us__link mt-auto flex justify-end w-full'>

                  <button>
                    {translations[lang].btnContact}
                    <ArrowIcon className='arrow-icon' />
                  </button>
                </NavLink>


              </article>
              <article className="flex flex-col justify-between technology-card">
                <img src="/img/2.webp" alt="technology" />
                <h3>{t.cards[1].title}</h3>
                <p>{t.cards[1].desc}</p>
                <NavLink to="/contacts" className='contact--us__link mt-auto flex justify-end w-full'>

                  <button>
                    {translations[lang].btnContact}
                    <ArrowIcon className='arrow-icon' />
                  </button>
                </NavLink>
              </article>
            </div>
          </FadeInWhenVisible>



        </Container>
        <div className="border-technology" />

        <Container>
          <FadeInWhenVisible delay={0.1}>

            <div className="technology-cards-second-raw flex justify-between items-center ">
              <article className="flex flex-col justify-between technology-card">
                <img src="/img/3.webp" alt="technology" />
                <h3>{t.cards[2].title}</h3>
                <p>{t.cards[2].desc}</p>
                <NavLink to="/contacts" className='contact--us__link mt-auto flex justify-end w-full'>

                  <button>
                    {translations[lang].btnContact}
                    <ArrowIcon className='arrow-icon' />
                  </button>
                </NavLink>            </article>
              <article className="flex flex-col justify-between technology-card">
                <img src="/img/4.webp" alt="technology" />
                <h3>{t.cards[3].title}</h3>
                <p>{t.cards[3].desc}</p>
                <NavLink to="/contacts" className='contact--us__link mt-auto flex justify-end w-full'>

                  <button>
                    {translations[lang].btnContact}
                    <ArrowIcon className='arrow-icon' />
                  </button>
                </NavLink>
              </article>
            </div>
          </FadeInWhenVisible>



        </Container>
        <div className="border-technology" />
        <Container className='technology-cards-main-block'>
          <FadeInWhenVisible delay={0.1}>

            <div className="technology-cards-main flex justify-between items-center ">
              <article className="flex flex-col justify-between technology-card technology-last-card">
                <img src="/img/5.webp" alt="technology" />
                <h3>{t.cards[4].title}</h3>
                <p>{t.cards[4].desc}</p>
                <NavLink to="/contacts" className='contact--us__link'>

                  <button>
                    {translations[lang].btnContact}
                    <ArrowIcon className='arrow-icon' />
                  </button>
                </NavLink>
              </article>
            </div>
          </FadeInWhenVisible>



          <p className="legal-notice">
            {disclaimer.map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </p>


        </Container>
      </main>
    </section>

  )
}
