import { useEffect, useState } from "react";

export default function Hero() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "http://aboss2.demo.towerthemes.com/image/cache/catalog/slider/home2-slider2-1920x950.jpg",
      title: "BODY GYM WOMEN SPORT CLOTHING",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
      btn: "Shop Now",
    },
    {
      img: "https://i.ibb.co/g3tqZ1B/sports1.jpg",
      title: "Escape 2",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
      btn: "Shop Now",
    },
    {
      img: "https://bingo-sparta.myshopify.com/cdn/shop/files/slideshow2_1920x710.jpg?v=1613503680",
      title: "Escape 3",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
      btn: "Shop Now",
    },
    {
      img: "https://sport.7uptheme.net/wp-content/uploads/2017/07/sl2.jpg",
      title: "Escape 4",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
      btn: "Shop Now",
    },
    {
      img: "https://bingo-sparta.myshopify.com/cdn/shop/files/slideshow3_1920x710.jpg?v=1613503752",
      title: "Boost Your fitness now",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
      btn: "Shop Now",
    },
  ];

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === data.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <>
      <div
        className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        {/* text container here */}
        <div className="drop-shadow-lg text-white text-center px-5">
          <h1 className="text-xl lg:text-3xl font-semibold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
          <button className="text-sm bg-[#7ED957] px-2 mt-5 font-bold rounded-md text-white md:text-base lg:text-lg">
            {sliders[currentSlider].btn}
          </button>
        </div>
      </div>
      {/* slider container */}
      <div className="flex justify-center items-center gap-3 p-2">
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.img}
            className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${
              currentSlider === inx ? "border-2 border-black p-px" : ""
            } rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={slide.title}
          />
        ))}
      </div>
    </>
  );
}
