
export const Footer = () => {
  return (
    <footer data-aos="fade-in" data-aos-duration='1000' id="footer" className="select-none">
      {/* <hr className="w-11/12 mx-auto" /> */}

      <section className="container mt-14 md:grid-cols-2 xl:grid-cols-2 gap-y-8">

        <div className="flex flex-row gap-5 justify-center sm:text-sm">
          <div>
            <a
              href="/"
              className="opacity-60 hover:opacity-100"
            >
              Home
            </a>
          </div>

          <div>
            <a
              href="/credentials"
              className="opacity-60 hover:opacity-100"
            >
              About
            </a>
          </div>

          <div>
            <a
              href="/projects"
              className="opacity-60 hover:opacity-100"
            >
              Projects
            </a>
          </div>

          <div>
            <a
              href="/contact"
              className="opacity-60 hover:opacity-100"
            >
              Contact
            </a>
          </div>
        </div>

      </section>

      <section className="container p-6 text-center ">
        <h3>
          &copy; Made with ❤️ by {" "}
          <a
            href="https://github.com/"
            target = "_blank"
            className="text-amber-700 transition-all border-amber-700 hover:border-b-2"
          >
           Gautam Keshri
          </a>
        </h3>
      </section>
    </footer>
  );
};







