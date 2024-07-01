
import photo from "../assets/profilepic(1).jpeg";
import { Linkedin, Github, Twitter, Dribbble } from "lucide-react";
import star from "../assets/starsvg.svg";

const Credentials = () => {
  const skills = [
    {
      name: "ReactJS",
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      level: "Proficient",
    },
    {
      name: "Javascript",
      level: "Intermediate",
    },
    {
      name: "NodeJS",
      level: "Beginner",
    },
    {
      name: "HTML",
      level: "Proficient",
    },
    // {
    //   name: "UI/UX Design",
    //   level: "Intermediate",
    // },
    // {
    //   name: "Figma",
    //   level: "Intermediate",
    // },
    // {
    //   name: "GSAP",
    //   level: "Beginner",
    // },
    {
      name: "C++",
      level: "Intermediate",
    },
    {
      name: "Data Structures and Algorithms",
      level: "Intermediate",
    },
    {
      name: "SQL",
      level: "Beginner",
    },
    {
      name: "MongoDB",
      level: "Beginner",
    },
    {
      name: "Git and Github",
      level: "Intermediate",
    },
    // {
    //   name: "Spline 3D",
    //   level: "Intermediate",
    // },
  ];

  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col  justify-center items-center lg:mx-20 md:mx-16 select-none">
      {/* left section  */}
      <div className="flex justify-center items-center w-1/3 lg:sticky md:sticky lg:top-7 md:top-5 md:bottom-5 lg:bottom-7">
        <div
          id="bg"
          data-aos="zoom-in"
          className="p-5 rounded-3xl border lg:w-80 md:w-72 flex flex-col justify-center sticky items-center"
        >
          <img src={photo} className="rounded-3xl" alt="" />
          <h2 className="pt-8 text-3xl font-semibold justify-center items-center">
            Developer
          </h2>
          <p className=" text-sm text-zinc-400 pt-3"></p>
          <div className="flex justify-center items-center lg:gap-4 md:gap-2 sm:gap-2 pt-7">
            <a
              className="p-4 sm:p-3 border bg-zinc-900 rounded-full hover:bg-white group"
              href="http://www.linkedin.com/in/gautam-keshri"
              target="blank"
            >
              <Linkedin className="group-hover:stroke-black" />
            </a>
            <a
              className="p-4 sm:p-3 rounded-full border bg-zinc-900 hover:bg-white group"
              href="https://github.com/keshriGautam"
              target="blank"
            >
              <Github className="group-hover:stroke-black" />
            </a>
            <a
              className="p-4 sm:p-3 rounded-full border bg-zinc-900 hover:bg-white group"
              href="https://x.com/GKeshri2000?t=cfKHkpIqtfhncz3u6PeVRA&s=08"
              target="blank"
            >
              <Twitter className="group-hover:stroke-black" />
            </a>
            <a
              className="p-4 sm:p-3 rounded-full border bg-zinc-900 hover:bg-white group"
              href="https://www.behance.net/"
              target="blank"
            >
              <Dribbble className="group-hover:stroke-black" />
            </a>
          </div>

          <a
            href="/contact"
            className="hover:bg-zinc-300 group border rounded-full flex font-medium justify-items-center w-full p-4 mt-7 place-content-center hover:text-black"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* right section */}
      <div className="lg:w-2/3 lg:mx-20 md:mx-16 sm:mx-8 sm:mt-8">
        {/* about */}
        <div data-aos="fade-right" className="mb-14">
          {/* <h2 className="text-lg font-semibold underline">ABOUT ME</h2> */}
          <div className="col-span-2 lg:text-6xl md:text-4xl sm:text-3xl flex font-extrabold justify-center items-center text-center">
            <img className="lg:w-20 md:w-16 sm:w-10" src={star} alt="" />
            Self Summary
            <img className="lg:w-20 md:w-16 sm:w-10" src={star} alt="" />
          </div>
          <p className="text-md py-6 break-words lg:text-justify md:text-justify">
          Hello! I'm Gautam Keshri, a passionate frontend developer with a flair for creating intuitive and dynamic user interfaces.{" "}
          </p>
          <p className="text-md lg:text-justify md:text-justify">
           I am currently pursuing a BSc (Honors) in Data Science and AI from the prestigious Indian Institute of Technology, Guwahati. My academic journey has equipped me with a robust foundation in both theoretical and practical aspects of data science and artificial intelligence.
          </p>
        </div>

        {/* Education */}
        <div data-aos="fade-right" className="my-5">
          <h2 className="text-xl font-semibold underline">EDUCATION</h2>
          <div className="py-8">
            <p className="text-sm text-zinc-400">2023 - 2027</p>
            <p className="text-lg text-orange-500">BSc(Honor's)</p>
            <p className="text-sm">
              Indian Institute of Technology Guwahati
            </p>
            <p className="text-sm text-zinc-400">(CGPA - 6.79)</p>
          </div>

          <div className="py-5">
            <p className="text-sm text-zinc-400">2021</p>
            <p className="text-lg text-orange-500">HSC in Science</p>
            <p className="text-sm">Inter Science College, Hazaribagh</p>
            <p className="text-sm text-zinc-400">(Percentage - 82)</p>
          </div>

          <div className="py-5">
            <p className="text-sm text-zinc-400">2019</p>
            <p className="text-lg text-orange-500">SSC</p>
            <p className="text-sm">Kasturba Gandhi High School, Dadpur</p>
            <p className="text-sm text-zinc-400">(Percentage - 72)</p>
          </div>
        </div>

        {/* Experience */}
        {/* <div  data-aos="fade-right" className="my-5">
          <h2 className="text-xl font-semibold underline">
            EXPERIENCE
          </h2>
          <div className="py-8">
            <p className="text-sm text-zinc-400">JUNE 2023 - JULY 2023</p>
            <p className="text-lg text-orange-500">Web development Intern</p>
            <p className="text-sm text-zinc-400">
              @ Government Medical College, Aurangabad
            </p>
            <ul className="text-md my-2">
              <li className="pb-2">
                ● Managed the ongoing development and refinement of "Neocare," a
                specialized medical follow-up software, overseeing bug
                resolution and code enhancements.
              </li>
              <li className="pb-2">
                ● Applied practical expertise to various real-world projects,
                delving into their codebases to understand and optimize
                functionalities.
              </li>
              <li className="pb-2">
                ● Orchestrated seamless collaboration among team members and
                mentors to ensure the attainment of the highest-quality
                outcomes.
              </li>
            </ul>
          </div>

          <div data-aos="fade-right" className="py-5">
            <p className="text-sm text-zinc-400">APRIL 2023 - MAY 2023</p>
            <p className="text-lg text-orange-500">
              Frontend development Intern
            </p>
            <p className="text-sm text-zinc-400">@ CodeClause</p>
            <ul className="text-md my-4">
              <li className="pb-2">
                ● Created frontend projects centered around specific tasks,
                utilizing HTML, CSS, and Javascript to implement dynamic user
                interfaces.
              </li>
              <li className="pb-2">
                ● Delved deeply into frontend technologies, actively expanding
                my skill set through hands-on exploration and project
                development.
              </li>
            </ul>
          </div>
        </div> */}

        {/* Skills */}
        <div data-aos="fade-right" id="skills" className="">
          <h2 className="text-xl font-semibold mb-2 underline">SKILLS</h2>
          <div className="grid lg:grid-rows-5 md:grid-rows-2 grid-cols-2 grid-flow-row">
            {skills.map((item, index) => (
              <div key={index} className="p-5">
                <h2 className="text-lg">{item.name}</h2>
                <p className="text-sm text-zinc-400">{item.level}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Credentials;
