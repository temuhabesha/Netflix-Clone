import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_icons">
      <FaYoutube />
      <FaInstagram />
      <FaFacebook />
      <CiTwitter />
      </div>
      <ul>
        <li>Audio Discription</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Term of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cooki Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright_text">&copy; 1997-2023 Netflix,Inc.</p>
    </div>
  )
}

export default Footer
