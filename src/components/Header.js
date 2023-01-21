import React from 'react'
import { Link } from 'react-router-dom';

export default function Header(props) {
    var data = props.data;
  return (
    <>
      <header className=''>
        <div className="container">
          <div className="site-title-block">
            <Link to="/" >
              <h1 className="site-title">{data.setting?.name ?? ""}</h1>
            </Link>
          </div>
          <div id="site_header" className="site-nav">
            <ul id="nav" className="site-main-menu site-auto-menu">
              <li><Link to="/" className="pt-trigger">Home</Link></li>
              <li><Link to="resume" className="pt-trigger">Resume</Link></li>
              <li><Link to="services" className="pt-trigger">Services</Link></li>
              <li><Link to="portfolio" className="pt-trigger">Portfolio</Link></li>
              <li><Link to="contact" className="pt-trigger">Contact</Link></li>
            </ul>          
          </div>
        </div>
        
      </header>   
      
      
    </>
      
      
  )
}
