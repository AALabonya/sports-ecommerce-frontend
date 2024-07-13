import { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span
        key={interval}
        className="bg-[#7ED957] text-white shadow-xl h-20 px-10 rounded-xl text-2xl font-bold flex flex-col  justify-end items-center"
      >
        <h1 className="text-3xl font-bold"> {timeLeft[interval]}</h1>
        <h1 className="text-lg">{interval} </h1>
      </span>
    );
  });

  return (
    <div className="flex justify-center space-x-4 py-10 ">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

const BestDeal = () => {
  const targetDate = new Date("2024-12-12T00:00:00");

  return (
    <div className="py-20">
      <div
        className="space-y-3"
        style={{
          backgroundImage: `url(${"https://natsy.novaworks.net/wp-content/uploads/2023/11/m3_deal_bg.jpg"})`,
          backgroundSize: "object-cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="{deal}" alt="" />
        <h1 className="text-6xl font-bold text-center text-white">
          Grab the best Offer Of <br /> this Week!
        </h1>
        <Countdown targetDate={targetDate} />
      </div>
    </div>
  );
};

export default BestDeal;
