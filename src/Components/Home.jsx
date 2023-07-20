import Gallery from "./Gallery";
import KnowMore from "./KnowMore";
import Technologies from "./Technologies";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:grid grid-cols-2 lg:grid-flow-col-2 gap-10 md:gap-3 py-6 px-2 md:pt-20 md:pb-8 md:px-10">
        <div className="font-serif space-y-6 text-center md:text-start  md:order-first md:p-6">
          <h1 className="font-bold text-4xl">
            Explore
            <br />
            New possibilities
            <br />
            <span className="text-sky-800">Using Technologies</span>
          </h1>
          <p>
            Transform Your Online Presence with Cutting-Edge Website Development
            Technologies. Our Expert Team Empowers You to Stand Out in the
            Digital Landscape, Creating Sleek Designs, Seamless Functionality,
            and Unforgettable User Experiences. Embrace the Future of Web
            Development and Unlock Limitless Possibilities for Your Business.
          </p>
          <button className="btn-common">
            <Link to="tech" spy={true} smooth={true} offset={0} duration={500}>
              Explore
            </Link>
          </button>
        </div>

        <div className=" md:order-last">
          <img
            className="w-full h-48 md:h-64 lg:h-96  rounded-lg object-contain"
            src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?w=996&t=st=1689780535~exp=1689781135~hmac=1523c2eb808d7a637eb8833d47a02661387ef83a9d465381c07ca968c8a7b2b7"
            alt=""
          />
        </div>
      </section>

      {/* Gallery component */}
      <section className="my-12 md:mt-44 mb-16">
        <Gallery></Gallery>
      </section>

      {/* Techs section */}
      <section className="my-12 md:mt-44 mb-16">
        <Technologies></Technologies>
      </section>

      {/* Know more section */}
      <section className="my-12 md:mt-32 mb-24">
        <KnowMore></KnowMore>
      </section>
    </>
  );
};

export default Home;
