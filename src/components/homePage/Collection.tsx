export default function Collection() {
  return (
    <div className="container md:mb-20 mb-14">
      <div
        className="row gap-6 lg:px-24
      "
      >
        <div className="col-span-12 lg:col-span-5 2xl:col-span-4 bg-picture-1 bg-cover md:px-10 px-5 rounded-lg mb-5 text-start lg:pt-[30px] h-[480px]">
          <div className="flex items-center justify-between mt-5 md:mt-5 lg:mt-0">
            <div>
              <button className="flex items-center bg-white rounded-3xl text-sm px-4  py-1">
                <h1 className="bg-primary  w-2.5 h-2.5 rounded-full mr-1"></h1>{" "}
                Product
              </button>
            </div>

            <img
              src="https://i.postimg.cc/pLPmwScf/image-3.png"
              alt=""
              className="ml-8 md:ml-0 md:hidden block w-10 h-10"
            />
          </div>
          {/* <h1 className="text-white mt-4 text-lg lg:text-3xl font-bold leading-[130%] ">
            Nutrition & Mental Health Consultation
          </h1>
          <p className="text-white mt-4 text-xs md:text-base mb-5 md:mb-0">
            Discover a range of services tailored to your needs. From general
            check-ups to specialized treatments, we&apos;ve got you covered.
            With user-friendly features, real-time availability.
          </p> */}
          {/* <div className="md:flex md:justify-between items-center mb-5 mt-[30px]">
            <button className="text-white text-sm py-2 md:py-2 uppercase px-6 border md:mb-0 rounded-full md:w-[135px] w-full">
              Learn More
            </button>
            <img
              src="https://i.postimg.cc/pLPmwScf/image-3.png"
              alt=""
              className="ml-8 md:ml-0 md:block hidden w-[150px]"
            />
          </div> */}
        </div>
        <div className="col-span-12 2xl:col-span-8 lg:col-span-7">
          <div className=" bg-picture-2 h-[44%] bg-cover  object-fill rounded-lg">
            <div className="px-5 md:px-10 flex justify-between lg:py-[30px] py-5">
              <div>
                {" "}
                <button className="flex items-center bg-white rounded-3xl text-sm px-4 py-1">
                  <h1 className="bg-primary w-2.5 h-2.5 rounded-full mr-1"></h1>
                  Product
                </button>
                {/* <h1 className="text-white mt-5 md:mt-14 md:text-3xl text-sm font-bold lg:leading-[130%]">
                  Lifestyle counselling
                  <br /> for optimal health
                </h1> */}
              </div>
              {/* <div className="">
                {" "}
                <img
                  src="https://i.postimg.cc/BQdF49Np/image-1.png"
                  alt=""
                  className="md:w-[100px] md:ml-9"
                />
                <button className="text-white py-2 font-semibold px-3 text-sm border rounded-full mt-4 md:block hidden uppercase md:w-[135px]">
                  Learn More
                </button>
              </div> */}
            </div>
            <div className="px-4 pb-5 md:pb-0">
              <button className="p-3 bg-black px-7 w-full text-white rounded-full border font-semibold py-[10px] text-center text-sm md:hidden mt-5">
                Learn More
              </button>
            </div>
          </div>
          <div className="row gap-6 mt-[30px] text-white">
            <div className="col-span-12 2xl:col-span-6 lg:col-span-6">
              <div className=" bg-picture-3 rounded-lg px-5 md:px-10 2xl:py-[30px] py-5 h-[230px]">
                <div className="flex">
                  <div>
                    {/* <h1 className="text-[20px] font-bold">
                      {" "}
                      Specialty Consultations
                    </h1>
                    <p className="text-[14px] mt-4 ">
                      Discover a range of services tailored to your needs. From
                      general tailored to your needs.
                    </p> */}
                  </div>
                  {/* <img
                    src="https://i.postimg.cc/vZYGGxRj/image-4.png"
                    alt=""
                    className="mt-16 2xl:w-[100px] w-10 md:h-20"
                  /> */}
                </div>
                {/* <button className="text-white py-2 md:py-3 px-6 border md:mb-0 rounded-full md:w-[135px] w-full mt-[30px] md:mt-0 md:hidden">
                  Learn More
                </button> */}
              </div>
            </div>
            <div className="col-span-12 2xl:col-span-6 lg:col-span-6">
              <div className="bg-picture-4 bg-cover rounded-lg px-5 md:px-10 md:py-[30px] py-5 h-[230px]">
                <div className="flex">
                  <div>
                    <h1 className="text-[20px] text-center font-bold">
                      Tennis Rackets
                    </h1>
                    <p className="text-[14px] mt-4">Tennis Rackets</p>
                  </div>
                  {/* <img
                    src="{image}"
                    alt=""
                    className="mt-16 md:w-[200px] w-10 h-20"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
