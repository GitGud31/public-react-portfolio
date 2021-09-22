import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import Services from './components/services';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
