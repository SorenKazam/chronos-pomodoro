import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";

export function App() {
  console.log("Olá mundo");

  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        veniam magni recusandae ex voluptatibus voluptates consectetur corporis
        quae voluptatum quibusdam magnam, doloribus sed officiis minima deserunt
        dicta tenetur, ullam earum?
      </p>
    </>
  );
}
