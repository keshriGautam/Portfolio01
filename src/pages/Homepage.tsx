
import "../App.css";
import photo from "../assets/profilepic(1).jpeg";
import Marquee from "react-fast-marquee";
import signature from "../assets/signature (2).png";
import resume from "../assets/resume.png";
import icon from "../assets/icon2.png";
import CustomLogo from "./CustomLogo";
import {
  Webhook,
  Box,
  // Figma,
  Instagram,
  Twitter,
  Github,
  Linkedin,
  Dribbble,
  // Spline,
} from "lucide-react";

const Homepage1 = () => {
  return (
    <>
      <div className="grid lg:grid-rows-7 md:grid-rows-12 lg:grid-cols-8 md:grid-cols-4  sm:grid-rows-15 sm:grid-cols-4 justify-center lg:my-20 md:my-20 lg:px-40 md:px-20 sm:px-5 gap-4 select-none">
        {/* my description */}
        <div
          id="bg"
          data-aos="zoom-in"
          className=" animation row-span-3 col-span-4 border rounded-3xl p-5"
        >
          <div className="flex md:flex-row sm:flex-col justify-around items-center select-none">
            <img
              src={photo}
              className="h-52
               rounded-tl-3xl rounded-br-3xl"
              alt=""
            />
            <div className="pl-1 leading-8 mt-10 max-w-sm">
              <h4 className="text-slate-400">A WEB DEVELOPER</h4>
              <h1 className="font-semibold text-5xl">Gautam Keshri</h1>
              <p className="text-slate-400 text-wrap mt-2">
                I'm a passionate and enthusiastic Web Developer and UI/UX
                Designer based in India.
              </p>
              <a className="flex justify-end " id="arrowicon" href="/credentials">
                <CustomLogo />
              </a>
            </div>
          </div>
        </div>
        {/* marquee */}
        {/* <div className=""> */}
        <div
          id="bg"
          data-aos="zoom-in"
          className="col-span-4 p-5 text-sm border rounded-full animation"
        >
          <Marquee
            className="lg:space-y-6 md:space-y-5"
            direction="left"
            gradient
            gradientColor=""
            speed={100}
            gradientWidth={30}
            pauseOnHover
          >
            I'M AVAILABLE FOR&nbsp;<b>FREELANCE WORK.</b>
          </Marquee>
        </div>
        {/* </div> */}

        {/* Credentials */}
        <div
          id="bg"
          data-aos="zoom-in"
          className="row-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4 border rounded-3xl flex flex-col justify-around sm:p-2 animation"
        >
          <img
            className=" w-40 sm:w-32 sm:m-2 place-self-center rounded-md "
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

        {/* Showcase */}
        <div
          id="bg"
          data-aos="zoom-in"
          className="row-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4 border rounded-3xl flex flex-col justify-around sm:p-2 animation"
        >
          <img
            src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/my-works.png"
            className="w-40 place-self-center"
            alt=""
          />
          <div className="px-6 sm:px-4 sm:m-2">
            <a id="arrowicon" href="/projects">
              <p className=" text-zinc-400 text-xs">SHOWCASE</p>
              <h2 className="text-lg flex justify-between items-center">
                Projects
                <CustomLogo />
              </h2>
            </a>
          </div>
        </div>

        {/* 2nd row*/}
        {/* cv */}
        <div
          id="bg"
          data-aos="zoom-in"
          className="row-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4 border rounded-3xl flex flex-col justify-around sm:p-2 animation"
        >
          <img
            src={resume}
            className="w-24 m-3 place-self-center sm:m-2"
            alt=""
          />
          <div className="px-6">
            <a id="arrowicon" href='https://drive.google.com/file/d/1UId0XLXzqUW1kRhXQDScuxkO24rXHKN7/view?usp=sharing' target="_blank">
              <p className=" text-zinc-400 text-xs">MY CV</p>
              <h2 className="text-lg flex justify-between items-center">
                Download
                <CustomLogo />
              </h2>
            </a>
          </div>
        </div>

        {/* web designing */}
        {/* <div
          id="bg"
          data-aos="zoom-in"
          className="row-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4 sm:p-2 border rounded-3xl flex flex-col justify-around animation"
        >
          <div className="flex justify-center items-center gap-20 p-8">
            <Figma size={30} />
            <Spline size={30} />
          </div>
          <div className="px-6">
            <a id="arrowicon" href="">
              <p className=" text-zinc-400 text-xs">WEB DESIGNING</p>
              <h2 className="text-lg flex justify-between items-center">
                UI/UX
                <CustomLogo />
              </h2>
            </a>
          </div>
        </div> */}

        {/* services */}
        <div
          id="bg"
          data-aos="zoom-in"
          className="row-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4 sm:p-2 border rounded-3xl flex flex-col justify-around animation"
        >
          <div className="flex justify-center items-center gap-20 p-8">
            {/* <Camera size={30} /> */}
            <Box size={30} />
            <Webhook size={30} />
          </div>
          <div className="px-6">
            <a id="arrowicon" href="">
              <p className=" text-zinc-400 text-xs">SPECIALIZATION</p>
              <h2 className="text-lg flex justify-between items-center">
                Services Offering
                <CustomLogo />
              </h2>
            </a>
          </div>
        </div>

        {/* handles */}
        <div
          id="bg"
          data-aos="zoom-in"
          className="row-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4 sm:p-2 border rounded-3xl flex flex-col justify-around animation"
        >
          <div className="flex place-self-center gap-2 p-5 cursor-pointer">
            <a
              className="p-4 rounded-full border border-zinc-500 bg-zinc-900 hover:bg-white group"
              id="arrowicon" href="http://www.linkedin.com/in/gautam-keshri"
              target="blank"
            >
              <Linkedin size={30} className="group-hover:stroke-black " />
            </a>
            <a
              className="p-4 rounded-full border border-zinc-500 bg-zinc-900  hover:bg-white group"
              id="arrowicon" href="https://github.com/keshriGautam"
              target="blank"
            >
              <Github size={30} className="group-hover:stroke-black" />
            </a>
            <a
              className="p-4 rounded-full border border-zinc-500 bg-zinc-900 hover:bg-white group"
              id="arrowicon" href="https://x.com/GKeshri2000?t=cfKHkpIqtfhncz3u6PeVRA&s=08"
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

        {/* quote */}
        <div
          id="bg"
          data-aos="zoom-in"
          className="row-span-2 lg:col-span-3 md:col-span-4 sm:col-span-4 sm:p-4 border rounded-3xl flex flex-col justify-around animation"
        >
          <div className="lg:text-2xl md:text-xl sm:text-lg text-center px-4">
            <p>
              “Code with the heart of an artist, for elegance lies in
              simplicity.”
            </p>
          </div>
        </div>

        {/* creatives */}
        <div
          id="bg"
          data-aos="zoom-in"
          className="row-span-2 lg:col-span-2 md:col-span-2 sm:col-span-4 sm:p-2 border rounded-3xl flex flex-col justify-around animation"
        >
          <div className="flex gap-10 p-5 cursor-pointer place-self-center">
            <a
              className="p-4 rounded-full border border-zinc-500 bg-zinc-900 hover:bg-white group"
              id="arrowicon" href="https://www.behance.net/"
              target="blank"
            >
              <Dribbble size={30} className="group-hover:stroke-black " />
            </a>
            <a
              className="p-4 rounded-full border border-zinc-500 bg-zinc-900  hover:bg-white group"
              id="arrowicon" href="https://www.instagram.com/"
              target="blank"
            >
              <Instagram size={30} className="group-hover:stroke-black" />
            </a>
            {/* <a
                className="p-4 rounded-full border bg-zinc-900 hover:bg-white group"
                id="arrowicon" href="https://twitter.com/"
                target="blank"
              >
                <Twitter size={30} className="group-hover:stroke-black" />
              </a> */}
          </div>
          <div className="px-6 pb-3">
            <a id="arrowicon" href="/contact">
              <p className=" text-zinc-400 text-xs">HANDLES</p>
              <h2 className="text-lg flex justify-between items-center">
                Creatives
                <CustomLogo />
              </h2>
            </a>
          </div>
        </div>

        {/* lets work together */}
        <div
          id="bg"
          data-aos="zoom-in"
          className="row-span-2 lg:col-span-3 md:col-span-2 sm:col-span-4 border rounded-3xl flex flex-col exp box"
        >
          <img
            className="lg:w-8 lg:h-16 sm:w-6 sm:h-12 flex align-middle ml-5"
            src={icon}
            alt=""
          />
          {/* <div> */}
          <h2 className="lg:text-4xl md:text-2xl sm:text-xl flex justify-around items-center lg:p-8 md:p-8 sm:p-4 mt-10 text-amber-600">
            Let's work together.
            <a className="" id="arrowicon" href="/contact">
              <CustomLogo />
            </a>
          </h2>

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Homepage1;
