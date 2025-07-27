import Container from "../components/Container";


export default function Policy() {
  return (

    <article className="policy--block">
      <Container>
        <h1 className="policy__title">Privacy Policy </h1>
        <p className="policy__date">Effective Date: July 24, 2025</p>

        <div className="policy--info">
          <h3>Entity: <span>LOCKANDCHAIN CH58</span></h3>
          <h3>Address: <span>Carrer del Puiet, núm. 4-6, Bloc 2 Edifici Ordino Parc, 3r pis, Porta A, Ordino, Andorra</span></h3>
          <h3>Contact: <span>info@blockandchain.xyz</span><br /><span>info@blockandchain.xyz
            BLOCKANDCHAIN CH58 ("we", "our", "us") is committed to respecting and protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to that data.</span></h3>
        </div>

        <div className="policy--list">
          <h3>1. Data Collection</h3>
          <p> We do not collect any personal data automatically. We only process information voluntarily submitted via email or contact form (e.g. name, email address, message content).</p>
          <h3>2. No Cookies or Analytics</h3>
          <p>  We do not use cookies, web beacons, or third-party analytics on our website.</p>
          <h3>3. Hosting Location</h3>
          <p>  Our website is hosted outside the European Union. However, we operate in compliance with Andorran and applicable international privacy standards.</p>
          <h3>4. Data Use</h3>
          <p>  The personal information you provide is only used to respond to your inquiries or provide requested services. It is never sold, shared, or used for marketing purposes.</p>
          <h3>5. Data Security</h3>
          <p>  We implement technical and organizational measures to safeguard your data.</p>
          <h3>6. Your Rights</h3>
          <p>  You may request access, correction, or deletion of your personal data by contacting info@insolvent.capital.</p>
          <h3>7. Changes to this Policy</h3>
          <p>  We may update this Privacy Policy occasionally. We will notify users via the website if significant changes are made.</p>
        </div>
      </Container>
    </article>

  );
}
