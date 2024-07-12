export default function Story() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 my-24 gap-12 xl:h-[600px] xl:pl-3">
      <div className="col-span-1 w-full md:w-[450px] h-[500px] mx-auto relative">
        <img
          src="https://sportite-store-demo.myshopify.com/cdn/shop/files/about3.jpg?v=1614303064"
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute w-full md:w-[280px] h-[170px] -bottom-5 lg:-bottom-10 lg:-right-20 bg-[#fefefe] rounded-lg
          flex flex-col p-12 text-[18px] font-semibold text-[#2b3940] tracking-wide shadow-2xl"
        >
          <div className="space-x-2">
            <span className="">
              <span className=" text-2xl">In</span>formation
            </span>{" "}
            <span className="text-xl text-red-500">290+</span>
            <span>Jobs</span>
          </div>
          <div className="flex  mt-2 items-center justify-between">
            <div className="flex space-x-1">
              <img className="h-8 w-8" src="/company1.png" alt="" />
              <img className="h-8 w-8" src="/company2.png" alt="" />
            </div>
            <span className="text-[#2b3940] text-[16px] tracking-wider">
              <span className="text-lg">+14</span> Giants
            </span>
          </div>
        </div>
        <div className="hidden xl:block absolute bottom-[78px] right-[155px] z-40">
          <img src="/tick2.png" alt="" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col mt-32 xl:mt-12 space-y-12 items-center xl:items-start">
        <h1 className="text-[#2b3940] text-3xl lg:text-4xl xl:text-5xl tracking-wide font-bold space-y-2">
          <h1>Story</h1>
        </h1>
        <p className="text-[#7f8283] text-xl md:text-2xl text-center xl:text-start">
          FitPro is a premier sports goods e-commerce website offering a diverse
          selection of athletic and recreational products. From apparel and
          footwear to equipment and accessories, FitPro provides a convenient
          online shopping experience with detailed product descriptions and
          customer reviews. The platform frequently features promotions,
          discounts, and new arrivals to meet all your sports and fitness needs.
        </p>
        <div className="text-[#323f46] text-lg md:text-xl font-semibold tracking-wide space-y-2">
          <div className="flex space-x-4 items-center">
            <img className="w-6 h-6" src="/tick.png" alt="" />
            <span>Bring to the table win-win survival</span>
          </div>
          <div className="flex space-x-4">
            <img className="w-6 h-6" src="/tick.png" alt="" />
            <span>Capitalize on low hanging fruit to identify</span>
          </div>
          <div className="flex space-x-4">
            <img className="w-6 h-6" src="/tick.png" alt="" />
            <span>But I must explain to you how all this</span>
          </div>
        </div>
      </div>
    </div>
  );
}
