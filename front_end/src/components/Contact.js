import React from 'react'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import{FaAddressBook} from 'react-icons/fa'
import{AiOutlineFileSearch} from 'react-icons/ai'


function Contact() {
  return (
    <div>
      <div>
        <h2>Contact Us</h2>
        <div className='card'>
            {/*<img src='vezeza logo.jpg'/>*/}
            <FaAddressBook/>
            <h4 className='textstyle'>Contact Form</h4>
            <p className='text-container'>Plot No: 27, Raju Colony,<br/>Oppp.Park Hyatt Hotel Lane,<br/>Banjara Hills<br/>HYDERABAD,<br/>Telangana - 500034<br/>For Admissions: 733 732 6804 - 806/807<br/>Web/App Support: 770 228 8603</p>
            <BsFillEnvelopeFill/>
            <h5 className='textstyle'>Email Id</h5>
            <p>tuitionworld.co.in</p>
            <BsFillTelephoneInboundFill/>
            <h5 className='textstyle'>Call</h5>
            <p>733 732 6804 - 806/807</p>
        </div>
        <div className='background-container'>
          <form>
            <AiOutlineFileSearch/>
            <h3 className='textstyle'>Enquire Now</h3><br/>
            <div className='form1'>
              <input type="text" className="form2" placeholder="Your Name" required="required"></input><br/><br/>
            </div>
            <div className='form1'>
              <input type="email" className="form2" placeholder="Your Email" required="required"></input><br/><br/>
            </div>
            <div className='form1'>
              <input type="tel" className="form2" placeholder="Your Phone Number" required="required"></input><br/><br/>
            </div>
            <div>
              <button type="submit" className='button-form3 button-form'>Submit Now</button><br/>
            </div>
          </form>
        </div>
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
