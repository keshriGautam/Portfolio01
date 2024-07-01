
import star from "../assets/starsvg.svg";
import staricon from "../assets/icon2.png";
import stopwatch0 from "../assets/stopwatch1.png"
import stopwatch1 from "../assets/stopwatch0.png"
import stopwatch2 from "../assets/stopwatch2.png"
import stopwatch3 from "../assets/stopwatch3.png"
// import stopwatch4 from "../assets/stopwatch4.png"


const Cryptohunt = () => {
  return (
    <div className="select-none">
      {/* heading */}
      <div className="mt-8 flex flex-col justify-center items-center">
        <div data-aos="fade-in" className="flex flex-col items-center lg:m-8 md:m-2 sm:m-4 mb-0">
          <h4 className="lg:text-xl sm:text-sm  text-zinc-400">FOCUS</h4>
          {/* heading */}
          <div className="flex justify-center items-center align-middle">
            <img src={star} className="lg:w-20 md:w-12 sm:w-8" alt="" />
            <h2 className="lg:text-6xl md:text-4xl sm:text-3xl font-semibold flex justify-center items-center px-3 text-center">
              Stopwatch and Timer
            </h2>
            <img src={star} className="lg:w-20 md:w-12 sm:w-8" alt="" />
          </div>
        </div>

        {/* live demo button */}
        <a
          href=""
          target="_blank"
          data-aos="fade-in"
          className="lg:text-lg md:text-sm sm:text-md border-2 lg:rounded-xl md:rounded-lg sm:rounded-md lg:p-4 md:p-3 sm:p-2 lg:m-8 md:m-6 sm:mb-5 hover:bg-gray-200 hover:text-black hover:font-medium hover:ease-in-out duration-300 text-center"
        >
          Live Project
        </a>

        {/* heroimg */}
        <img data-aos="fade-in" src={stopwatch0} className="w-full lg:h-svh" alt="" />

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
              <p className="text-zinc-500 lg:font-medium md:text-lg pb-2">ABOUT</p>
              Introducing my mini-project: a sleek and versatile stopwatch and timer combination that seamlessly blends simplicity with functionality.
            </p>
          </div>

          <div id="detailsbg" className="border rounded-2xl lg:text-justify md:text-justify">
            {/* <img
              src={staricon}
              className="w-6 h-12 flex align-middle ml-5 "
              alt=""
            /> */}

            <p className="p-7 md:text-lg sm:text-md">
            With a user-friendly interface, you can effortlessly switch between stopwatch and timer modes, allowing you to track time with ease. Whether you're timing a workout, cooking in the kitchen, or managing tasks, our intuitive design ensures a smooth experience every time.
            </p>
          </div>
        </div>

        {/* photogallery */}
        <div className="grid lg:grid-cols-4 md:grid-cols-1 md:grid-flow-row sm:grid-cols-1 justify-center items-center lg:gap-8 md:gap-6 sm:gap-4 lg:m-20 md:m-5 sm:m-3 mt-0">
          <div data-aos="fade-in" className="lg:col-span-4 flex justify-center items-center">
            <img src={stopwatch1} className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-2 sm:border-2" alt="" />
          </div>
          <div data-aos="fade-in" className="lg:col-span-2 md:col-span-1 sm:col-span-1">
            <img src={stopwatch2} className=" lg:border-4 md:border-2 sm:border-2 lg:rounded-3xl md:rounded-2xl sm:rounded-md" alt="" />
          </div>
          <div data-aos="fade-in" className="lg:col-span-2 md:col-span-1 sm:col-span-1">
            <img src={stopwatch3} className="lg:rounded-3xl md:rounded-2xl sm:rounded-md justify-center items-center w-full lg:h-full md:object-contain sm:object-contain lg:border-4 md:border-2 sm:border-2" alt="" />
          </div>
        </div>

        {/* information */}
        <div data-aos="fade-in" id="bg" className="flex justify-center w-4/5 lg:p-8 md:p-6 sm:p-4 rounded-3xl lg:flex-row sm:flex-col lg:w-4/5 sm:2/3 lg:m-20 md:m-10 sm:m-3">
          <div id="detailsbg" className="flex lg:flex-col lg:gap-0 md:gap-10 sm:gap-0 border rounded-2xl md:text-lg sm:text-sm lg:w-1/3 sm:2/3">
            <img src={staricon} className="w-6 h-12 lg:ml-5 md:ml-4 sm:ml-0" alt="" />
            <p className="lg:p-7 md:p-7 sm:p-4">
              <p className="text-zinc-400 font-medium text-xs pb-2">DEVELOPED</p>
              April 2023
            </p>
            <p className="lg:p-7 md:p-7 sm:p-4 lg:pt-0">
              <p className="text-zinc-400 font-medium pb-2 text-xs">TYPE</p>
              Personal
            </p>
          </div>

          <p className="lg:p-7 md:p-5 sm:pt-5 md:text-lg sm:text-md lg:text-justify md:text-justify">
            <p className="text-zinc-400 font-medium pb-2 ">Description</p>
            <p className="py-3">
            This project of stopwatch and timer also offer customizable features to suit your needs. Need to set a specific duration? Simply input your desired time, and our timer will countdown accordingly. Want to pause, resume, or reset the timer? It's as easy as the click of a button.
            </p>
            <p className="py-3">
            And when time's up, our built-in alert system ensures you never miss a beat. With a subtle yet attention-grabbing beep, you'll be promptly notified when your timer reaches zero, keeping you on track and focused on the task at hand.
            </p>
            <p className="py-3">
            Whether you're a fitness enthusiast, a busy professional, or simply someone who values efficiency, this combined stopwatch and timer is the perfect tool to help you stay organized and productive throughout your day. Try it out today and experience the power of simplicity in time management.
            </p>
          </p>
        </div>

          {/* prev button */}
          <a
            href="/catalyst"
            className="lg:text-3xl  md:text-2xl sm:text-lg border rounded-2xl lg:p-7 md:p-7 sm:p-4 mt-10  hover:bg-gray-200 hover:text-black hover:ease-in-out duration-300"
          >
            Prev Project
          </a>

      </div>
    </div>
  );
};

export default Cryptohunt;
