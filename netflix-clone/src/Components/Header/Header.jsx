import React from 'react'
import './Header.css'
import netflixlogo from '../../Assets/Images/netflix-logo.png'
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Header = () => {
  return (
    <div className='header_outer_container'>
        <div className="header_container">
            <div className="header_left">
                <img src={netflixlogo} alt="" />
                <ul>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Language</li>
                </ul>
            </div>
            <div className="header_right">
                <ul>
                    <li><CiSearch /></li>
                    <li><IoIosNotifications /></li>
                    <li><CgProfile /></li>
                    <li><IoMdArrowDropdownCircle /></li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Header
