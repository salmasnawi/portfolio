import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Timeline from './components/Timeline';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="home" className="section"><Hero/></section>
     <section id="about" className="section"><About/></section>
        <Timeline/>


        <section id="projects" className="section"><Portfolio/></section>
        <section id="skills" className="section"><Services/></section>
        <section id="contact" className="section"><Contact/></section>
      </main>

    </div>
  );
}

export default App;
