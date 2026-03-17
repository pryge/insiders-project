import './assets/styles/App.css';
import Hero from './components/layout/Hero/Hero';
import Features from './components/layout/Features/Features';
import Partners from './components/layout/Partners/Partners';

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
