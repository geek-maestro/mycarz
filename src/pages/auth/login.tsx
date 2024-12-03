import { SignIn } from '@clerk/clerk-react'

const Login = () => {
  return (
    <div className='h-[80vh] items-center justify-center'>
      <SignIn />
    </div>
  )
}

export default Login
