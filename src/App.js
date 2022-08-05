
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Stacks from './components/Stacks';

function App() {
  return (
    <div className='scroll_snap_type'>
      <Header />
      <Hero />
      <About />
      <Stacks />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
