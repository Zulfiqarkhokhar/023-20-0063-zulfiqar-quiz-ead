import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Project from "./components/Projects";
import Discover from "./components/Discover";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Project />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
