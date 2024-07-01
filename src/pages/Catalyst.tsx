
import star from "../assets/starsvg.svg";
import staricon from "../assets/icon2.png";
import panorama from "../assets/panorama.jpeg";
import panorama1 from "../assets/panorama1.png";
import panorama2 from "../assets/panorama2.png";
import panorama3 from "../assets/panorama3.png";
import panorama4 from "../assets/panorama4.png";

const Cryptohunt = () => {
  return (
    <div className="select-none">
      {/* heading */}
      <div className="mt-8 flex flex-col justify-center items-center">
        <div data-aos="fade-in" className="flex flex-col items-center lg:m-8 md:m-2 sm:m-4 mb-0">
          <h4 className="lg:text-xl md:text-lg sm:text-sm  text-zinc-400">
            CLUB
          </h4>
          {/* heading */}
          <div className="flex justify-center items-center align-middle">
            <img src={star} className="lg:w-20 md:w-12 sm:w-8" alt="" />
            <h2 className="lg:text-6xl md:text-4xl  sm:text-3xl font-semibold flex justify-center items-center px-3 text-center">
              Catalyst Website
            </h2>
            <img src={star} className="lg:w-20 md:w-12 sm:w-8" alt="" />
          </div>
        </div>

        {/* live demo button */}
        <a
          href="https://catalyst.geca.ac.in/"
          target="_blank"
          data-aos="fade-in"
          className="lg:text-lg md:text-sm sm:text-md border-2 lg:rounded-xl md:rounded-lg sm:rounded-md lg:p-4 md:p-3 sm:p-3 lg:m-8 md:m-6 sm:mb-5 hover:bg-gray-200 hover:text-black hover:font-medium hover:ease-in-out duration-300 text-center "
        >
          Live Project
        </a>

        {/* heroimg */}
        <img data-aos="fade-in" src={panorama} className="w-full lg:h-svh" alt="" />

        {/* information */}
        <div
          id="bg"
          data-aos="fade-in"
          className="grid lg:grid-cols-2 md:grid-cols-1 lg:w-4/5 md:w-2/3 lg:p-8 md:p-6 sm:p-4  lg:m-20 md:m-10 sm:m-6 rounded-3xl gap-8"
        >
          <div id="detailsbg" className="border rounded-2xl lg:text-justify md:text-justify">
            <img
              src={staricon}
              className="w-6 h-12 flex align-middle ml-5 "
              alt=""
            />
            <p className="p-7 md:text-lg sm:text-md">
              <p className="text-zinc-500 lg:font-medium md:text-lg pb-2">
                ABOUT
              </p>
              Writer's Club, a vibrant community of literary enthusiasts dedicated to the art of storytelling and expression. Crafted with passion and creativity by our team using Figma and brought to life through Webflow, our website serves as a dynamic platform for sharing our love for writing with the world.
            </p>
          </div>

          <div id="detailsbg" className="border rounded-2xl lg:text-justify md:text-justify">
            {/* <img
              src={staricon}
              className="w-6 h-12 flex align-middle ml-5 "
              alt=""
            /> */}

            <p className="p-7 md:text-lg sm:text-md">
            Packed with exclusive content, behind-the-scenes insights, and sneak peeks into upcoming events, our website and our recently launched newsletter is your personal invitation to dive deeper into the world of literature and creativity. Whether you're a long-time member of our community or a curious newcomer, our magazine is your go-to source for all of the things. With each issue, we aim to inspire, entertain, and connect with readers like never before.
            </p>
          </div>
        </div>

        {/* photogallery */}
        <div className="grid lg:grid-cols-4 md:grid-cols-1 md:grid-flow-row sm:grid-cols-1 justify-center items-center lg:gap-8 md:gap-6 sm:gap-4 lg:m-20 md:m-5 sm:m-3 mt-0">
          <div data-aos="fade-in" className="lg:col-span-4 flex justify-center items-center">
            <img
              src={panorama1}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-4 sm:border-2"
              alt=""
            />
          </div>
          <div data-aos="fade-in" className="lg:col-span-2 md:col-span-1 sm:col-span-1">
            <img
              src={panorama4}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-4 sm:border-2"
              alt=""
            />
          </div>
          <div data-aos="fade-in" className="lg:col-span-2 md:col-span-1 sm:col-span-1">
            <img
              src={panorama3}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md justify-center items-center w-full lg:h-full md:object-contain sm:object-contain lg:border-4 md:border-4 sm:border-2"
              alt=""
            />
          </div>
          <div data-aos="fade-in" className="lg:col-span-4 flex justify-center items-center">
            <img
              src={panorama2}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-4 sm:border-2"
              alt=""
            />
          </div>
        </div>

        {/* information */}
        <div
          id="bg"
          data-aos="fade-in"
          className="flex justify-center w-4/5 lg:p-8 md:p-6 sm:p-4 rounded-3xl lg:flex-row sm:flex-col lg:w-4/5 sm:2/3 lg:m-20 md:m-10 sm:m-3"
        >
          <div
            id="detailsbg"
            className="flex lg:flex-col lg:gap-0 md:gap-10 sm:gap-0 border rounded-2xl md:text-lg sm:text-sm lg:w-1/3 sm:2/3"
          >
            <img
              src={staricon}
              className="w-6 h-12 lg:ml-5 md:ml-4 sm:ml-0"
              alt=""
            />
            <p className="lg:p-7 md:p-7 sm:p-4">
              <p className="text-zinc-400 font-medium text-xs pb-2">DEVELOPED</p>
              August 2023
            </p>
            <p className="lg:p-7 md:p-7 sm:p-4 lg:pt-0">
              <p className="text-zinc-400 font-medium pb-2 text-xs">TYPE</p>
              Team
            </p>
          </div>

          <p className="lg:p-7 md:p-5 sm:pt-5 md:text-lg sm:text-md lg:text-justify md:text-justify">
            <p className="text-zinc-400 font-medium pb-2 ">Description</p>
            <p className="py-3">
            As the proud publishers of an annual magazine, we invite you to immerse yourself in the rich tapestry of talent showcased within its pages. From thought-provoking articles and captivating poems to stunning sketches and evocative photographs, our magazine captures the diverse voices and perspectives of our college community.

            </p>
            <p className="py-3">
            Explore our Interview section, where we shine a spotlight on renowned personalities from the world of literature, journalism, and beyond, offering unique insights into their creative process and life experiences.

            </p>
            <p className="py-3">
            With a sleek and intuitive design, navigating through our website is a breeze, allowing you to seamlessly access all the latest updates, submissions guidelines, and membership information. Whether you're a seasoned writer looking for a supportive community or a curious reader eager to discover new voices, the Writer's Club website offers something for everyone.
            </p>
            <p>

            </p>
          </p>
        </div>

        <div className="flex lg:gap-5 md:gap-5 sm:gap-2">
          {/* prev button */}
          <a
            href="/wings"
            className="lg:text-3xl  md:text-2xl sm:text-lg border rounded-2xl lg:p-7 md:p-7 sm:p-4 mt-10  hover:bg-gray-200 hover:text-black hover:ease-in-out duration-300"
          >
            Prev Project
          </a>
          {/* next button */}
          <a
            href="/stopwatchandtimer"
            className="lg:text-3xl  md:text-2xl sm:text-lg border rounded-2xl lg:p-7 md:p-7 sm:p-4 mt-10  hover:bg-gray-200 hover:text-black hover:ease-in-out duration-300"
          >
            Next Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cryptohunt;
