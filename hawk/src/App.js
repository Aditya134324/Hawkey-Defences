import './App.css';
import { useEffect } from 'react';
import Navigation from './components/navigation/navigation';
import PageHero from './components/mainpagehero/pagehero';
import Lineseperat from './components/lineseperat/lineseperat';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show ');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <video className="myVideo" muted autoPlay loop playsInline>
        <source src={require('./video.mp4')} type="video/mp4" />
      </video>

      <Navigation />  
      <PageHero />     
      <Lineseperat />  
    </div>
  );
}

export default App;
