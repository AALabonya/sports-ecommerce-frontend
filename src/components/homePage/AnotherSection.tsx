import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function AnotherSection() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row gap-5 lg:gap-10 text-[10px] md:text-sm my-10">
        <div className="md:w-1/2 relative">
          <img
            src="https://demo2.themelexus.com/tousuit/wp-content/uploads/2024/06/cat06.jpg"
            className=" h-[415px]"
            alt="Overear Headphone"
          />
          <div className="absolute left-5 sm:left-10 md:left-12 lg:left-20 top-1/2 transform -translate-y-1/2 space-y-2">
            <p className="uppercase opacity-65">#Other</p>
            <h3 className="text-xl text-white md:text-2xl font-bold">
              Overear <br /> Headphone
            </h3>
            <Link to={`/products/`}>
              <Button className="bg-[#7ED957] text-2xl mt-5">Shop Now</Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="https://natsy.b-cdn.net/wp-content/uploads/2023/11/m5_banner_01.jpg"
            className=" h-[415px]"
            alt="Overear Headphone"
          />
          <div className="absolute left-5 sm:left-10 md:left-12 lg:left-20 top-1/2 transform -translate-y-1/2 space-y-2">
            <p className="uppercase text-white font-bold opacity-65">
              Elevate Your Run With Our{" "}
            </p>
            <h3 className="text-xl text-white md:text-2xl font-bold">
              Premium <br /> Accessories
            </h3>
            <Link to={`/products`}>
              <Button className="bg-[#7ED957] text-2xl mt-5">Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnotherSection;
