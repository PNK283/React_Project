import React from 'react'
import {useImage}from 'react-image'

function Gallery() {
  return (
    <div>
      <h1 className='ourgallery'>_____ Our Gallery_____</h1><br/>
      <h3 className='gallery-heading'>Our Kids school gallery</h3><br/>
      <div className='img'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5zbDKzM4t9XE67tSlyk8ztiZct3bWYzmPTyjDnARGA&usqp=CAU&ec=48600112'/>
      </div>
      <div className='img1'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6VLK8uQsERGZLMdPrEOByaUEwegpKsojWc6xlBJRow&usqp=CAU&ec=48600112'/>
      </div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZiviWdSFa0CaxkET-ERzq7eGt_Aym2w9QYFBtnNpjPA&usqp=CAU&ec=48600112'/>
      </div><br/>
      <h3 className='gallery-heading'>Our Library</h3><br/>
      <div className='img'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYnyUcBZP7AN1TSb5cegwmIN-HjkE4Zmrh-asDKX2ZA&usqp=CAU&ec=48600112'/>
      </div>
      <div className='img1'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_50EFsW29Xbt0ZvdPnBW7GKdTtnhUbIvCO-rBpgMgHA&usqp=CAU&ec=48600112'/>
      </div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTtcVLWhrduxbkZuxx6M4N-vYtM3vW-NJwGDX8JVVOg&usqp=CAU&ec=48600112'/>
      </div>
    </div>
  )
}

export default Gallery
