import { Outlet } from 'react-router'
import PubNav from '../../components/PubNav'

const MainLayout = () => {
  return (
    <>
      <PubNav />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
