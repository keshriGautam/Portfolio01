import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import icon from "../assets/icon2.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reply] = useState({success:false});


  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pxuisew', 'template_d6a2pyj', form.current!, {
        publicKey: 'JhtUKETneT3gPoL6E',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      setName('');
      setEmail('');
      setMessage('');

      reply.success = true;

  };


  return (
    <>
      <div className="flex lg:flex-row md:flex-col sm:flex-col justify-center mt-10">
        <div data-aos="zoom-in" className="flex flex-col lg:p-7">
          {/* details */}
          <div>
            <h3 className="lg:text-lg md:text-md sm:text-md font-medium px-6">
              CONTACT INFO
            </h3>
            <div className="flex items-center">
              <p className="m-5 p-5 border rounded-md bg-zinc-800 ">
                <Mail />
              </p>
              <div>
                <p className="text-sm text-zinc-400">MAIL</p>
                <p className="md:text-md sm:text-sm">keshrigautam825406@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="m-5 p-5 border rounded-md bg-zinc-800 ">
                <Phone />
              </p>
              <div>
                <p className="text-sm text-zinc-400">CALL</p>
                <p className="md:text-md sm:text-sm">6203094055</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="m-5 p-5 border rounded-md bg-zinc-800 ">
                <MapPin />
              </p>
              <div>
                <p className="text-sm text-zinc-400">LOCATION</p>
                <p className="md:text-md sm:text-sm">
                  Hazaribagh, Jharkhand
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium px-6">SOCIALS</h3>

            <div className="flex lg:gap-12 md:gap-8 sm:gap-4 p-7 cursor-pointer">
              <a
                className="p-5 border bg-zinc-900 rounded-full hover:bg-white group"
                href="https://x.com/GKeshri2000?t=cfKHkpIqtfhncz3u6PeVRA&s=08"
                target="blank"
              >
                <Twitter size={30} className="group-hover:stroke-black" />
              </a>
              <a
                className="p-5 border bg-zinc-900 rounded-full hover:bg-white group"
                href="http://www.linkedin.com/in/gautam-keshri"
                target="blank"
              >
                <Linkedin size={30} className="group-hover:stroke-black " />
              </a>
              <a
                className="p-5 border bg-zinc-900 rounded-full hover:bg-white group"
                href="https://github.com/keshriGautam"
                target="blank"
              >
                <Github size={30} className="group-hover:stroke-black" />
              </a>
            </div>
          </div>
        </div>

        {/* form */}
        <div data-aos="zoom-in" id="bg" className="rounded-3xl sm:m-5">
          <img className="ml-6" src={icon} alt="" />
          <div className="p-7">
            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl font-medium">
              Let's work <span className="text-amber-700 ">together</span>
            </h2>

            <form
            ref={form} onSubmit={sendEmail}
            className="flex flex-col">
              <input
                className="rounded-sm p-3 mt-7 ml-0 bg-input"
                type="text"
                name="from_name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="rounded-sm p-3 mt-7 ml-0 bg-input"
                type="email"
                name="from_email"
                value={email}
                placeholder="Enter your email id"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="rounded-sm p-3 mt-7 ml-0 bg-input h-40"
                value={message}
                name="message"
                placeholder="Enter your message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="p-4 border rounded-xl mt-7 lg:w-1/3 hover:bg-white hover:text-black">
                Send Message
              </button>
              <p className="py-2">{reply.success && "Thanks for contacting me!"} {
              }</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
