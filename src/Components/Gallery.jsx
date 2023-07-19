import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Gallery = () => {
  return (
    <>
      <div className="text-center w-full md:w-3/4 mx-auto space-y-3 mb-4 md:mb-12">
        <h1 className="text-5xl font-bold text-sky-400">
          Some Popular Technologies
        </h1>
        <p className="text-lg ">
          The Power of Website Development Technologies is to Create
          Visually Stunning, User-Friendly Websites That Captivate Your Audience
          and Drive Business Growth.
        </p>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="50"
        className="grid grid-cols-2 md:grid-cols-3 gap-5 rounded-lg  p-6"
      >
        <div className="h-64 md:h-96 bg-slate-200 rounded-lg">
          <img
            className="object-fit md:object-fit w-full h-full rounded-md mask md:mask-hexagon "
            src="https://img.freepik.com/free-vector/flat-cms-concept-illustration_23-2148810274.jpg?w=826&t=st=1689784379~exp=1689784979~hmac=95e3a21c29ed2099728f9fb9fe08a1ca21a08b504c37e2e286e4e3c15b6ce6e7"
            alt=""
          />
        </div>
        {/* img 1 */}
        <div className="h-64 md:h-96 bg-slate-200 rounded-lg">
          <img
            className="object-fit md:object-fit w-full h-full rounded-md mask md:mask-decagon"
            src="https://img.freepik.com/free-vector/back-end-development-concept-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-1064.jpg?w=826&t=st=1689783911~exp=1689784511~hmac=6b8be6d1e5a5726b13984dc88d309e43f7bb19df5e5a30edabcea7eebce26f91"
            alt=""
          />
        </div>
        {/* img 2 */}
        <div className="h-64 md:h-96 bg-slate-200 rounded-lg">
          <img
            className="object-fit md:object-fit w-full h-full rounded-md mask md:mask-parallelogram-4"
            src="https://img.freepik.com/free-vector/frontend-developer-typographic-header-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-304.jpg?w=1060&t=st=1689783943~exp=1689784543~hmac=7320681412a0441d48af4a989929474f3e15faca2c37accb15151a258eb92d76"
            alt=""
          />
        </div>
        {/* img 3 */}
        <div className="h-64 md:h-96 bg-slate-200 rounded-lg">
          <img
            className="object-fit md:object-fit w-full h-full rounded-md mask md:mask-diamond"
            src="https://img.freepik.com/free-vector/isometric-database-illustration_1284-32935.jpg?w=740&t=st=1689784038~exp=1689784638~hmac=f929230c49e8b71111a7d7e688f284a41a052e7009f9fda45de877b25d4f70ed"
            alt=""
          />
        </div>
        {/* img 4 */}
        <div className="h-64 md:h-96 bg-slate-200 rounded-lg">
          <img
            className="object-fit md:object-fit w-full h-full rounded-md mask md:mask-circle"
            src="https://img.freepik.com/free-vector/server-administration-text-composition_1284-73046.jpg?w=1060&t=st=1689784106~exp=1689784706~hmac=8d5374b481eb33c605222e065436a5a055d92709f037ad2673eda0112ba042b6"
            alt=""
          />
        </div>
        {/* img 5 */}
        <div className="h-64 md:h-96 bg-slate-200 rounded-lg">
          <img
            className="object-fit md:object-cover w-full h-full rounded-md mask md:mask-squircle"
            src="https://img.freepik.com/free-vector/software-developer-concept-idea-programming-coding-system-development-digital-technology-software-developing-company-writing-code-isolated-vector-illustration_613284-3389.jpg?w=740&t=st=1689784265~exp=1689784865~hmac=17025830726e06a0b107a70983538a6e67db3c0b0071c1d944e7fab7dfd94353"
            alt=""
          />
        </div>
        {/* img 6 */}
      </div>
    </>
  );
};

export default Gallery;
