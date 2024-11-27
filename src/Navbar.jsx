import React from 'react'
import logo from './logo.svg'
import {FaBars} from 'react-icons/fa'
import {links,social} from './data'
import {useState,useRef} from 'react'
const Navbar = () => {
  const [showLinks,setShowLinks]=useState(false);
  const linksContainerRef=useRef(null);
  const linksRef=useRef(null);
  const linkStyles={
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px'
  }
  return <nav>
    <div className='main-container'>
      <div className='nav_header'>
        <img src={logo} alt='logo'/>
        <button className='hamburger-menu' onClick={()=>{
          setShowLinks(!showLinks);
        }}>
          <FaBars/>
        </button>
      </div>
     <div style={linkStyles} ref={linksContainerRef} className='links-container'>
        <ul ref={linksRef} className='links'>
          {links.map((link)=>{
            const {id,url,text}=link;
            return <li key={id} className='links'>
                <a href={url} className='text-p'>{text}</a>
            </li>
          })}
        </ul>
      </div>
   <ul className='social-link'>
        {social.map((soc)=>{
          const {id,url,icon}=soc;
          return <li key={id}>
           <a href={url} style={{color:'#49a6e9'}}>{icon}</a>
          </li>
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar