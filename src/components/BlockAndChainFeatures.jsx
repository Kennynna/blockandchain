import { SoftIcon } from "../assets/icons/Soft"
import Container from "./Container"
import { Title } from "./ui/Title"
import { FadeInWhenVisible } from './FadeInWhenVisible';
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../config/lang";

export const BlockAndChainFeatures = () => {
  const { lang } = useLanguage();
  const t = translations[lang].blockAndChainFeatures;
  return (
    <section className="features-title">
      <div className="bg-[var(--bg-gray)]">
        <FadeInWhenVisible delay={0.1}>

          <Title title={t.title} desc={t.desc} />
        </FadeInWhenVisible>
      </div>

      <FadeInWhenVisible>
        <main className="features-main">
          <Container className='features-block flex items-center justify-between relative'>
            <div className="h-full w-[1px]  absolute  top-0 features-vertical-line" />

            <div className="flex-1 features-block-left min-w-[413px]">
              <SoftIcon className='icon-80-50' />
              <h2>{t.leftCard.title}</h2>
            </div>


            {/* Карточки */}
            <div className="flex-2 features-cards">
              <article className="features-card">
                <h3>{t.rightCards[0].title}</h3>
                <p>{t.rightCards[0].desc}</p>
              </article>
              <article className="features-card">
                <h3>{t.rightCards[1].title}</h3>
                <p>{t.rightCards[1].desc}</p>
              </article>            <article className="features-card">
                <h3>{t.rightCards[2].title}</h3>
                <p>{t.rightCards[2].desc}</p>
              </article>            <article className="features-card">
                <h3>{t.rightCards[3].title}</h3>
                <p>{t.rightCards[3].desc}</p>
              </article>
            </div>
          </Container>

        </main>
      </FadeInWhenVisible>
    </section>

  )
}
