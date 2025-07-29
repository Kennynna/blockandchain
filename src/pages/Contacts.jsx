import { EmailIcon } from "../assets/icons/email";
import { LocationIcon } from "../assets/icons/Location";
import Container from "../components/Container";
import { Footer } from "../components/Footer";

import { translations } from "../config/lang";
import { useLanguage } from "../context/LanguageContext";


export default function Contacts() {
  const { lang } = useLanguage();
  const notice = translations[lang]?.contacts?.legal_notice || translations.en.contacts.legal_notice;
  const t = translations[lang].contactUs;
  return (
    <section className="flex flex-col section-contacts">
      <Container className='flex-1 flex flex-col min-h-screen'>
        <main>
          <div className="contact-title flex items-center gap-10 ">
            <h1>{t.title}</h1>
            <p>{t.desc}</p>
          </div>

          <div className="contact-img">
            <img src="/img/contact.webp" alt="Contact us" width={400} height={360} />
          </div>

          <div className="email-block flex items-center gap-6 mt-6">
            <div className="contacts-text-block">
              <EmailIcon className='contacts-icons max-w-max' />
              <p>{t.emailCard.title}</p>
              <h4>{t.emailCard.desc}</h4>
              <a href="mailto:info@blockandchain.xyz">{t.emailCard.email}</a>
            </div>
            <div className="contacts-text-block">
              <LocationIcon className='contacts-icons max-w-max' />
              <p>{t.address.title}</p>
              <h4>{t.address.desc}</h4>
              <a
                href="https://www.google.com/maps/place/Carrer+del+Puiet,+4,+AD300+Ordino,+%D0%90%D0%BD%D0%B4%D0%BE%D1%80%D1%80%D0%B0/@42.5557844,1.5335851,17z/data=!3m1!4b1!4m6!3m5!1s0x12af60141b98e573:0xecf319d08934dc92!8m2!3d42.5557805!4d1.53616!16s%2Fg%2F11vywtwdhq?entry=tts&g_ep=EgoyMDI1MDcxNi4wIPu8ASoASAFQAw%3D%3D&skid=289305c1-c348-4f04-9c72-5c61f30793fc"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white"
              >
                {t.address.link}
              </a>
            </div>
          </div>
        </main>

        <div className="contacts-info-footer">
          {notice.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </Container>
      <Footer />
    </section>
  );
}
