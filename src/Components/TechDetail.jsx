import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const TechDetail = () => {

   const techDetails = useLoaderData();
   const { id } = useParams();
   const [detail, setDetail] = useState({});

   useEffect(()=> {

    if(techDetails){
        const data = techDetails.find(tech=> tech.id == id)
        setDetail(data)
    }
   },[techDetails,id])

    return (
        <>
      <div className="hero min-h-screen md:w-[95%] md:mx-auto my-16 md:my-1" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="50">
        <div className="hero-content rounded-md bg-gradient-to-r from-sky-200 via-sky-500 to-sky-600 flex-col lg:flex-row p-1 md:p-6 gap-6">
          <img
            src={detail?.image}
            className="max-w-sm md:max-w-md h-96 rounded-lg shadow-2xl"
          />
          <div className="w-[90%] md:w-3/5 text-white">
            <div className="space-y-3">
            <h1 className="text-4xl font-bold">Tech Name : {detail?.name}</h1>
            <h1 className="text-xl font-bold">Founder : {detail?.founder}.</h1>
            </div>
            <p className="py-3">
              <strong>Tech Detail :</strong> {detail?.description}.
            </p>
            <hr  className="my-3"/>
            <div className="flex gap-12 mb-3">
              <p className="w-1/2">
                <strong>Last Update :</strong> {detail?.lastRelease}.
              </p>
              <p className="w-1/2">
                <strong>Users :</strong> {detail?.users}.
              </p>
            </div>
            <div className="flex gap-12 mb-3">
              <p className="w-1/2">
                <strong>Performance :</strong> {detail?.performance}.
              </p>
              <p className="w-1/2">
                <strong>Jobs:</strong> {detail?.jobs}. 
              </p>
            </div>
            <div className="mt-8">
              <Link to="/">
                <button className="btn-common flex mx-auto">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default TechDetail;