
import projectstar from "../assets/starsvg.svg";
import { Box, Github, Linkedin, Twitter } from "lucide-react";
import CustomLogo from "./CustomLogo";
import signature from "../assets/signature (2).png";
import icon from "../assets/icon2.png";

const Projects = () => {
  const skills = [
    {
      icon: <Box size={30} color="gray" />,
      type: "WEB DESIGN AND DEVELOPMENT",
      description:
        "I understand the critical role a website plays in establishing an online presence and driving business growth. As a skilled designer and developer, I am committed to crafting bespoke websites tailored to meet the unique needs of each client. With a keen eye for aesthetics and user experience, I ensure that a website not only looks stunning but also functions seamlessly across all devices and browsers. From responsive design to intuitive navigation, I prioritize usability to enhance visitor engagement and conversion rates. Let us bring your vision to life with our expert website design and development solutions.",
    },
    // {
    //   icon: <LayoutDashboard size={30} color="gray" />,
    //   type: "3D MODELS",
    //   description:
    //     " I'm thrilled to introduce my freelance service specializing in crafting mesmerizing 3D designs of logos. With a deep understanding of the significance of a logo in defining a brand's identity, I'm dedicated to transforming concepts into visually captivating three-dimensional artworks. I work diligently to encapsulate the essence of a brand within a dynamic 3D logo design. Leveraging my artistic flair and technical proficiency, I meticulously craft each logo with precision and finesse. Together, let's bring your logo to life in 3D and embark on a journey of visual excellence.",
    // },
  ];

  return (
    <>
      <div className="select-none">
        {/* heading */}
        <div data-aos="zoom-in" className="flex justify-center items-center align-middle">
          <img src={projectstar} className="lg:w-24 sm:w-8" alt="" />
          <h2 className="lg:text-6xl md:text-4xl sm:text-lg font-semibold flex justify-center items-center">
            MY OFFERINGS
          </h2>
          <img src={projectstar} className="lg:w-24 md:w- sm:w-8" alt="" />
        </div>

        {/* details */}
        <div className="grid grid-cols-6 justify-center  gap-4 lg:mx-20 md:mx-14 sm:mx-6 mt-8">
          {skills.map((item, index) => (
            <div id="bg"
            data-aos="fade-in"
            key={index} 
            className="lg:col-span-3 md:col-span-6 sm:col-span-6 border rounded-3xl flex-col justify-between p-7 pb-0 lg:text-justify md:text-justify sm:text-wrap place-self-center">
              {item.icon}
              <p className="lg:text-sm md:text-sm  sm:text-xs mt-6 text-zinc-400">{item.type}</p>
            <h2 className="lg:text-lg md:text-lg sm:text-sm flex justify-between items-center py-5">
              {item.description}
              <CustomLogo />
            </h2>
            </div>
          ))}

          {/* handles */}
          <div
          id="bg"
          data-aos="fade-in"
          className="row-span-2 lg:col-span-2 md:col-span-3 sm:col-span-6 sm:p-2 border rounded-3xl flex flex-col justify-around"
        >
          <div className="flex place-self-center gap-6 p-5 cursor-pointer">
            <a
              className="p-4 rounded-full border border-zinc-500 bg-zinc-900 hover:bg-white group"
              href="https://www.linkedin.com/"
              target="blank"
            >
              <Linkedin size={30} className="group-hover:stroke-black " />
            </a>
            <a
              className="p-4 rounded-full border border-zinc-500 bg-zinc-900  hover:bg-white group"
              href="https://github.com/"
              target="blank"
            >
              <Github size={30} className="group-hover:stroke-black" />
            </a>
            <a
              className="p-4 rounded-full border border-zinc-500 bg-zinc-900 hover:bg-white group"
              href="https://twitter.com/"
              target="blank"
            >
              <Twitter size={30} className="group-hover:stroke-black" />
            </a>
          </div>
          <div className="px-6">
            <a id="arrowicon" href="/contact">
              <p className=" text-zinc-400 text-xs">STAY WITH ME</p>
              <h2 className="text-lg flex justify-between items-center">
                Profiles
                <CustomLogo />
              </h2>
            </a>
          </div>
        </div>


        {/* Credentials */}
        <div
          id="bg"
          data-aos="fade-in"
          className="row-span-2 lg:col-span-2 md:col-span-3 sm:col-span-6 border rounded-3xl flex flex-col justify-around sm:p-2"
        >
          <img
            className="rounded-md lg:w-44 md:w-44  sm:w-32 sm:m-2 place-self-center "
            src={signature}
            alt=""
          />
          <div className="px-6">
            <a id="arrowicon" href="/credentials">
              <p className=" text-zinc-400 text-xs">MORE ABOUT ME</p>
              <h2 className="text-lg flex justify-between items-center">
                Credentials
                <CustomLogo />
              </h2>
            </a>
          </div>
        </div>



        {/* lets work together */}
        <div
          id="bg"
          data-aos="fade-in"
          className="row-span-2 lg:col-span-2 md:col-span-6 sm:col-span-6 border rounded-3xl flex flex-col "
        >
          <img className="lg:w-8 lg:h-16 sm:w-6 sm:h-12 flex align-middle ml-5" src={icon} alt="" />
          {/* <div> */}
            <h2 className="lg:text-4xl md:text-4xl sm:text-xl flex justify-around items-center lg:p-8 md:p-8 sm:p-4 mt-10 text-amber-600">
              Let's work together.
              <a className="" id="arrowicon" href="/contact">
                <CustomLogo />
              </a>
            </h2>

          {/* </div> */}
        </div>
          



        </div>
      </div>
    </>
  );
};

export default Projects;
