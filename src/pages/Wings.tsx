
import star from "../assets/starsvg.svg";
import staricon from "../assets/icon2.png";
import wings0 from "../assets/wings2.jpeg"
import wings2 from "../assets/wings2.png";
import wings3 from "../assets/wings3.png"
import wings4 from "../assets/wings4.png"
import wings6 from "../assets/wings6.png"


const Cryptohunt = () => {
  return (
    <div className="select-none">
      {/* heading */}
      <div className="mt-8 flex flex-col justify-center items-center">
        <div data-aos="fade-in" className="flex flex-col items-center lg:m-8 md:m-2 sm:m-4 mb-0">
          <h4 className="lg:text-xl md:text-lg sm:text-sm  text-zinc-400">TECHNICAL EVENT</h4>
          {/* heading */}
          <div className="flex justify-center items-center align-middle">
            <img src={star} className="lg:w-20  md:w-12  sm:w-8" alt="" />
            <h2 className="lg:text-6xl md:text-4xl sm:text-3xl font-semibold flex justify-center items-center text-center px-3">
              Wings Website
            </h2>
            <img src={star} className="lg:w-20  md:w-12 sm:w-8" alt="" />
          </div>
        </div>

        {/* live demo button */}
        <a
          href="https://wingsgeccs.com/"
          target="_blank"
          data-aos="fade-in"
          className="lg:text-lg md:text-sm sm:text-md border-2 lg:rounded-xl md:rounded-lg sm:rounded-md lg:p-4 md:p-3 sm:p-3 lg:m-8 md:m-6 sm:mb-5 hover:bg-gray-200 hover:text-black hover:font-medium hover:ease-in-out duration-300 text-center"
        >
          Live Project
        </a>

        {/* heroimg */}
        <img data-aos="fade-in" src={wings0} className="w-full lg:h-svh" alt="" />

        {/* information */}
        <div
          id="bg"
          data-aos="fade-in"
          className="grid lg:grid-cols-2 md:grid-cols-1 lg:w-4/5 md:w-2/3 lg:p-8 md:p-6 sm:p-4  lg:m-20 md:m-10 sm:m-6 rounded-3xl gap-8"
        >
          <div id="detailsbg" className="border rounded-2xl">
            <img
              src={staricon}
              className="w-6 h-12 flex align-middle ml-5 "
              alt=""
            />
            <p className="p-7 md:text-lg sm:text-md lg:text-justify md:text-justify">
              <p className="text-zinc-500 lg:font-medium md:text-lg pb-2">ABOUT</p>
              Wings takes flight as the premier platform for college-level technical events, seamlessly blending the latest in web development technologies with an immersive experience tailored for students. Our website, meticulously crafted with Next.js and Tailwind CSS, offers a seamless digital gateway to a world of innovation and discovery. 
            </p>
          </div>

          <div id="detailsbg" className="border rounded-2xl lg:text-justify md:text-justify">
            {/* <img
              src={staricon}
              className="w-6 h-12 flex align-middle ml-5 "
              alt=""
            /> */}

            <p className="p-7 md:text-lg sm:text-md">
            Elevating our brand identity to new heights, the Wings logo takes center stage as a stunning 3D model created with Spline, capturing the essence of creativity and forward-thinking. This visual centerpiece sets the stage for an engaging and dynamic user experience, inviting students to explore, learn, and connect. <br /> Through Wings, students have the opportunity to showcase their talents, expand their skill sets, and forge meaningful connections that will propel them towards success in their academic and professional endeavors.
            </p>
          </div>
        </div>

        {/* photogallery */}
        <div className="grid lg:grid-cols-4 md:grid-cols-1 md:grid-flow-row sm:grid-cols-1 justify-center items-center gap-8 lg:m-20 md:m-5 sm:m-3 mt-0">
          <div data-aos="fade-in" className="lg:col-span-4 flex justify-center items-center">
            <img src={wings2} className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-2 sm:border-2" alt="" />
          </div>
          <div data-aos="fade-in" className="lg:col-span-2 md:col-span-1 sm:col-span-1 lg:border-4 md:border-2 sm:border-2 rounded-3xl">
            <img src={wings4} className="lg:rounded-3xl md:rounded-2xl sm:rounded-md" alt="" />
          </div>
          <div data-aos="fade-in" className="lg:col-span-2 md:col-span-1 sm:col-span-1">
            <img src={wings6} className="lg:rounded-3xl md:rounded-2xl sm:rounded-md justify-center items-center w-full lg:h-full sm:h-60 md:object-contain sm:object-contain lg:border-4 md:border-2 sm:border-2" alt="" />
          </div>
          <div data-aos="fade-in" className="lg:col-span-4 flex justify-center items-center">
            <img src={wings3} className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-2 sm:border-2" alt="" />
          </div>
        </div>

        {/* information */}
        <div data-aos="fade-in" id="bg" className="flex justify-center w-4/5 lg:p-8 md:p-6 sm:p-4 rounded-3xl lg:flex-row sm:flex-col lg:w-4/5 sm:2/3 lg:m-20 md:m-10 sm:m-3">
          <div id="detailsbg" className="flex lg:flex-col lg:gap-0 md:gap-10 sm:gap-0 border rounded-2xl md:text-lg sm:text-sm lg:w-1/3 sm:2/3">
            <img src={staricon} className="w-6 h-12 lg:ml-5 md:ml-4 sm:ml-0" alt="" />
            <p className="lg:p-7 md:p-7 sm:p-4">
              <p className="text-zinc-400 font-medium text-xs pb-2">DEVELOPED</p>
              December 2023
            </p>
            <p className="lg:p-7 md:p-7 sm:p-4 lg:pt-0">
              <p className="text-zinc-400 font-medium pb-2 text-xs">TYPE</p>
              Dynamic
            </p>
          </div>

          <p className="lg:p-7 md:p-5 sm:pt-5 md:text-lg sm:text-md lg:text-justify md:text-justify">
            <p className="text-zinc-400 font-medium pb-2 ">Description</p>
            <p className="py-4">
            Wings represents a cutting-edge hub for all enthusiasts of technical events, boasting a meticulously crafted website constructed with Next.js and Tailwind CSS. As a testament to our commitment to innovation, our distinctive logo is brought to life through a stunning 3D model created with Spline, setting the tone for a visually captivating experience.
            </p>
            <p className="py-4">
            Within the confines of Wings, visitors are greeted with a wealth of information meticulously curated to provide comprehensive insights into upcoming events. From schedules to detailed descriptions, attendees can easily navigate through the platform to stay informed about all facets of the event.
            </p>
            <p className="py-4">
            With a focus on user experience, our website offers seamless navigation and intuitive design, ensuring that users can effortlessly find the information they seek. Whether it's exploring the event lineup, accessing important announcements, or registering for workshops, Wings serves as a one-stop destination for all things related to technical events.
            </p>
          </p>
        </div>

        <div className="flex lg:gap-5 md:gap-5 sm:gap-2">
          {/* prev button */}
          <a
            href="/kanban"
            className="lg:text-3xl  md:text-2xl sm:text-lg border rounded-2xl lg:p-7 md:p-7 sm:p-4 mt-10  hover:bg-gray-200 hover:text-black hover:ease-in-out duration-300"
          >
            Prev Project
          </a>
          {/* next button */}
          <a
            href="/catalyst"
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
