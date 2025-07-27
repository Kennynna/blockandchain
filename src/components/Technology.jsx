import { NavLink } from "react-router-dom"
import { ArrowIcon } from "../assets/icons/Arrow"
import Container from "./Container"
import { Title } from "./ui/Title"

export const Technology = () => {
  return (
    <section className="technology-title">
      <Title title='Next-level Technology Consulting' desc={`Unlock efficiency, innovation, and security with BlockAndChain' s expert services in technology consulting `} />

      <main className="technology-main">
        <Container>

          <div className="technology-cards flex justify-between items-center ">
            <article className="flex flex-col justify-between technology-card">
              <img src="/public/img/1.jpg" alt="" />
              <h3>Business Analysis</h3>
              <p>Ensure the development of a robust software solution that aligns with your company’s goals, maximizes efficiency and optimizes return on investment.​That aligns with your company’s goals, maximizes efficiency with your company’</p>
              <NavLink to="/contacts" className='contact--us__link'>

                <button>
                  Contact Us
                  <ArrowIcon className='arrow-icon' />
                </button>
              </NavLink>


            </article>
            <article className="flex flex-col justify-between technology-card">
              <img src="/public/img/2.jpg" alt="" />
              <h3>Cyber Security</h3>
              <p>Prioritize security as a core element of your business agenda, safeguarding data, intellectual property, and infrastructure from deliberate attacks and vulnerabilities. Element of your business agenda, safeguarding data, intellectual property.</p>
              <NavLink to="/contacts" className='contact--us__link'>

                <button>
                  Contact Us
                  <ArrowIcon className='arrow-icon' />
                </button>
              </NavLink>
            </article>
          </div>

        </Container>
        <div className="border-technology" />

        <Container>

          <div className="technology-cards-second-raw flex justify-between items-center ">
            <article className="flex flex-col justify-between technology-card">
              <img src="/public/img/3.jpg" alt="" />
              <h3>UI/UX Design</h3>
              <p>Be empowered to modernize legacy systems, launch cutting-edge products, and create user-centric experiences for your stakeholders. </p>
              <NavLink to="/contacts" className='contact--us__link'>

                <button>
                  Contact Us
                  <ArrowIcon className='arrow-icon' />
                </button>
              </NavLink>            </article>
            <article className="flex flex-col justify-between technology-card">
              <img src="/public/img/1.jpg" alt="" />
              <h3>Technology Advisory</h3>
              <p>Leverage industry specialization and technical experience to reach the optimal technology approach to driving innovation and achieving strategic goals. </p>
              <NavLink to="/contacts" className='contact--us__link'>

                <button>
                  Contact Us
                  <ArrowIcon className='arrow-icon' />
                </button>
              </NavLink>
            </article>
          </div>

        </Container>
        <div className="border-technology" />
        <Container className='technology-cards-main-block'>

          <div className="technology-cards-main flex justify-between items-center ">
            <article className="flex flex-col justify-between technology-card technology-last-card">
              <img src="/public/img/4.jpg" alt="" />
              <h3>Business Analysis</h3>
              <p>Ensure the development of a robust software solution that aligns with your company’s goals, maximizes efficiency and optimizes return on investment.​That aligns with your company’s goals, maximizes efficiency with your company’</p>
              <NavLink to="/contacts" className='contact--us__link'>

                <button>
                  Contact Us
                  <ArrowIcon className='arrow-icon' />
                </button>
              </NavLink>
            </article>
          </div>

        </Container>
      </main>
    </section>

  )
}
