import LoginImage from '../../../../assets/login3.png'
import {MarqueeSlider} from '../marquee-slider'
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
