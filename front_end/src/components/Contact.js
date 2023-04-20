import React from 'react'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import{FaRegAddressCard} from "react-icons/fa"


function Contact() {
  return (
    <div>
      <div>
        <h2 className='contactus'>Contact Us</h2>
        <div className='address-container'>
          <FaRegAddressCard/>
          <h4 className='mainheading-address'>Our Address:</h4>
          <h6 className='addressform'>FK Group of Companies ,Plot no:27,<br/>Rao & Raju Colony,Opp Park Hayath Hotel Lane,<br/>
           Venkat Nagar,Road no:2 Banjara Hills,<br/>Hyderabad,Telangana-500034</h6>
        </div>
        <div>
          <div className='email-container'>
            <BsFillEnvelopeFill/>
            <h4>Email:</h4>
            <h6>info@vezeza.co.in</h6>
        </div>
        <div className='email-container'>
            <BsFillTelephoneInboundFill/>
            <h4>Call Us:</h4>
            <h6>+91 7337326804</h6>
        </div>
        </div>
        {/*<div className='school-support-form'> /*This portion is just for contact form */
          <form>
            <h2>School Support Form</h2>
            <label>First Name </label><br/>
            <input type='text' name='First name' placeholder='Enter'/><br/>
            <label> Last Name </label><br/>
            <input type='text' name='Last name' placeholder='Enter'/><br/>
            <label>Email Id </label><br/>
            <input type='email' name='email' placeholder='Enter' /><br/>
            <label>Password </label><br/>
            <input type='Password' name='Password'  placeholder='Enter'/><br/>
            <label>Contact Number </label><br/>
            <input type='text'  placeholder='Enter'/><br/><br/>
          </form>
  </div>*/}


      </div>
      <div>
        <footer>
          <iframe className='imgcontactus' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7877628415613!2d78.42793943567094!3d17.42197010188453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96d55dc1e1bf%3A0x680f0d7544c61bcf!2sF.K.%20GROUP%20OF%20COMPANIES!5e0!3m2!1sen!2sin!4v1681732694108!5m2!1sen!2sin"></iframe>
        </footer>
      </div>

    </div>
  )
}

export default Contact


