import { useNavigate } from "react-router"

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center'>
      <div>
        <h2 className='text-3xl md:text-4xl font-bold capitalize'>Premium car rental in your area</h2>
        <h2 className='text-lg text-gray-400 pr-29 mt-5 capitalize'>book the selected car effortlessly, pay for driving only, Book the car now</h2>
        <button className='p-2 mt-5 bg-secondary text-white capitalize px-4 rounded-full hover:scale-105 transition-all' onClick={() => navigate('/home')}>Explore more</button>
      </div>
      <div className='w-full h-[500px]'>
        <img src="/car1.png" alt="car" className='w-[90%] h-full object-contain'/>
      </div>
    </div>
  )
}

export default Hero