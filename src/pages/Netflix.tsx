
import star from "../assets/starsvg.svg";
import staricon from "../assets/icon2.png";
import netflix from "../assets/netflix.jpeg";
import netflix1 from "../assets/netflix1.png";
import netflix2 from "../assets/netflix2.png";
import netflix3 from "../assets/netflix3.png";

const Netflix = () => {
  return (
    <div className="select-none">
      {/* heading */}
      <div className="mt-8 flex flex-col justify-center items-center">
        <div
        data-aos="fade-in"
        className="flex flex-col items-center lg:m-8 md:m-2 sm:m-4 mb-0">
          <h4 className="lg:text-xl md:text-lg sm:text-sm text-zinc-400">
            ENTERTAINMENT
          </h4>
          {/* heading */}
          <div className="flex justify-center items-center align-middle">
            <img src={star} className="lg:w-20 md:w-12  sm:w-8" alt="" />
            <h2 className="lg:text-6xl md:text-4xl sm:text-3xl font-semibold flex justify-center items-center px-3 text-center">
              Netflix Clone
            </h2>
            <img src={star} className="lg:w-20 md:w-12  sm:w-8" alt="" />
          </div>
        </div>

         {/* live demo button */}
        <a
          href=""
          // target="_blank"
          data-aos="fade-in"
          className="lg:text-lg md:text-sm sm:text-md border-2 lg:rounded-xl md:rounded-lg sm:rounded-md lg:p-4 md:p-3 sm:p-3 lg:m-8 md:m-6 sm:mb-5 hover:bg-gray-200 hover:text-black hover:font-medium hover:ease-in-out duration-300 text-center"
        >
          Debugging
        </a>

        {/* heroimg */}
        <img data-aos="fade-in" src={netflix} className="w-full lg:h-svh" alt="" />

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
              The Netflix clone mini project is a frontend-based application
              developed using ReactJS, incorporating Firebase for
              authentication, inspired by the popular streaming platform.
            </p>
          </div>

          <div id="detailsbg" className="border rounded-2xl">
            {/* <img
              src={staricon}
              className="w-6 h-12 flex align-middle ml-5 "
              alt=""
            /> */}

            <p className="p-7 md:text-lg sm:text-md">
              The Netflix clone mini project combines frontend development with
              authentication using Firebase, seamless YouTube trailer
              integration, and dynamic content generation through the MoviesDB
              API, offering users an immersive and engaging streaming experience
              reminiscent of the popular platform.
            </p>
          </div>
        </div>

        {/* photogallery */}
        <div className="grid lg:grid-cols-3 md:grid-cols-1 md:grid-flow-row sm:grid-cols-1 justify-center items-center gap-8 lg:m-20 md:m-5 sm:m-3 mt-0">
          <div
          data-aos="fade-in"
          className="lg:col-span-3 flex justify-center items-center">
            <img
              src={netflix1}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-2 sm:border-2"
              alt=""
            />
          </div>

          <div
          data-aos="fade-in"
          className="lg:col-span-2 md:col-span-1 sm:col-span-1 ">
            <img
              src={netflix2}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-2 sm:border-2"
              alt=""
            />
          </div>
          <div
          data-aos="fade-in" className="">
            <img
              src={netflix3}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md justify-center items-center w-full lg:h-full sm:h-60 md:object-contain sm:object-contain lg:border-4 md:border-2 sm:border-2"
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
              May 2023
            </p>
            <p className="lg:p-7 md:p-7 sm:p-4 lg:pt-0">
              <p className="text-zinc-400 font-medium pb-2 text-xs">TYPE</p>
              Personal
            </p>
          </div>

          <p className="lg:p-7 md:p-5 sm:pt-5 md:text-lg sm:text-md lg:text-justify md:text-justify">
            <p className="text-zinc-400 font-medium pb-2 ">Description</p>
            <p className="py-2">This project allows users to experience a similar interface like Netflix while
            also offering additional features.</p>
            <p className="py-2">
            Utilizing Firebase authentication, users can securely sign in and
            access the application's content. The frontend interface closely
            resembles Netflix's layout, providing an intuitive and familiar user
            experience. One notable feature of this project is its integration
            with the YouTube API. When users click on the YouTube icon
            associated with a particular movie or show, they are redirected to
            the respective trailer on YouTube, enhancing their viewing
            experience.</p>
            <p className="py-2">Moreover, the application dynamically displays a new
            movie each time it is refreshed, offering users a diverse selection
            of content with every visit. This functionality is achieved through
            integration with the MoviesDB API, which provides a vast database of
            movies and TV shows for the application to draw from.</p> 
          </p>
        </div>


        <div className="flex lg:gap-5 md:gap-5 sm:gap-2">
        {/* prev button */}
        <a
          href="/cryptohunt"
          className="lg:text-3xl  md:text-2xl sm:text-lg border rounded-2xl lg:p-7 md:p-7 sm:p-4 mt-10  hover:bg-gray-200 hover:text-black hover:ease-in-out duration-300"
        >
          Prev Project
        </a>
        {/* next button */}
        <a
          href="/kanban"
          className="lg:text-3xl  md:text-2xl sm:text-lg border border-collapse rounded-2xl lg:p-7 md:p-7 sm:p-4 mt-10 select-none  hover:bg-gray-200 hover:text-black hover:ease-in-out duration-300"
        >
          Next Project
        </a>
      </div>
      </div>
    </div>
  );
};

export default Netflix;
