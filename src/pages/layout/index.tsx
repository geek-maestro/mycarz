import Nav from '../../components/Nav'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
