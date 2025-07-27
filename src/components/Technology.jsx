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

  return (
    <section className="technology-title">
      <FadeInWhenVisible delay={0.4}>
        <Title title='Next-level Technology Consulting' desc={`Unlock efficiency, innovation, and security with BlockAndChain' s expert services in technology consulting `} />

      </FadeInWhenVisible>

      <main className="technology-main">
        <Container>

          <FadeInWhenVisible delay={0.4}>

            <div className="technology-cards flex justify-between items-center ">
              <article className="flex flex-col justify-between technology-card">
                <img src="/img/1.png" alt="technology" />
                <h3>Business Analysis</h3>
                <p>Ensure the development of a robust software solution that aligns with your company’s goals, maximizes efficiency and optimizes return on investment.​That aligns with your company’s goals, maximizes efficiency with your company’</p>
                <NavLink to="/contacts" className='contact--us__link mt-auto flex justify-end w-full'>

                  <button>
                    Contact Us
                    <ArrowIcon className='arrow-icon' />
                  </button>
                </NavLink>


              </article>
              <article className="flex flex-col justify-between technology-card">
                <img src="/img/2.png" alt="technology" />
                <h3>Cyber Security</h3>
                <p>Prioritize security as a core element of your business agenda, safeguarding data, intellectual property, and infrastructure from deliberate attacks and vulnerabilities. Element of your business agenda, safeguarding data, intellectual property.</p>
                <NavLink to="/contacts" className='contact--us__link mt-auto flex justify-end w-full'>

                  <button>
                    Contact Us
                    <ArrowIcon className='arrow-icon' />
                  </button>
                </NavLink>
              </article>
            </div>
          </FadeInWhenVisible>



        </Container>
        <div className="border-technology" />

        <Container>
          <FadeInWhenVisible delay={0.4}>

            <div className="technology-cards-second-raw flex justify-between items-center ">
              <article className="flex flex-col justify-between technology-card">
                <img src="/img/3.png" alt="technology" />
                <h3>UI/UX Design</h3>
                <p>Be empowered to modernize legacy systems, launch cutting-edge products, and create user-centric experiences for your stakeholders. </p>
                <NavLink to="/contacts" className='contact--us__link mt-auto flex justify-end w-full'>

                  <button>
                    Contact Us
                    <ArrowIcon className='arrow-icon' />
                  </button>
                </NavLink>            </article>
              <article className="flex flex-col justify-between technology-card">
                <img src="/img/4.png" alt="technology" />
                <h3>Technology Advisory</h3>
                <p>Leverage industry specialization and technical experience to reach the optimal technology approach to driving innovation and achieving strategic goals. </p>
                <NavLink to="/contacts" className='contact--us__link mt-auto flex justify-end w-full'>

                  <button>
                    Contact Us
                    <ArrowIcon className='arrow-icon' />
                  </button>
                </NavLink>
              </article>
            </div>
          </FadeInWhenVisible>



        </Container>
        <div className="border-technology" />
        <Container className='technology-cards-main-block'>
          <FadeInWhenVisible delay={0.4}>

            <div className="technology-cards-main flex justify-between items-center ">
              <article className="flex flex-col justify-between technology-card technology-last-card">
                <img src="/img/5.png" alt="technology" />
                <h3>Business Analysis</h3>
                <p>Receive expert advice and guidance on designing, planning, and implementing effective technology solutions.’</p>
                <NavLink to="/contacts" className='contact--us__link'>

                  <button>
                    Contact Us
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
