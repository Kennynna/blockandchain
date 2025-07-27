import { FlexibilityIcon } from "../assets/icons/Flexibility";
import { Kickoff } from "../assets/icons/Kickoff";
import { PricingIcon } from "../assets/icons/Pricing";
import Container from "./Container";
import { FadeInWhenVisible } from './FadeInWhenVisible';


export function Hero() {
    return (
        <section className="section-hero ">
            <div>
                <Container className='hero-title-block'>
                    <h2>Solving your problems starts here</h2>
                    <h1 className="title">BlockAndChain innovative technology company</h1>
                    <p>We develop our own products and offer services to businesses, providing efficient solutions tailored to their needs.</p>
                </Container>
            </div>
            <main className="relative">

                <FadeInWhenVisible delay={0.1}>

                    <div className='hero-flex-block relative container hero-flex-block-top '>
                        <div className="absolute bg-red-100 top-[170px] horizontal-line h-[0.5px] w-full " />
                        <article className="hero-feature-card top-grid">
                            <p className="hero-flex-block-statistic">3<span className="plus text-[#FFD11A]">+</span> </p>
                            <p className="hero-flex-block__desc">Satisfied clients</p>
                        </article>
                        <div className="hero-feature-card flex items-center w-full justify-center ">
                            <div className="line">

                            </div>
                        </div>
                        <article className="hero-feature-card top-grid left-grid">
                            <p className="hero-flex-block-statistic">19k<span className="plus text-[#FFD11A]">+</span>  </p>
                            <p className="hero-flex-block__desc"> Users of our solutions</p>
                        </article>
                        <div className="hero-feature-card flex items-center w-full justify-center ">
                            <div className="line ">

                            </div>
                        </div>
                        <article className="hero-feature-card top-grid left-grid">
                            <p className="hero-flex-block-statistic">2<span className="plus text-[#FFD11A]">+</span>  </p>
                            <p className="hero-flex-block__desc">Tech Experts</p>
                        </article>





                        <article className="hero-feature-card bottom-cards">
                            <Kickoff className='icon-50-30' />
                            <p className="feature-card__title">Kickoff in 2 Weeks</p>
                            <p className="feature-card__desc">Blazingly fast team assembly and project start, scaling teams 50% faster than the industry average</p>
                        </article >
                        <div className="hero-feature-card flex items-center w-full justify-center ">
                            <div className="line ">

                            </div>
                        </div>
                        <article className="hero-feature-card left-grid bottom-cards">
                            <PricingIcon className='icon-50-30' />
                            <p className="feature-card__title">Transparent Pricing</p>
                            <p className="feature-card__desc">All-inclusive costs and a dedicated Engineering Manager free of charge</p>
                        </article >
                        <div className="hero-feature-card flex items-center w-full justify-center ">
                            <div className="line ">

                            </div>
                        </div>

                        <article className="hero-feature-card left-grid bottom-cards">
                            <FlexibilityIcon className='icon-50-30' />
                            <p className="feature-card__title">Team Flexibility</p>
                            <p className="feature-card__desc">From a single consultant to augment your team to a fully managed cross-functional software development team</p>
                        </article>
                    </div>



                </FadeInWhenVisible>
                <div className="flex flex-col gap-4 mobile-bottom">
                    <article className="hero-feature-card left-grid  border-b border-[var(--border-gray)] bottom-grid">
                        <Kickoff className='icon-50-30' />
                        <p className="feature-card__title">Kickoff in 2 Weeks</p>
                        <p className="feature-card__desc">Blazingly fast team assembly and project start, scaling teams 50% faster than the industry average</p>
                    </article >

                    <article className="hero-feature-card left-grid  border-b border-[var(--border-gray)] bottom-grid">
                        <PricingIcon className='icon-50-30' />
                        <p className="feature-card__title">Transparent Pricing</p>
                        <p className="feature-card__desc">All-inclusive costs and a dedicated Engineering Manager free of charge</p>
                    </article >

                    <article className="hero-feature-card left-grid  border-b border-[var(--border-gray)] bottom-grid">
                        <FlexibilityIcon className='icon-50-30' />
                        <p className="feature-card__title">Team Flexibility</p>
                        <p className="feature-card__desc">From a single consultant to augment your team to a fully managed cross-functional software development team</p>
                    </article>
                </div>
            </main>
        </section>
    )
}