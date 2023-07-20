import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const Technologies = () => {
  const [techs, setTechs] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTechs(data));
  }, [techs]);

  return (
    <>
      <div id="tech" className="mt-20 md:mt-36 w-11/12 mx-auto">
        <div className="text-center w-full md:w-3/4 mx-auto space-y-3 mb-4 md:mb-12">
          <h1 className="text-5xl font-bold text-sky-400">
            Lets Explore The Tech Tools
          </h1>
          <p className="text-lg ">
            These are the Technical Tools that help build a website. They make
            the work easy as well audience appealing.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="200"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-16"
        >
          {techs.slice(0, show ? 25 : 9).map((tech) => (
            <div
              key={tech?.id}
              className="overflow-hidden relative transition duration-700 transform hover:-translate-y-2 rounded shadow-2xl hover:shadow-4xl"
            >
              <img
                src={tech?.image}
                alt="tech Image"
                className="object-fit w-full h-80 md:h-80 xl:h-80"
              />
              <div className="bg-sky-900 px-6 py-4 bg-opacity-80 opacity-0 hover:opacity-100 text-white text-center absolute inset-0 transition-opacity duration-500 flex flex-col justify-center">
                <p className="font-bold text-md">Name : {tech?.name}</p>
                <br />
                <p className="font-bold text-md">Founder : {tech?.founder}</p>
                <br />
                <p className="font-bold text-md">
                  Performance : {tech?.performance}
                </p>
                <br />
                <Link to={`/tech/${tech.id}`}>
                  <button className="btn-common my-auto">See Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => setShow(!show)}
        className="btn-common mt-24 flex mx-auto"
      >
        {show ? "See Less" : "See More"}
      </button>
    </>
  );
};

export default Technologies;
