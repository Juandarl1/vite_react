// import { useState } from 'react'

import Cleaning from './assets/Cleaning.jpg'
import Services from './assets/Services.jpg'
import kitchen from './assets/Kitchen.jpg'
import Backyard from './assets/Backyard.jpg'
import family from './assets/Family.jpg'
import Bathroom from './assets/Bathroom.jpg'
import Header from '../components/header'
import Pattern from '../components/screen_load'


import './App.css'
import './screen_loading.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Pattern />
      <div className="App">
        <Header />

        <section className='section_About'>
          <div className='left_side'>
          Experienced, Responsible & <br /> 
            Honest with Good References. <br />
          </div>
          <section className='section_Services'>
            <div className='right_side'>
            <h1>Our Services</h1>
          <ul>
            <li>Cleaning the Living Room</li>
            <div className='section_Logo'>
             <img src={Cleaning}/>
             <img src={Cleaning} alt="Cleaning Logo" />
            <br/>
          </div>
            <li>Cleaning the Family Room</li>
            <div className='services_Logo'>
             <img src={family} alt="services Logo" />
             </div>
            <li>Cleaning Room</li>
              <div className='services_Logo'>
             <img src={Services} alt="services Logo" />
             </div>
            <li>Kitchen Cleaning</li>
              <div className='services_Logo'>
             <img src={kitchen} alt="services Logo" />
             </div>
            <li>Cleaning the Bathroom</li>
              <div className='bath_Logo'>
              <img src={Bathroom} alt="services Logo" />
             </div>
            <li>Backyard Cleaning</li>
              <div className='services_Logo'>
              <img src={Backyard} alt="services Logo" />
             </div>
          </ul>

        
          </div>

        </section>

        </section>

      </div>
    </>
  )
}

export default App
