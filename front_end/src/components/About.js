import React from 'react'
// import Carousel from './slider/Carousel'
import { IconName } from "react-icons/fa";
import { BsInstagram } from 'react-icons/bs'
import {ImFacebook2} from 'react-icons/im'
import {TfiYoutube} from 'react-icons/tfi'
import {FiTwitter} from 'react-icons/fi'
import {TfiLocationPin} from 'react-icons/tfi'
import {TfiEmail} from 'react-icons/tfi'
import {BsTelephoneFill} from 'react-icons/bs'

function About() {
  return (
    <div>
       <div>
       <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop:'50px'}}
      >
        <div style={{flex: 0.1, height: '2px', backgroundColor: '#2596be', width:'10px', marginLeft:"550px"}} />

        <div>
          <p style={{width: '90px', textAlign: 'center', color:"#2596be"}}>ABOUT US</p>
        </div>

        <div style={{flex: 0.1, height: '2px', backgroundColor: '#2596be'}} />
      </div>
       </div>
       <div>
           <p className='about_text'>Introducing About Our School</p>
       </div>
       <div>
          <div>
            <img src='library.jpg' className='about_img'/>
          </div>
          <div>
            <div>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div>
                <p className='about_righttext'>LEARN ABOUT US</p>
                </div>
                <div style={{flex: 1.5, height: '1px', backgroundColor: 'black', marginTop:'60px', marginLeft:'-500px', marginRight:'440px'}} /> 
              </div>
            </div>  
             <p className='about_righttext1'>Best School For Your Kids</p>
             <p className='about_righttext2'>Our schools play a vital role in shaping the minds of young individuals </p>
             <p className='about_righttext3'>and preparing them for the challenges and opportunities of life.</p>
             <p className='about_righttext4'>Our students go to learn various academic subjects</p>
             <p className='about_righttext5'>and skills that areessential for their personal </p>
             <p className='about_righttext6'>and professional growth</p>
             <p className='about_righttext7'>Our students typically attend classes taught by teachers,</p>
             <p className='about_righttext8'>participate in extracurricular activities, and interact </p>
             <p className='about_righttext9'>with their peers to gain knowledge and develop </p>
             <p className='about_righttext10'>their social skills.</p>
             <p className='about_righttext11'>Our School also provide additional resources, services </p>
             <p className='about_righttext12'>to support students, such as counseling,</p>
             <p className='about_righttext13'>tutoring and education programs.</p>
          </div>
          </div>
              <div>
                    <footer className='footer_div'>
                       {/* <div><h3 className='footer_logo'>School Logo</h3></div> */}
                       <div><h1 className='footer_school_name'>Tuition World</h1></div>
                       <div><h5 className='footer_final_text'>@ 2020 Our school All Rights Reserved</h5></div>
                       <div>
                        <h2 className='footer-middle_text1'>Get In Touch</h2>
                        <div className='location_icon'><TfiLocationPin/></div>
                        <h4 className='address_text'>Address</h4>
                        <p className='address_text1'>Banjara hills Hyderabad</p>
                         <div className='email_icon'><TfiEmail/></div> 
                         <h4 className='email_text'>Email</h4>
                         <p className='email_text1'>info@example.com</p>
                         <div className='telephone_icon'><BsTelephoneFill/></div>
                         <h4 className='telephone_text'>Telephone</h4>
                         <p className='telephont_text1'>040 345 67890</p>
                       </div>
                       <div><h3 className='footer_right_text_1'>About Our School</h3></div>
                       <div><p className='footer_right_text_2'>we offer Courses, Video lecturing classes</p></div>
                       <div>
                       <h3 className='text_connectwithus'>Connect with us</h3>
                       </div>
                          <button 
                          className='facebook_icon'
                          onClick={() => window.open('https://www.instagram.com/tuition_world_india/?hl=en')}>
                            <ImFacebook2/>
                            </button>
                       
                        <button 
                        className='instagram_icon'
                        onClick={() => window.open('https://www.instagram.com/tuition_world_india/?hl=en')}>
                          <BsInstagram/>
                          </button>
                       
                        <div 
                        className='youtube_icon'>
                          <button
                          onClick={() => window.open('https://www.instagram.com/tuition_world_india/?hl=en')}>
                            <TfiYoutube/>
                            </button>
                        </div>
                        <div
                         className='twitter_icon'>
                          <button
                          onClick={() => window.open('https://www.instagram.com/tuition_world_india/?hl=en')}>
                            <FiTwitter/>
                            </button>
                            </div>
                    </footer>
              </div>
    </div>
  )
}

export default About

