// import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";
import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/hero-carousel-3.jpg";
import Banner2 from "../../assets/hero-carousel-2.jpg";
import Banner3 from "../../assets/hero-carousel-1.png";


const Hero = () => {
  const images = [Banner1, Banner2, Banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <main className="bg-gradient-to-r from-green-950 to-green-900 pt-20 dark:bg-green-950">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
              We bring you food straight from the Farm
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
              necessitatibus?
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-green-600 bg-green-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-green-700">
                  Learn More
                </button>
                <button className="rounded-md border-2 border-green-600 px-4 py-2 text-sm text-green-600 transition-colors duration-300 hover:bg-green-700 hover:text-white">
                  Start Shopping
                </button>
              </div>
          </div>
           {/* Slideshow */}
           <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <div className="relative w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg ">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;