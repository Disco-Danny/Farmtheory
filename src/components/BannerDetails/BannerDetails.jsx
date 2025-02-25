import React from "react";
import Banner from "../../assets/blog2.jpg";
import Image1 from "../../assets/plate.jpeg";  // Add a second image for differentiation
import Image2 from "../../assets/healthy.jpg";

const BannerDetails = ({ reverse, img, title, description, listItems }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">
                {title}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {description}
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                  {listItems.map((item, index) => (
                    <li key={index} className="font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-green-700 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Get Started
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={img}
                alt="No image"
                className="max-auto h-300 w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

// Render two instances of BannerDetails directly in the file
const BannerSection = () => {
  return (
    <div>
      {/* First instance with unique props */}
      <BannerDetails
        reverse={false}
        img={Image1}
        title="We ensure that your plate makes an impact on the world"
        description="Description for the first instance."
        listItems={[
          "Benefit 1",
          "Benefit 2",
          "Benefit 3",
        ]}
      
      />

      {/* Second instance with different content */}
      <BannerDetails
        reverse={true}
        img={Image2}
        title="Food which is healthy for you and the planet."
        description="Description for the second instance."
        listItems={[
          "Unique Benefit A",
          "Unique Benefit B",
          "Unique Benefit C",
        ]}
      />
    </div>
  );
};

export default BannerSection;
