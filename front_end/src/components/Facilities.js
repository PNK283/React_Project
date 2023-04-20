import React from 'react'
import { Card } from 'antd'
import img1 from '../assests/facilities2.PNG'
import img2 from '../assests/transport.jpg'
import img3 from '../assests/library.jpg'
import img4 from '../assests/sports.jpg'
import img5 from '../assests/labs.jpg'
import img6 from '../assests/hostel.jpg'

export const Facilities = () => {
  return (
    <div>
         <img  className='facilityimg'  src={img1} ></img>
                              
                               


          <div class="bg">
          <p class="prg">
          WE CONTINUALLY STRIVE TO PROVIDE THE BEST FACILITIES TO OUR<br/> STUDENTS. WITH OUR ROBUST OFFERINGS, WE COVER ALL ASPECTS THAT<br/> CAN HELP MAKE STUDENT'S LIFE COMFORTABLE AND PRODUCTIVE.

     </p><br/>
     </div>
    
         <div className='texttransport'>
        
            <span> <a href ="#T">Transport </a></span>
        <span>  <a href ="#L"> Library </a> </span>
         <span>  <a href ="#S">Sports </a></span>
         <span>   <a href ="#Lab">Labs </a> </span>
         <span><a href="#H">  Hostel </a></span>
 </div>
 <div>
<section  id='T'>
 <Card  className='transport'>
 <div>
 <h1>TRANSPORT</h1>
 <img  className=' logoimg'  src={img2} ></img>
  <p className='paratext'> We pay close attention to the travel safety of our students. With a fleet of buses with 40 seats each, we ensure every student gets <br/>comfortable seating during their journey. Our buses meet all the required government regulation standards and have well-trained <br/>drivers who take care of pick-ups and drops on the assigned routes. We also have bus attenders who look after the students <br/>and take care of seating arrangements.
</p>
</div>
</Card>
</section>

<section id='L' >

<Card  className='library'>

 <div>
 <h1>LIBRARY</h1>
 <img  className='logoimg'  src={img3} ></img>
 
  <p className='paratext'>Reading is to the mind, what exercise is to the body. Our libraries house an expansive collection of books that suit the reading levels of different age groups.

The in-house library also subscribes to leading national dailies and journals. We also have an audio and video collection that can be used to augment classroom learning.

</p>
</div>
</Card>
</section>

<section  id='S'>

<Card   className='Sports'>

 <div>
 <h1>SPORTS</h1>
 <img  className='logoimg'  src={img4} ></img>
  <p className='paratext'>All work and no play makes Jack a dull boy. At all our institutions, we encourage a healthy balance of work and play. Students are encouraged to experience the challenge and reward of sports through diverse programmes at the school level.

Our sports department is managed by qualified and competent instructors who design a sports curriculum that improves mental strength, concentration, physical conditioning and coordination, strategic and tactical planning and of course, teamwork.

We conduct an annual inter-branch sports meet, along with a variety of other activities like athletics, team games, and indoor games.


</p>
</div>
</Card>
</section>

<section  id='Lab'>
<Card  className='labs'>

<div>
<h1>LABS</h1>
<img  className='logoimg'  src={img5} ></img>

  
  <p className='paratext'>Our well-equipped labs are a testament to our belief in learning by doing. From practical experiments to other activities, these labs promote an activity-based approach to make learning more stimulating.

</p>
</div>
</Card>
</section>

<section id='H'>
<Card   className='Hostel'>

<div>
<h1>Hostel</h1>
<img  className='logoimg'  src={img6} ></img>
  
  <p className='paratext'>Our hostels are equipped with all the amenities necessary to offer students a comfortable and disciplined living and learning environment. From top-notch accommodation to experienced doctors, we prioritise every aspect that aids the kids in their holistic development journey.

</p>
</div>
</Card>
</section>
</div>
<footer className='footer'></footer>








    </div>
  )
}

export default Facilities;
