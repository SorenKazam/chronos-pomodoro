import "./styles/theme.css";
import "./styles/global.css";
import { Container, Logo, Menu } from "./components";
import CountDown from "./components/CountDown";
import DefaultInput from "./components/DefaultInput";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form action="#" className="form">
          <div className="formRow">
            <DefaultInput type="text" labelText="Meu campo" id="field" />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
