import React from 'react'
import { Link,} from 'react-router-dom'
import Carousel from './slider/Carousel';
import { IconName } from "react-icons/fa";
import { BsInstagram } from 'react-icons/bs'
import {ImFacebook2} from 'react-icons/im'
import {TfiYoutube} from 'react-icons/tfi'
import {FiTwitter} from 'react-icons/fi'
import {TfiLocationPin} from 'react-icons/tfi'
import {TfiEmail} from 'react-icons/tfi'
import {BsTelephoneFill} from 'react-icons/bs'
import Card from 'react-bootstrap/Card';
import img1 from '../assests/playgrong.jpg'

const Home = () => {
 
  return (
    <div>
       <Carousel/>
              <div className='home_container_2'>
                  <div className='home_container_2_div'>
                   <h2 className='home_school_text'>Tuition World</h2>
                   <h3 className='home_school_text_2'>We are committed to taking education to every single door, making it<br></br> 
                   a superb blend of knowledge and job-specific. Our mission is to create <br></br>
                   ethical and intellectual personnel through qualitative education. Today,<br></br>
                    TUITION WORLD is located at Dilsukhnagar, Hyderabad, Telangana. And, <br></br>
                    we are looking forward to spreading our efficiency at every nook and <br></br>
                    corner of India. We are the player with diverse courses, teaching <br></br>
                    methodology, efficient faculty team, and effective management staff.<br></br>
                   Choose to contact or reach us for an assured advanced career. <br></br>
                   Tuition World is a premium tutoring company where expert home tuitions<br></br>
                    and online tuitions are provided with experienced tutors across India,<br></br> 
                    United States, United Kingdom, Australia, Canada, Dubai, Africa, etc. <br></br>
                    We provide tuitions especially on all entrance examinations like IIT, <br></br>
                    JEE, NEET, EAMCET, GATE, GRE, etc.
                    </h3>
                   </div>
                   <div className='img_div'>
                    <img src='https://thumbs.dreamstime.com/b/beautiful-school-building-off-india-
                    indian-private-looking-play-ground-very-nice-movement-209691243.jpg'
                    className='side_img'
                    />
                   </div>
              </div>
              <div className='card_parent'>
                  <Card style={{width:'1200px',height:'420px', marginTop:'20px', marginLeft:'50px', boxShadow:'#a4a7a7 5px 3px 8px 4px inset'}}>
                      <h1 style={{float:'left', marginLeft:'260px', marginTop:'30px', fontFamily:'cursive'}}>About</h1>
                      <img src='library.jpg' style={{float:'left',marginLeft:'-290px', width:'500px', 
                      marginTop:'90px', height:'300px', borderRadius:'10px'}}/>
                      <div className='home_about_text_container'>
                      <h3>Our schools play a vital role in shaping the minds of young<br></br> individuals and
                           preparing them for the challenges and <br></br>opportunities of life, Our students go to learn various academic
                           <br></br> subjectsand skills that areessential for their personaland <br></br>professional growth,
                           Our School also provide additional<br></br> resources,servicesto support students, such as counseling,<br></br>
                           tutoring and education programs, Our students typically attend<br></br> classes taught by teachers,participate in extracurricular activities,<br></br> 
                            and interactwith their peers to gain knowledge and developtheir <br></br> social skills</h3>
                      </div>
                      <div className='home_about_btn_container'>
                      <button 
                      onClick={ ()=> window.location='/about'}
                      className='home_about_btn'>View More</button>
                      </div>
                  </Card>
              </div>
              <div className='home_admission_container'>
        
                      <h1 style={{float:'Right', marginRight:'200px', marginTop:'30px', fontFamily:'cursive'}}>Admissions</h1>
                      <img src='library.jpg' style={{float:'Right',marginRight:'-280px', width:'500px', 
                      marginTop:'90px', height:'300px', borderRadius:'10px'}}/>
                      <div className='home_admission_text_container'>
                        <h3>Our school is Providing an admissions from offline and online also,<br>
                        </br> if any time you needs admission just fiil the admission form.<br></br>
                        Then management will contat you as soon as possible for disscussion<br></br>
                         about the admissions. Our school offers students who are intrested, 
                         <br></br>we will reduce the admission fee.</h3>
                      </div>
                      <div className='home_admission_btn_container'>
                      <button 
                      onClick={ ()=> window.location='/admissions'}
                      className='home_admission_btn'>Admission Form</button>
                      </div>
                  
              </div>
              <div className='home_facility_container'>
                <Card style={{width:'1200px',height:'420px', marginTop:'20px', marginLeft:'50px', boxShadow:'#a4a7a7 5px 3px 8px 4px inset'}}>
                  <h1 style={{fontFamily:'cursive', float:'left', marginLeft:'220px', marginTop:'40px'}}>Facilities</h1>
                  <img src={img1} style={{width:'450px',height:'300px', float:'left', marginLeft:'-300px', marginTop:'100px', borderRadius:'10px'}}/>
                  <div className='home_facility_text_container'>
                      <h3>Our schools play a vital role in shaping the minds of young<br></br> individuals and
                           preparing them for the challenges and <br></br>opportunities of life, Our students go to learn various academic
                           <br></br> subjectsand skills that areessential for their personaland <br></br>professional growth,
                           Our School also provide additional<br></br> resources,servicesto support students, such as counseling,<br></br>
                           tutoring and education programs, Our students typically attend<br></br> classes taught by teachers,participate in extracurricular activities,<br></br> 
                            and interactwith their peers to gain knowledge and developtheir <br></br> social skills</h3>
                      </div>
                      <div className='home_facility_btn_container'>
                      <button 
                      onClick={ ()=> window.location='/facilities'}
                      className='home_facility_btn'>View More</button>
                      </div>
                </Card>
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
    
  );
}

export default Home

