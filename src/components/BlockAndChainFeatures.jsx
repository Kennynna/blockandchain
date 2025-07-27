import { SoftIcon } from "../assets/icons/Soft"
import Container from "./Container"
import { Title } from "./ui/Title"
import { FadeInWhenVisible } from './FadeInWhenVisible';


export const BlockAndChainFeatures = () => {
  return (
    <section className="features-title">
      <FadeInWhenVisible delay={0.4}>

        <Title title='BlockAndChain Features' desc='Unlock the Power of' />
      </FadeInWhenVisible>

        <FadeInWhenVisible>
      <main className="features-main">
          <Container className='features-block flex items-center justify-between relative'>
            <div className="h-full w-[1px]  absolute  top-0 features-vertical-line" />

            <div className="flex-1 features-block-left min-w-[413px]">
              <SoftIcon />
              <h2>End-to-end Software Development Services</h2>
            </div>


            {/* Карточки */}
            <div className="flex-2 features-cards">
              <article className="features-card">
                <h3>Application Development</h3>
                <p>We build web & mobile applications that are scalable, secure and deliver a seamless user experience.</p>
              </article>
              <article className="features-card">
                <h3>Application Development</h3>
                <p>We build web & mobile applications that are scalable, secure and deliver a seamless user experience.</p>
              </article>            <article className="features-card">
                <h3>Application Development</h3>
                <p>We build web & mobile applications that are scalable, secure and deliver a seamless user experience.</p>
              </article>            <article className="features-card">
                <h3>Application Development</h3>
                <p>We build web & mobile applications that are scalable, secure and deliver a seamless user experience.</p>
              </article>
            </div>
          </Container>

      </main>
        </FadeInWhenVisible>
    </section>

  )
}
