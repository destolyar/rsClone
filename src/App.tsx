import React from 'react';
import { Resorts } from './components/resorts/Resorts';
import { Footer } from './components/commonComponents/Footer';
import { Navbar } from './components/commonComponents/Navbar';

import './app.scss'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Navbar/>
      <Resorts/>
      <Footer/>
    </div>
  );
}

export default App;
