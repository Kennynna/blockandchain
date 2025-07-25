import Container from "../components/Container";
import { Footer } from "../components/Footer";

export default function Contacts() {
  return <section className="min-h-screen flex flex-col">
    <Container className='flex-1 flex flex-col'>
      <main>
        <h1>Contact us</h1>
        <p>Let's solve your challenge together—reach out, and we will be in touch shortly.</p>

        <div>
          <img src="/public/img/services-card.png" alt="" width={400} height={300} />
        </div>

        <div>
          icon
          <p>Email</p>
          <p>info@blockandchain.xyz</p>
        </div>
      </main>
    </Container>
    <Footer />
  </section>;
}