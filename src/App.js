import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './app.css';
import Header from './components/Header';
import Particles from 'react-particles-js';

function App() {
  return (
    <div>
      <Particles
      className='particles-canvas'
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 5,
                color: "white"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </div>
  )
}

export default App
