import "./App.css";
import Nav from "./components/UI/Nav";
import Logo from "./components/Nav/Logo";
import NavItems from "./components/Nav/NavItems";

const App = () => {
  return (
    <Nav>
      <Logo />
      <NavItems />
    </Nav>
  );
};

export default App;
