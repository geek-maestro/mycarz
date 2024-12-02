import React from 'react'
import { BsLuggage } from 'react-icons/bs'
import { FaCarAlt, FaUser } from 'react-icons/fa'

const CarCard = ({item, selected}) => {
  return (
    <div className='rounded-lg max-w-[300px] min-w-[250px] items-center bg-gradient-to-br from-[#EB4335] via-[#EB4335] to-[#B40711] h-[400px]' onClick={() => selected(item)}>
      <div className='items-center p-5 text-white'>
        <div className='text-2xl font-bold'>{item.type}</div>
        <div className='text-base'>{item.description}</div>
        <div className='flex items-center space-x-3 text-white my-5'>
            <div className='flex items-center space-x-5 rounded-full bg-[#C10205] px-2 py-1'>
                <div><FaUser  color='white'/></div>
                <div>2</div>
            </div>
            <div className='flex items-center space-x-5 rounded-full bg-[#C10205] px-2 py-1'>
                <div><BsLuggage  color='white'/></div>
                <div>{item.passengers}</div>
            </div>
            <div className='flex items-center space-x-5 rounded-full bg-[#C10205] px-2 py-1'>
                <div><FaCarAlt  color='white'/></div>
                <div>{item.gearshift}</div>
            </div>
        </div>

        <div className='justify-center flex my-auto'>
            <img src= {item.image} className='w-[90%] h-[60%] object-contain'/>
        </div>
        <div>
            <div>Unlimited km</div>
            <div className='font-bold text-lg'>${item.price} /day</div>
        </div>
      </div>
    </div>
  )
}

export default CarCard
