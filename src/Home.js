import React from 'react';
import './index.scss';
import Intro from './components/Intro/Intro';
import Nyheder from './components/Nyheder/Nyheder';
import Aktivte from './components/Aktiviteter/Aktivte';
import Outro from './components/Outro/Outro';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Intro />
        <Nyheder />
        <hr/>
        <Aktivte />
        <Outro />
        <Footer />
      </div>
    </div>
  );
}

export default App;