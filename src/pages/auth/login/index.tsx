import LoginImage from '../../../assets/login3.png'
import Marquee from 'react-marquee-slider'
import times from 'lodash/times'

export const MarqueeSlider = () => {
  return (
    <div className='my-5 text-white font-bold text-center'>
      <div className='mb-8 text-xs text-white'> - Sponsors in industry - </div>
      <Marquee key={1} velocity={10}>
        {times(1, String).map((id) => (
          <div>
            <span className='mx-5' key={`marquee-review-${id}`}>
              Google
            </span>{' '}
            <span className='mx-5' key={`marquee-review-${id}`}>
              Spotify
            </span>{' '}
            <span className='mx-5' key={`marquee-review-${id}`}>
              Freepic
            </span>{' '}
            <span className='mx-5' key={`marquee-review-${id}`}>
              Amazon
            </span>{' '}
            <span className='mx-5' key={`marquee-review-${id}`}>
              Industry
            </span>{' '}
            <span className='mx-5' key={`marquee-review-${id}`}>
              Disney
            </span>{' '}
          </div>
        ))}
      </Marquee>
    </div>
  )
}
export const LoginBannerContainer = () => {
  return (
    <div className='flex-1 hidden xl:block'>
      <div className='h-full bg-sky-900 rounded-3xl flex flex-col justify-center p-20 py-10'>
        <h1 className='text-white text-3xl'>The simplest way to book your hotel to stay there</h1>
        <span className='mt-3 text-xs text-white'>
          Enter your credential to access for booking hotel you require.
        </span>
        <div>
          <img src={LoginImage} alt='login' className='rounded-2xl mt-10 h-30' />
        </div>
        <MarqueeSlider />
      </div>
    </div>
  )
}
export const LoginForm = () => {
  return (
    <div className='mt-8'>
      <p className='text-sm'>Email Address</p>
      <input
        placeholder='example@domain.com'
        type='text'
        className='border border-1 border-gray-200 text-sm w-full py-3 rounded-2xl my-2 focus:ring-transparent focus:border-sky-900'
      />
      <div className='flex justify-between items-center mt-4'>
        <p className='text-sm'>Password</p>
        <span className='text-sky-800 text-xs mr-2 hover:cursor-pointer'>Forgot Password?</span>
      </div>
      <input
        placeholder='example01'
        type='text'
        className='border border-1 border-gray-200 text-sm w-full py-3 rounded-2xl my-2 focus:ring-transparent focus:border-sky-900'
      />
      <div className='mt-2 flex items-center'>
        <input type='checkbox' className='rounded-md border border-gray-400 mr-2 focus:ring-0' />
        <span className='text-sky-800 text-xs mr-2'>I agree to the terms and policy.</span>
      </div>
      <button className='py-4 mt-8 bg-sky-900 text-white text-center w-full text-sm rounded-2xl'>
        Login
      </button>
      <p className='text-sky-800 text-xs mr-2 mt-3'>
        Create an account?
        <span className='mx-1 text-sky-500 hover:cursor-pointer'>Sign in</span>{' '}
      </p>
      <p className='text-gray-400 text-xs mr-2 mt-7 text-center'>{`${new Date().getFullYear()} Captain Hook, All right Reserved.`}</p>
    </div>
  )
}
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
        {/* login form */}
        <LoginForm />
      </div>
    </div>
  )
}

const Login = () => {
  return (
    <div className='p-0 md:p-10 md:bg-gray-100'>
      <div className='container mx-auto flex w-100 p-10 rounded-3xl bg-white md:drop-shadow-2xl'>
        <LoginFormContainer />
        <LoginBannerContainer />
      </div>
    </div>
  )
}
export default Login
