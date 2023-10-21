import LoginImage from '../../../assets/login3.png'
import Marquee from 'react-marquee-slider'
import times from 'lodash/times'

export const MarqueeSlider = () => {
  return (
    <div className='my-6 text-white font-bold text-center'>
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

const Login = () => {
  return (
    <div className='bg-gray-200 p-10 h-screen'>
      <div className='container mx-auto flex w-100 p-10 rounded-3xl bg-white'>
        <div className='flex-1'>form</div>
        <div className='flex-1'>
          <div className='h-full bg-sky-900 rounded-3xl flex flex-col justify-center p-20 py-10'>
            <h1 className='text-white text-3xl'>
              The simplest way to book your hotel to stay there
            </h1>
            <span className='mt-3 text-xs text-white'>
              Enter your credential to access for booking hotel you require.
            </span>
            <div>
              <img src={LoginImage} alt='login' className='rounded-2xl mt-10 h-30' />
            </div>
            <MarqueeSlider />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
