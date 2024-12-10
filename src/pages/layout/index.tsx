import { Outlet } from 'react-router'
import PubNav from '../../components/PubNav'
import Footer from '../dashboard/components/Footer'
import Navbar from '../dashboard/components/Navbar'

const MainLayout = () => {
  return (
    <>
      {/* <PubNav /> */}
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default MainLayout
