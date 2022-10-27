import React from 'react';
import Clips from './utils/Clips';

const Hero = ({ heroapi: { title, subtitle, btntext, img, url, videos } }) => {
  // console.log(heroapi)
  return (
   <>
      <div className='relative flex flex-col w-auto h-auto'>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative z-20 grid items-center opacity-100 justify-items-center puma-container'>
          <div className='grid items-center justify-items-center mt-28 md:mt-24'>
            <h1 className='text-6xl font-extrabold lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl filter drop-shadow-sm text-slate-200'>{title}</h1>
            <h1 className='text-6xl font-extrabold lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
            <a href={url}  target={"_blank"}>
            <button type='button' className='my-5 button-theme bg-slate-200 shadow-slate-200 rounded-xl'>{btntext}</button>
            </a>
            <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto'>
              {videos?.map((val, i) => (
                <Clips
                  key={i}
                  imgsrc={val.imgsrc}
                  clip={val.clip}
                />
              ))}
            </div>
            <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-40 sm:right-6 gap-3'>
            {videos?.map((val, i) => (
                <Clips
                  key={i}
                  imgsrc={val.imgsrc}
                  clip={val.clip}
                />
              ))}
            </div>
          </div>
          <div className='flex items-center -pt-8'>
            <img
              src={img}
              alt='hero-img/img'
              className='w-auto h-[65vh] lg:h-[65vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme  -rotate-[45deg] hover:rotate-0 cursor-pointer object-fill'
            />
          </div>
        </div>
      </div>
   </>
  )
}

export default Hero