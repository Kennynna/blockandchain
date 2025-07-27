import { Footer } from '../components/Footer';
import Container from "../components/Container";
import Nav from "../components/Nav";
import { Cookie } from '../components/Cookie';

export default function Conditions() {
  return (
  <div className="conditions">

  <Nav/>
  <section className="conditions-section ">
      <Container >
      <div className="conditions-title">
          <h1>Terms of Use</h1>
          <p>Last update: 07.28.2025</p>
      </div>

      <div className="terms--block">
        <p className="terms__title">By using this website, you agree to the following:</p>
          <ol class="terms__list">
            <li>You will not use the site or its content in an unlawful, harmful, or abusive manner.</li>
            <li>All content is the property of BLOCKANDANDCHAIN CH58 unless otherwise noted.</li>
            <li>We do not guarantee uninterrupted availability of the site.</li>
            <li>We are not liable for any damages arising from the use of this site.</li>
            <li>Any disputes shall be resolved under the jurisdiction of Andorran law.</li>
          </ol>
      </div>

      </Container>
    </section>

    <Footer/>
<Cookie/>
  </div>

  )}