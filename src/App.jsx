import "./App.scss";
import Home from "./Components/Home/Home";
import NavBar from "./Components/Navbar/NavBar";
import Middle from "./Components/Middle/Middle";
import Destinations from "./Components/Destinations/Destinations";
import Portfolio from "./Components/Portfolio/Portfolio";
import Questions from "./Components/Questions/Questions";
import Reviews from "./Components/Reviews/Reviews";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";
import Scroll from "./Components/Layout/Scroll";

function App() {
  return (
    <>
      <Scroll>
        <NavBar />
        <Home />
        <Middle />
        <Destinations />
        <Portfolio />
        <Reviews />
        <Questions />
        <Subscribe />
        <Footer />
      </Scroll>
    </>
  );
}

export default App;
