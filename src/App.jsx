import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ProgressBar } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import "./app.css"
import { Typewriter } from 'react-simple-typewriter'





function App() {
  const [show,setShow] = useState("social-media notshow")

  useEffect(()=>{
    setTimeout(()=>{
      setShow("social-media show")
    },11000)
  })
  return (
        <div className="App deneme">
           <h1 className="text-success">
             <Typewriter words={['<ogzhner>', 'Hello, welcome to my personal Website', 'I am a frontend developer', '</ogzhner>']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1000} />
           </h1>
           <div className={show}>
           <a href="https://www.facebook.com/OgzhnER"target="_blank"> <img src=".\images\icons8-facebook.svg" alt="" /></a>
           <a href="https://www.instagram.com/ogzhner/"target="_blank"> <img src="images\icons8-instagram.svg" alt="" /></a>
          <a href="https://www.linkedin.com/in/ogzhner/"target="_blank">  <img src="images\icons8-linkedin.svg" alt="" /></a>
           </div>
        </div>
    );
}

export default App;