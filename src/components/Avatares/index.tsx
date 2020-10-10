import Avatar1 from './Avatar1'
import Avatar2 from './Avatar2'
import Avatar3 from './Avatar3'
import Avatar4 from './Avatar4'
import Avatar5 from './Avatar5'
import { Container } from './styles'

const Avatars: React.FC = () => {
  return (
    <Container>
      <Avatar1 />
      <Avatar2 />
      <Avatar3 />
      <Avatar4 />
      <Avatar5 />
      <Avatar1 />
      <Avatar2 />
      <Avatar3 />
      <Avatar4 />
      <Avatar5 />
    </Container>
  )
}

export default Avatars
