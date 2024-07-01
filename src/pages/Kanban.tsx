
import star from "../assets/starsvg.svg";
import staricon from "../assets/icon2.png";
import kanban0 from "../assets/kanban.jpeg";
import kanban1 from "../assets/kanban1.png";
import kanban2 from "../assets/kanban2.png";
import kanban3 from "../assets/kanban3.png";
import kanban4 from "../assets/kanban4.png";

const Kanban = () => {
  return (
    <div className="select-none">
      {/* heading */}
      <div className="mt-8 flex flex-col justify-center items-center">
        <div
        data-aos="fade-in"
        className="flex flex-col items-center lg:m-8 md:m-2 sm:m-4 mb-0">
          <h4 className="lg:text-xl md:text-lg sm:text-sm  text-zinc-400">
            TASK MANAGEMENT
          </h4>
          {/* heading */}
          <div className="flex justify-center items-center align-middle text-center">
            <img src={star} className="lg:w-20 md:w-12 sm:w-8" alt="" />
            <h2 className="lg:text-6xl md:text-4xl sm:text-3xl font-semibold flex justify-center items-center px-3 text-center">
              Kanban Board
            </h2>
            <img src={star} className="lg:w-20 md:w-12  sm:w-8" alt="" />
          </div>
        </div>

        {/* live demo button */}
        <a
          href=""
          target="_blank"
          data-aos="fade-in"
          className="lg:text-lg md:text-sm sm:text-md border-2 lg:rounded-xl md:rounded-lg sm:rounded-md lg:p-4 md:p-3 sm:p-3 lg:m-8 md:m-6 sm:mb-5 hover:bg-gray-200 hover:text-black hover:font-medium hover:ease-in-out duration-300 text-center"
        >
          Live Project
        </a>

        {/* heroimg */}
        <img data-aos="fade-in" src={kanban0} className="w-full lg:h-svh" alt="" />

        {/* information */}
        <div
          id="bg"
          data-aos="fade-in"
          className="grid lg:grid-cols-2 md:grid-cols-1 lg:w-4/5 md:w-2/3 lg:p-8 md:p-6 sm:p-4  lg:m-20 md:m-10 sm:m-6 rounded-3xl gap-8"
        >
          <div
            id="detailsbg"
            className="border rounded-2xl lg:text-justify md:text-justify"
          >
            <img
              src={staricon}
              className="w-6 h-12 flex align-middle ml-5 "
              alt=""
            />
            <p className="p-7 md:text-lg sm:text-md">
              <p className="text-zinc-500 lg:font-medium md:text-lg pb-2">
                ABOUT
              </p>
              The Kanban Board project is a dynamic task management and focus
              system designed to empower users in organizing their tasks
              effectively. With an intuitive interface, users can effortlessly
              create, manage, and prioritize tasks using drag-and-drop
              functionality.
            </p>
          </div>

          <div
            id="detailsbg"
            className="border rounded-2xl lg:text-justify md:text-justify"
          >
            {/* <img
              src={staricon}
              className="w-6 h-12 flex align-middle ml-5 "
              alt=""
            /> */}

            <p className="p-7 md:text-lg sm:text-md">
              This project offers flexibility by allowing users to create
              multiple columns, each representing a stage in their workflow or
              task lifecycle. Whether it's "To-Do," "In Progress," or
              "Completed," users can customize columns to suit their specific
              needs. Moreover, the Kanban Board project enables users to
              seamlessly edit task details, including titles, descriptions, due
              dates, and assigned individuals, fostering collaboration and
              clarity within teams.
            </p>
          </div>
        </div>

        {/* photogallery */}
        <div className="grid lg:grid-cols-4 md:grid-cols-1 md:grid-flow-row sm:grid-cols-1 justify-center items-center lg:gap-8 md:gap-6 sm:gap-4 lg:m-20 md:m-5 sm:m-3 mt-0">
          <div data-aos="fade-in" className="lg:col-span-4 flex justify-center items-center">
            <img
              src={kanban2}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-2 sm:border-2"
              alt=""
            />
          </div>
          <div data-aos="fade-in" className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:col-span-2 md:col-span-1 sm:col-span-1 lg:border-4 md:border-2 sm:border-2 rounded-3xl">
            <img
              src={kanban1}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md"
              alt=""
            />
          </div>
          <div data-aos="fade-in" className="lg:col-span-2 md:col-span-1 sm:col-span-1">
            <img
              src={kanban4}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-2 sm:border-2"
              alt=""
            />
          </div>
          <div data-aos="fade-in" className="lg:col-span-4 flex justify-center items-center">
            <img
              src={kanban3}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-2 sm:border-2"
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
              June 2023
            </p>
            <p className="lg:p-7 md:p-7 sm:p-4 lg:pt-0">
              <p className="text-zinc-400 font-medium pb-2 text-xs">TYPE</p>
              Personal
            </p>
          </div>

          <p className="lg:p-7 md:p-5 sm:pt-5 md:text-lg sm:text-md lg:text-justify md:text-justify">
            <p className="text-zinc-400 font-medium pb-2 ">Description</p>
            <p className="py-4">
              The Kanban Board project is a versatile task management and focus
              system that embodies the principles of the Kanban methodology,
              allowing users to visualize their workflow and efficiently manage
              their tasks.
            </p>
            <p className="py-4">
              At its core, the project provides a digital board divided into
              customizable columns, typically representing different stages of
              task completion. Users can create, move, and prioritize tasks by
              dragging and dropping them across these columns, providing a
              highly intuitive and interactive experience.
            </p>

            <p className="py-4">
              The Kanban Board project serves as a powerful tool for task
              management, providing users with a visual, flexible, and
              collaborative platform to organize, prioritize, and track their
              tasks effectively. Whether used by individuals seeking to improve
              personal productivity or teams aiming to streamline their
              workflow, the project offers a seamless and intuitive solution for
              managing tasks with ease.
            </p>
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
            href="/wings"
            className="lg:text-3xl  md:text-2xl sm:text-lg border rounded-2xl lg:p-7 md:p-7 sm:p-4 mt-10  hover:bg-gray-200 hover:text-black hover:ease-in-out duration-300"
          >
            Next Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
