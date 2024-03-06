import Header from "../component/Header";
import Container from "../component/Container";
import "./App.css";
import Buttonx from "../component/Buttonx";
import Card from "../component/Card";
import Hero from "../component/Hero";
import Student from "../component/Student";
import Product from "../component/Product";

function App() {
  return (
    <Container>
      <Header></Header>
      <Hero></Hero>
      <Student></Student>
      <Product></Product>
    </Container>
  );
}

export default App;
