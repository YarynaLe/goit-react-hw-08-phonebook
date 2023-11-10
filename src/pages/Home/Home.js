import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Container, Title, TitleWrap } from 'pages/Home/Home.styled';

export default function Home() {
  return (
    <Container>
      <TitleWrap>
        <BsFillPersonLinesFill size={150} color={'#83748b'} />
        <Title>PHONEBOOK</Title>
      </TitleWrap>
    </Container>
  );
}