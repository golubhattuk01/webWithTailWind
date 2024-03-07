import "./App.css";
import Header from "../component/Header";
import Container from "../component/Container";
import Hero from "../component/Hero";
import Student from "../component/Student";
import Product from "../component/Product";
import Footer from "../component/Footer";
import Test from "../component/Test";
import TempCard from "../component/TempCard";

function App() {
  return (
    <Container>
      <Header></Header>
      <Hero></Hero>
      <Student></Student>
      <Test></Test>
      <TempCard></TempCard>
      <Product></Product>
      <Footer></Footer>
    </Container>
  );
}

export default App;
