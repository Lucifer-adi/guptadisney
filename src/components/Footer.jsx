import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div >
        <footer>
        <div className="wave">  
        </div>
        <ul className="social_icon">
               <li><a href="">About Disney+</a></li>
               <li><a href="">Terms of Use</a></li>
               <li><a href="">Privacy Policy</a></li>
               <li><a href="">Feedback</a></li>    
            </ul>
           
            <ul className="social_icon">
               <li ><a href="" className='soIcon' ><LinkedInIcon style={{ fontSize: '42px' }} /></a></li>
               <li ><a href=""><TwitterIcon className='soIcon' style={{ fontSize: '42px' }}  /></a></li>
               <li ><a href=""><InstagramIcon className='soIcon' style={{ fontSize: '42px' }} /></a></li>
               <li ><a href=""><GitHubIcon className='soIcon' style={{ fontSize: '42px' }} /></a></li>
               <li ><a href=""><EmailIcon className='soIcon' style={{ fontSize: '48px' }} /></a></li>
                
            </ul>

            <ul className='social_icon'>
            <p style={{color:"grey"}}>© 2023 Created by Aditya. All Rights Reserved.</p>
            </ul>
        </footer>
    </div>
  )
}

export default Footer