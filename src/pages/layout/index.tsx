import { Outlet } from 'react-router'
import Navbar from '../dashboard/components/Navbar'

const MainLayout = () => {
  return (
    <>
      {/* <PubNav /> */}
      <Navbar />
      <main className='w-full bg-[#F7F7F7] h-full'>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
