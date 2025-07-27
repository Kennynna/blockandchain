import { translations } from "../config/lang";
import { useLanguage } from "../context/LanguageContext";
import Container from "../components/Container";

export default function Policy() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;
  const policy = t.policy;

  return (
    <article className="policy--block">
      <Container>
        <h1 className="policy__title">Privacy Policy</h1>
        <p className="policy__date">{policy.EffectiveDate}</p>

        <div className="policy--info">
          <h3>
            Entity: <span>{policy.Entity}</span>
          </h3>
          <h3>
            Address: <span>{policy.Address}</span>
          </h3>
          <h3>
            Contact: <span>{policy.Contact.email}</span>
            <br />
            <span>{policy.Contact.text}</span>
          </h3>
        </div>

        <div className="policy--list">
          {policy.list.map((item, i) => (
            <div key={i}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </article>
  );
}
