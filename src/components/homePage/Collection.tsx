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
              </div>
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
                  <div></div>
                </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
