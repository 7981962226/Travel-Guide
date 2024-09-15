
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css'
import MainPage from './travelfolder/pages/MainPage'
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100, 
    });
  }, []);

  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
