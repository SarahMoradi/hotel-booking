import Marquee from 'react-fast-marquee'

export const MarqueeSlider = () => {
  return (
    <div className='my-5 text-white font-bold text-center'>
      <div className='mb-8 text-xs text-white'> - Sponsors in industry - </div>
      <Marquee>
        <div>
          <span className='mx-5'>Google</span> <span className='mx-5'>Spotify</span>{' '}
          <span className='mx-5'>Freepic</span> <span className='mx-5'>Amazon</span>{' '}
          <span className='mx-5'>Industry</span> <span className='mx-5'>Disney</span>{' '}
        </div>
      </Marquee>
    </div>
  )
}
