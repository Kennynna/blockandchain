import Container from "../Container"

export const Title = ({title, desc}) => {
  return (
    <Container className='section-title'>
      <p>{desc}</p>
      
      <h1>{title}</h1>
    </Container>
  )
}