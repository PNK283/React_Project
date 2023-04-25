import React from 'react'
import {MdSportsCricket} from "react-icons/md";
import{MdLibraryMusic} from"react-icons/md";
import{GiPencilBrush} from"react-icons/gi";
import{MdOutlineEmojiTransportation} from"react-icons/md";
import{MdFoodBank} from"react-icons/md";
import img1 from '../assests/transport.jpg'
import img2 from '../assests/playground.jpg'
import{GiSchoolBag} from"react-icons/gi";


const Facilities = () => {
  return (
    <div>
              <span className='facilityhd1'>FACILITIES</span><br></br>
      <h1 className='facilityhd2'>Facilites  For Your Kids</h1><br></br>
        <div className='gridcontainer'>
          <div className='content1'><h3 className='headline3'> <span className='icons'><MdSportsCricket/></span>Play Ground</h3>
            <p className='para2'>  Kasd labore kasd et dolor est rebum dolor ut, <br></br>clita dolor vero
               lorem amet elitr vero...
              </p>
               </div>
        <div className='content2'><h3  className='headline3'><span className='icons'><MdLibraryMusic/></span>Music and Dance</h3>
             <p className='para2'> Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
               lorem amet elitr vero...
                  </p></div>
        <div className='content3'><h3  className='headline3'><span className='icons'><GiPencilBrush/></span>Arts and Crafts</h3>
            <p className='para2'>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
               lorem amet elitr vero...
               </p></div>
        <div className='content4'><h3  className='headline3'><span className='icons'><MdOutlineEmojiTransportation/></span>Safe Tranportation</h3>
             <p className='para2'>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                 lorem amet elitr vero...
                   </p></div>
        <div className='content5'><h3  className='headline3'><span className='icons'><MdFoodBank/></span>Healthy Food</h3>
             <p className='para2'>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
                  </p></div>
        <div className='content6' ><h3  className='headline3'><span className='icons'><GiSchoolBag/></span>Education TOUR</h3>
             <p className='para2'>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
                   </p></div>
         <div className='playgroundcard'>
             <img  className='logoimg'  src={img2} ></img><br></br>
                   <span className='icons'><MdSportsCricket/></span>
                   <h2 className='playhd'>play Ground</h2>
                    <p className='playgroundpara'>  Playgrounds provide children with opportunities for exercise, creativity, and imaginative play. They also offer a space for students to interact with their peers and develop social skills such as teamwork, communication, and problem-solving. Furthermore, school playgrounds can promote a healthy lifestyle and contribute to the overall well-being of students.
                   </p>
                 </div>
       <div className='transportcard'>
            <img  className='logoimg2'  src={img1} ></img><br></br>
                <span className='icons'><MdOutlineEmojiTransportation/></span>
                   <h2 className='transhd'>Safe Transportation</h2>
                 <p className='transportpara'> School safe transportation facilities are important to ensure the safety and security of students while they are commuting to and from school. It provides parents with peace of mind knowing their children are in safe hands while traveling to and from school.Additionally, schools may also provide training and education to students on how to behave safely while riding on school transportation.
            </p>
    </div>
         </div>
            </div>
  )
}
export default Facilities;

     
