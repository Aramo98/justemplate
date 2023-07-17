import React from 'react';
import About from './pageComponents/About';
import Home from './pageComponents/Home';
import Service from './pageComponents/Service';
import Contact from './pageComponents/Blog'
import NoPage from './pageComponents/NoPage';
import SignIn from './pageComponents/SignIn';
import Register from './pageComponents/Register'
import {FaHome,FaCog,FaBlog,FaHeart} from 'react-icons/fa';
import SearchBar from './SearchBar';
import Footer from './Footer';
import TimerBlock from './TimerBlock';
import './cssFile/Navbar.scss';
import './cssFile/Footer.scss'
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {useRef,useState,useEffect} from 'react';

import { FaBars,FaTimes,FaLockOpen,FaMoon,FaSun } from 'react-icons/fa';






function App() {
const [theme,setTheme] = useState(true)



  const navRef = useRef();

  const showNavbar = ()=>{
    navRef.current.classList.add("responsive_navbar")
  }
  const HideNavbar = ()=>{
    navRef.current.classList.remove("responsive_navbar")
  }

  useEffect(()=>{
    if (theme === true) {
      document.querySelector("header").style.backgroundColor="gray"
            document.querySelector("header").style.color="white"
      document.querySelector("footer").style.backgroundColor="gray"
    }else{
      document.querySelector("header").style.backgroundColor="white"
      document.querySelector("header").style.color="black"
      document.querySelector("footer").style.backgroundColor="white"
    }
  })

  return (
<>
<header >

  <div className='NavbarBlock' >
  <ul>
    <li><a href="/"><FaHome/>Home</a ></li>
    <li><a href="/about"  ><FaHeart/>About</a ></li>
    <li><a href="/service"  ><FaCog/>Service</a ></li>
    <li><a href="/contact" ><FaBlog/>Blog</a ></li>
</ul>
  </div>


  <div className='toggle' onClick={showNavbar}><FaBars /></div>
  <SearchBar />
<div className="signInUpButtonBlock">
  <a href="/signin"><FaLockOpen/>Sign in</a>

</div>

<TimerBlock />
</header>
<div className='NavigationBar'>
<div className='toggleClose' onClick={HideNavbar}><FaTimes /></div>
<li><a href="/"><FaHome/>Home</a ></li>
    <li><a href="/about"  ><FaHeart/>About</a ></li>
    <li><a href="/service"  ><FaCog/>Service</a ></li>
    <li><a href="/contact" ><FaBlog/>Blog</a ></li>
</div>
<div className="container">

  <button className='ThemeButton' onClick={()=>setTheme(!theme)}>{ theme ? <FaSun style={{color:"#f5d715"}}/>:<FaMoon style={{color:"blue"}}/>}</button>
<Router>
      <Routes>
         <Route exact path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/service' element={< Service />} />
         <Route path='/contact' element={< Contact />}/>
         <Route path='/signin' element={< SignIn />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='*' element={<NoPage />}></Route>
        </Routes>
      </Router>
</div>
<footer>
< Footer/>
</footer>
</>
  );
}



export default App;
