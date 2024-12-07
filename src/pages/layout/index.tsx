import { Outlet } from 'react-router'
import PubNav from '../../components/PubNav'
import Footer from '../dashboard/components/Footer'

const MainLayout = () => {
  return (
    <>
      <PubNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
