import {LoginForm} from '../../../../pages/auth/login'

export const LoginFormContainer = () => {
  return (
    <div className='flex-1'>
      <div className='text-sm text-sky-900 font-bold'>⚜️ Silco | Hotel Booking</div>
      <div className='p-0  text-2xl mt-10 md:pl-20 md:pr-32'>
        <h1>Get Started Now</h1>
        <span className='text-xs'>
          Enter your credential to access for booking hotel you require.
        </span>
        <div className='flex flex-col text-sm justify-between mt-5 mb-10 md:flex-row'>
          <button className='my-3 rounded-2xl py-3 px-9 border text-sky-800 border-sky-800 hover:bg-sky-900 hover:text-white md:m-0'>
            Login with Google
          </button>
          <button className='rounded-2xl py-3 px-9 border text-sky-800 border-sky-800 hover:bg-sky-900 hover:text-white'>
            Login with Apple
          </button>
        </div>
        <div className='relative'>
          <hr className='border border-b-1 border-gray-100 bg-red-100' />
          <div className='flex justify-center'>
            <span
              className='text-gray-300 text-sm absolute text-center mx-auto bg-white px-2'
              style={{top: '-10px'}}
            >
              or
            </span>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
