import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Header from "./components/Header";
import Credentials from "./components/Credentials";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToProjects from "./components/ScrollToProjects";

const App = () => {
  return (
    <BrowserRouter basename="/eswar-portfolio">
      <ScrollToProjects/>
      
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
            <Header />
            <About />
            <Credentials />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
