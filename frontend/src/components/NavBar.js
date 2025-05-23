import React from 'react'
import "../components_css/NavBar.css"
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo_jpg_herbi_cure from "../assets/logo_jpg_herbi_cure.png" //importing logo



export const NavBar = () => {
  return (
    <div  className='NavBar_Container'>
        <div className='left_nav_content'>
           <Link to = "/">
            <img src= {logo_jpg_herbi_cure} alt='lama-img' />
           </Link>

            <Link to= "/About">Blog</Link>
           <a href='https://github.com/Gosling-dude/HerbiGPT---Your-Holistic-Wellness-Guide/blob/main/README.md'> Readme</a>
            <a href='https://github.com/Gosling-dude/HerbiGPT---Your-Holistic-Wellness-Guide.git'>Github</a>
        </div>
        <div className='right_nav_content'>

            <div className='search_bar'>
            <div className='search_icon' > <IoIosSearch/></div>
            <input placeholder= ' Search Models '/>
            </div>

            <div className='right_nav_links'>
            <a href='https://github.com/Gosling-dude'>Models</a>
            <a href='https://github.com/Gosling-dude'> Sign in</a>
            <a href='https://github.com/Gosling-dude'><button>Downloads</button></a>
            </div>
        </div>
    </div>
  )
}
