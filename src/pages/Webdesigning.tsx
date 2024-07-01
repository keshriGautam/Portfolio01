
import projectstar from '../assets/starsvg.svg'
import CustomLogo from './CustomLogo'
import cocacola from "../assets/cocacola.png"
import splinewings from "../assets/splinewings.png"
import spiderman from "../assets/spiderman.png"
import vacation from "../assets/vacation.png"
// import grow from "../assets/grow.png"
import inspired from "../assets/inspired.png"
import ecommerce from "../assets/ecommerce.png"


const Projects = () => {

  const skills = [
    {
      img: splinewings,
      type: "3D",
      name: "Wings logo",
    },
    {
      img: ecommerce,
      type: "APPLICATION",
      name: "Ecommerce",
    },
    {
      img: inspired,
      type: "UI DESIGN",
      name: "Homepage",
    },
    {
      img: spiderman,
      type: "UI DESIGN",
      name: "Movie interface",
    },
    {
      img: cocacola,
      type: "UI DESIGN",
      name: "Brand Page",
    },
    {
        img: vacation,
        type: "UI DESIGN",
        name: "Vacation website",
    },
  ]

  
  return (
    <>
    <div className='select-none'>
    {/* heading */}
    <div data-aos="zoom-in" className='flex justify-center items-center align-middle select-none transition-opacity'>
    <img src={projectstar} className='lg:w-24 sm:w-8' alt="" />
    <h2 className='lg:text-6xl sm:text-lg font-semibold flex justify-center items-center'>Web designing projects</h2>
    <img src={projectstar} className='lg:w-24 md:w- sm:w-8' alt="" />
    </div>

    {/* projects div first */}
    <div className='mt-8 transition-all'>
      <div className='grid grid-rows-2 lg:grid-flow-col md:grid-flow-row gap-6 justify-center items-center'>
      {skills.map((item, index) => (
      <div
          key={index} 
          id="bg"
          data-aos="zoom-in"
          className="border rounded-3xl flex-col justify-between p-7 pb-0 place-self-center "
        >
          <img 
            // width="300"
            src={item.img}
            className="rounded-2xl lg:w-80 md:w-72 sm:w-52 place-self-center"
            alt=""
            loading="lazy"
          />
          <a  id="arrowicon" href="https://www.behance.net/" target='_blank'>
            <p className="text-xs mt-6 text-zinc-400">{item.type}</p>
            <h2 className="text-lg flex justify-between items-center pb-5">
              {item.name}
              <CustomLogo />
            </h2>
          </a>
      </div>
      ))}

      </div>
    </div>

    </div>
    </>
  )
}

export default Projects