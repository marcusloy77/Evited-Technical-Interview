import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Create from './components/Create'
import Event from './components/Event'
import './styles/App.css';
import './styles/Buttons.css'

import { AiFillMail } from 'react-icons/ai'
import Button from 'react-bootstrap/Button' 
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

import landingImage from './assets/LandingPageImage.svg'



function App() {

  const [eventDetails, setEventDetails] = useState({title: null, hostName: null, date: null, timeStart: null, timeEnd : null, photo: null})

  const navigate = useNavigate()

  const createPage = (event) => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    setEventDetails(data)
    navigate('/event')
  }
  const createEvent = () => {
    navigate('/create')
  }


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home createEvent={createEvent} Button={Button} Link={Link} landingImage={landingImage}/>}></Route>

        <Route path='/create' element={<Create createPage={createPage}/>}></Route>

        <Route path='/event' element={<Event eventDetails={eventDetails}/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
