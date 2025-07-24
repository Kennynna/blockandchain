import Container from "../Container"

export const Title = ({title, desc}) => {
  return (
    <Container className='section-title'>
      <span>{desc}</span>
      
      <h1>{title}</h1>
    </Container>
  )
}