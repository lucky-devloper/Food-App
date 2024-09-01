import React from 'react'
import Button from './Button'
import { BASE_URL } from '../Context/DataProvider'

function Card({data}) {
  const imagePath = `${data.image.split("/")[2]}`
  // console.log(imagePath); 
  
  return (
    <div className='w-[500px] h-[200px] rounded-lg bg-white bg-opacity-[0.2] p-2 flex gap-5'>
      <div className='w-[40%]'>
      <img src={BASE_URL + data.image} alt={data.name} className='w-full h-full object-cover rounded-md' />
      </div>
      <div className='w-[60%] flex flex-col items-end'>
        <div className='mb-5'>
          <h1 className='text-xl font-bold font-sans'>{data.name}</h1>
          <p className='text-[20px]'>{data.text}</p>
        </div>
        <Button name={`$${data.price}.00`} className='' />
      </div>
    </div>
  )
}

export default Card