import Navbar from "./components/Navbar";
import About from "./components/About";
import Header from "./components/Header";
import Credentials from "./components/Credentials";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Credentials/>
      <Skills/>
      <Projects/>      
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
