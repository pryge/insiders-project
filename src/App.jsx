import './assets/styles/App.css';
import Hero from './components/sections/Hero/Hero';
import Features from './components/sections/Features/Features';
import Partners from './components/sections/Partners/Partners';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Features />
      <Partners />
    </div>
  );
}

export default App;
