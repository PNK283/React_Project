import React from 'react'

import { MdDone} from "react-icons/md";
 const Admissions = () => {
  return (
    <div>

    
      <span className='admhd1'>ADMISSION FORM</span><br></br>
      <h1 class="admhd2">Book A Seat For Your Kid</h1><br></br>
      <p className='para1'> Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo<br></br>
                  dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.<br></br>
                   Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum estdolor
      </p>
      <div>
      <ul className='points' >
      <li className='tickmark'> <span className='done'>< MdDone/> </span> Labore eos amet dolor amet diam </li>
      <li className='tickmark'>  <span className='done2'>< MdDone/></span>Etsea et sit dolor amet ipsum</li>
      <li className='tickmark'> <span className='done3'>< MdDone/> </span>Diam dolor diam elitripsum vero. </li>
      
     </ul>
      </div>
    
     
    

      <card className='card'>
        <div className='cardheadline'><h2> Admission Form</h2></div><br></br>
        <div className='cardbody'>
      
     <input type="text" class="name" placeholder="Your Name" id="name"></input><br></br>
     <input type="text" class="email" placeholder="Your Email" id="email"></input><br></br>
     <input type="text" class="number" placeholder="Your valid 10-digit phone number" id="number"></input><br></br>
     <input type="text" class="subject" placeholder="subject" id="subject"></input><br></br>
     <textarea className='textarea'>message</textarea>
     
     <input  className="booknow" value="Book now" name="button"></input>
     
     
    
                                        
        </div>

      </card>
    
    </div>
  )
}
export default Admissions;
