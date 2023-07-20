import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const KnowMore = () => {
  return (
    <>
      <div className="text-center w-full md:w-3/4 mx-auto space-y-3 mb-4 md:mb-12">
        <h1 className="text-5xl font-bold text-sky-400">
          Have any queries? Email us.
        </h1>
        <p className="text-lg ">
          We are here 24/7 just to provide you with updated news. Helping you
          cherish your website development goal.
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="hero min-h-screen w-full md:w-11/12 mx-auto rounded-md"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/online-question-answers-search_102902-2342.jpg?w=900&t=st=1689850112~exp=1689850712~hmac=32d2e8ccf6efee4572b434fc41ac172b30901707da1b9c27b13a5e1f03d90c96")`,
        }}
      >
        <div className="hero-overlay bg-opacity-80 rounded-md"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-extrabold text-gray-300">
              Are the data updated and Authentic ?
            </h1>
            <p className="mb-5 text-gray-300 text-lg font-semibold">
              We understand you have thousands of questions to ask. Guess what
              we happily do that. We have got ya, All you need to is email use
              using the button below. We will reach you as soon as possible.
            </p>
            <button className="btn-common">Email us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowMore;
