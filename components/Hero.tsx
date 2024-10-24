import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='hero-map' />
      {/*LEFT SIDE*/}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <h1 className="bold-52 lg:bold-88">Higo Sense</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">

          Soy un pequeño dispositivo médico, pero proporciono
          todos los exámenes necesarios para formular diagnosis.
          Me han diseñado de forma que le permita realizar cualquier examen por su cuenta.
          Gracias a mis módulos intercambiables es fácil como un juego de niños.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image src="/star.svg" key={index} alt="star" width={24} height={24} />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>
        <div className="flex w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button type="button" title="How we work?" icon="/play.svg" variant="btn_white_text" />
        </div>
      </div>
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <video src='/video.webm' height={300} width={300} autoPlay muted loop />
      </div>
    </section>
  )
}

export default Hero