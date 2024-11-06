import React, { useEffect } from "react";
import Img1 from "../../assets/zuccini.jpg";
import Img2 from "../../assets/Coriander Hybrid.jpg";
import Img3 from "../../assets/potatoes.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Choose from the Healthiest Produce
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img1}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Sourced locally</p>
              <p className="line-clamp-1"> By Farmtheory</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Zucchini
              </h1>
              <p className="line-clamp-2">
                Weight: 500gm <br />
                Amount: __/Kg
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img2}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Sourced Locally</p>
              <p className="line-clamp-1"> By Farmtheory</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Coriander
              </h1>
              <p className="line-clamp-2">
              Weight: 50gm <br />
              Amount: __/100gm
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img3}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Sourced Locally</p>
              <p className="line-clamp-1"> By Farmtheory</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Potatoes
              </h1>
              <p className="line-clamp-2">
              Weight: 1kg <br />
              Amount: __/kg
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
