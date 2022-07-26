import './App.css';
import React,{useState} from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Routepaths} from './components/Routes';


const App=() =>{
  const [darkTheme,setDarkTheme]=useState(false);
  return (
    <div className={darkTheme ? 'dark':''}>
      <div className='App bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routepaths/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
