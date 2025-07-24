import Container from "./Container"
import { Title } from "./ui/Title"

export const Technology = () => {
  return (
    <section className="technology-title">
      <Title title='Next-level Technology Consulting' desc={`Unlock efficiency, innovation, and security with BlockAndChain' s expert services in technology consulting `} />

      <main className="technology-main">
        <Container className='features-block flex items-center justify-between'>

        </Container>
      </main>
    </section>

  )
}
