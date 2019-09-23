import React from 'react';
import './index.scss';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Nyheder from './components/Nyheder/Nyheder';
import Aktivte from './components/Aktiviteter/Aktivte';
import Outro from './components/Outro/Outro';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Intro />
        <Nyheder />
        <hr/>
        <Aktivte />
        <Outro />
      </div>
   
    </div>
  );
}

export default App;
