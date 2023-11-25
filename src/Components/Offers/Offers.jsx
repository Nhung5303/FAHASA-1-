import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
     <div className="offers-left">
      <h1>ƯU ĐÃI</h1>
      <h1>DÀNH CHO BẠN</h1>
      <p>CHỈ NHỮNG SẢN PHẨM MỚI NHẤT</p>
      <button>Check Now</button>
     </div>
     <div className="offers-right">
        <img src={exclusive_image} alt="" />
     </div>
    </div>
  )
}

export default Offers