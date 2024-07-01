
// import star from "../assets/starsvg.svg";
// import staricon from "../assets/icon2.png";
// import cryptohunt from "../assets/cryptohunt2.jpeg";
// import crypto1 from "../assets/crypto1.png";
// import crypto2 from "../assets/crypto2.png";
// import crypto3 from "../assets/crypto3.png";

const Cryptohunt = () => {
  return (
    <div className="select-none">
      {/* heading */}
      <div className="mt-8 flex flex-col justify-center items-center">
        <div
          data-aos="fade-in"
          className="flex flex-col items-center lg:m-8 md:m-2 sm:m-4 mb-0"
        >
          <h4 className="lg:text-xl sm:text-sm  text-zinc-400">FINTECH</h4>
          {/* heading */}
          <div className="flex justify-center items-center align-middle">
            {/* <img src={star} className="lg:w-20 md:w-12  sm:w-8" alt="" /> */}
            <h2 className="lg:text-6xl md:text-3xl sm:text-3xl font-semibold flex justify-center items-center text-center px-3">
              Crypto-Hunt
            </h2>
            {/* <img src={star} className="lg:w-20 md:w-12 sm:w-8" alt="" /> */}
          </div>
        </div>

        {/* live demo button */}
        <a
          href=""
          target="_blank"
          data-aos="fade-in"
          className="lg:text-lg md:text-sm sm:text-md border-2 lg:rounded-xl md:rounded-lg sm:rounded-md lg:p-4 md:p-3 sm:p-3 lg:m-8 md:m-6 sm:mb-5 hover:bg-gray-200 hover:text-black hover:ease-in-out duration-300 text-center"
        >
          Live Project
        </a>

        {/* heroimg */}
        <img
          data-aos="fade-in"
          // src={cryptohunt}
          className="w-full lg:h-svh"
          alt=""
        />

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
              // src={staricon}
              className="w-6 h-12 flex align-middle ml-5 "
              alt=""
            />
            <p className="p-7 md:text-lg sm:text-md">
              <p className="text-zinc-500 lg:font-medium md:text-lg pb-2">
                ABOUT
              </p>
              Introducing CryptoHunt, your go-to mini project for tracking
              cryptocurrency prices in real-time. With CryptoHunt, stay ahead of
              the market trends by accessing up-to-date data fetched directly
              from the Coin Ranking API.
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
              <p className="pb-3">Designed with simplicity and efficiency in mind, CryptoHunt
              provides users with a seamless experience for monitoring their
              favorite cryptocurrencies. Whether you're a seasoned investor or
              just starting out in the world of digital assets, Crypto-Hunt
              empowers you with the insights you need to make informed
              decisions.</p>

              <p>Empower yourself with CryptoHunt and take control of
              your cryptocurrency investments like never before. Start tracking,
              analyzing, and optimizing your portfolio with ease today.</p> 
            </p>
          </div>
        </div>

        {/* photogallery */}
        <div className="grid lg:grid-cols-4 md:grid-cols-1 md:grid-flow-row sm:grid-cols-1 justify-center items-center lg:gap-8 md:gap-6 sm:gap-4 lg:m-20 md:m-5 sm:m-3 mt-0">
          <div
            data-aos="fade-in"
            className="lg:col-span-4 flex justify-center items-center"
          >
            <img
              // src={crypto1}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md lg:border-4 md:border-2 sm:border-2"
              alt=""
            />
          </div>
          <div
          data-aos="fade-in"  
          className="lg:col-span-2 md:col-span-1 sm:col-span-1">
            <img
              // src={crypto3}
              className=" lg:border-4 md:border-2 sm:border-2 lg:rounded-3xl md:rounded-2xl sm:rounded-md"
              alt=""
            />
          </div>
          <div
          data-aos="fade-in"  
          className="lg:col-span-2 md:col-span-1 sm:col-span-1">
            <img
              // src={crypto2}
              className="lg:rounded-3xl md:rounded-2xl sm:rounded-md justify-center items-center w-full lg:h-full md:object-contain sm:object-contain lg:border-4 md:border-2 sm:border-2"
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
              // src={staricon}
              className="w-6 h-12 lg:ml-5 md:ml-4 sm:ml-0"
              alt=""
            />
            <p className="lg:p-7 md:p-7 sm:p-4">
              <p className="text-zinc-400 font-medium text-xs pb-2">
                DEVELOPED
              </p>
              July 2023
            </p>
            <p className="lg:p-7 md:p-7 sm:p-4 lg:pt-0">
              <p className="text-zinc-400 font-medium pb-2 text-xs">TYPE</p>
              Personal
            </p>
          </div>
          <p className="lg:p-7 md:p-5 sm:pt-5 md:text-lg sm:text-md lg:text-justify md:text-justify">
            <p className="text-zinc-400 font-medium pb-2 ">Description</p>
            <p className="p-2">
              ● Real-time Data: <br />
              <p className="py-2">
                Stay informed about the latest cryptocurrency prices, market
                capitalization, trading volume, and more, all updated in
                real-time.
              </p>
            </p>

            <p className="p-2">
              ● User-Friendly Interface: <br />
              <p className="py-2">
                With an intuitive interface, CryptoHunt makes it easy to
                navigate and track your favorite coins effortlessly.
              </p>
            </p>

            <p className="p-2">
              ● Customizable Watchlist:
              <p className="py-2">
                Personalize your experience by creating a watchlist of
                cryptocurrencies you're interested in, allowing you to monitor
                them at a glance.
              </p>
            </p>

            <p className="p-2">
              ● Detailed Coin Information:
              <p className="py-2">
                Dive deeper into individual cryptocurrencies with comprehensive
                details including price charts, historical data, and project
                information.
              </p>
            </p>

            <p className="p-2">
              ● Responsive Design:
              <p className="py-2">
                Access CryptoHunt from any device, whether it's your desktop,
                tablet, or smartphone, thanks to its responsive design.
              </p>
            </p>
          </p>
        </div>

        {/* next button */}
        <a
          href="/kanban" 
          className="lg:text-3xl  md:text-2xl sm:text-lg border rounded-2xl p-7 mt-10  hover:bg-gray-200 hover:text-black hover:ease-in-out duration-300"
        >
          Next Project
        </a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Cryptohunt;
