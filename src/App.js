import './css/reset.css';
import Button from './components/Button';
import Header from './components/Header';

function Home() {
  return (
    <div>
      <Button>Clique Aqui!</Button>
      <Button.Outline>olá</Button.Outline>
      <Header>aa</Header>
    </div>
  );
}

export default Home;
