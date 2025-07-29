import { FlexibilityIcon } from "../assets/icons/Flexibility";
import { Kickoff } from "../assets/icons/Kickoff";
import { PricingIcon } from "../assets/icons/Pricing";
import Container from "./Container";
import { FadeInWhenVisible } from './FadeInWhenVisible';
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../config/lang";

export function Hero() {
    const { lang } = useLanguage();
    const t = translations[lang].hero;

    return (
        <section className="section-hero ">
            <div>
                <Container className='hero-title-block'>
                    <h2>{t.slogan}</h2>
                    <h1 className="title">{t.title}</h1>
                    <p>{t.desc}</p>
                </Container>
            </div>
            <main className="relative">

                <FadeInWhenVisible delay={0.1}>

                    <div className='hero-flex-block relative container hero-flex-block-top '>
                        <div className="absolute bg-red-100 top-[170px] horizontal-line h-[0.5px] w-full " />
                        <article className="hero-feature-card top-grid">
                            <p className="hero-flex-block-statistic">3<span className="plus text-[#FFD11A]">+</span> </p>
                            <p className="hero-flex-block__desc">{t.stats.clients_desc}</p>
                        </article>
                        <div className="hero-feature-card flex items-center w-full justify-center ">
                            <div className="line">

                            </div>
                        </div>
                        <article className="hero-feature-card top-grid left-grid">
                            <p className="hero-flex-block-statistic">1k<span className="plus text-[#FFD11A]">+</span>  </p>
                            <p className="hero-flex-block__desc">{t.stats.users_desc}</p>
                        </article>
                        <div className="hero-feature-card flex items-center w-full justify-center ">
                            <div className="line ">

                            </div>
                        </div>
                        <article className="hero-feature-card top-grid left-grid">
                            <p className="hero-flex-block-statistic">2<span className="plus text-[#FFD11A]">+</span>  </p>
                            <p className="hero-flex-block__desc">{t.stats.experts_desc}</p>
                        </article>





                        <article className="hero-feature-card bottom-cards">
                            <Kickoff className='icon-50-30' />
                            <p className="feature-card__title">{t.features[0].title}</p>
                            <p className="feature-card__desc">{t.features[0].desc}</p>
                        </article >
                        <div className="hero-feature-card flex items-center w-full justify-center ">
                            <div className="line ">

                            </div>
                        </div>
                        <article className="hero-feature-card left-grid bottom-cards">
                            <PricingIcon className='icon-50-30' />
                            <p className="feature-card__title">{t.features[1].title}</p>
                            <p className="feature-card__desc">{t.features[1].desc}</p>
                        </article >
                        <div className="hero-feature-card flex items-center w-full justify-center ">
                            <div className="line ">

                            </div>
                        </div>

                        <article className="hero-feature-card left-grid bottom-cards">
                            <FlexibilityIcon className='icon-50-30' />
                            <p className="feature-card__title">{t.features[2].title}</p>
                            <p className="feature-card__desc">{t.features[2].desc}</p>
                        </article>
                    </div>



                </FadeInWhenVisible>
                <div className="flex flex-col gap-4 mobile-bottom">
                    <article className="hero-feature-card left-grid  border-b border-[var(--border-gray)] bottom-grid">
                        <Kickoff className='icon-50-30' />
                        <p className="feature-card__title">{t.features[0].title}</p>
                        <p className="feature-card__desc">{t.features[0].desc}</p>
                    </article >

                    <article className="hero-feature-card left-grid  border-b border-[var(--border-gray)] bottom-grid">
                        <PricingIcon className='icon-50-30' />
                        <p className="feature-card__title">{t.features[1].title}</p>
                        <p className="feature-card__desc">{t.features[1].desc}</p>
                    </article >

                    <article className="hero-feature-card left-grid  border-b border-[var(--border-gray)] bottom-grid">
                        <FlexibilityIcon className='icon-50-30' />
                        <p className="feature-card__title">{t.features[2].title}</p>
                        <p className="feature-card__desc">{t.features[2].desc}</p>
                    </article>
                </div>
            </main>
        </section>
    )
}