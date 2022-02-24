import React from 'react';
import { Resorts } from './components/resorts/Resorts';
import { Trips } from './components/trips/Trips';
import { Footer } from './components/commonComponents/Footer';
import { Navbar } from './components/commonComponents/Navbar';
import { Profile } from './components/profile/Profile';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './app.scss'



const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/resorts' element={<Resorts />}/>
          <Route path='/trips' element={<Trips />}/>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
