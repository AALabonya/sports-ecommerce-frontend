/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
interface CountdownProps {
  targetDate: string;
}
const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  // Define the expected structure of timeLeft

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: Record<string, any> = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

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

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval];
    if (!value) {
      return;
    }

    timerComponents.push(
      <span
        key={interval}
        className="bg-[#7ED957] text-white shadow-xl lg:h-20 lg:px-10 rounded-xl lg:text-2xl font-bold flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl font-bold">{value}</h1>
        <h1 className="text-lg">{interval}</h1>
      </span>
    );
  });

  return (
    <div className="flex justify-center space-x-4 py-10 ">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

const BestDeal: React.FC = () => {
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
        <h1 className="lg:text-6xl md:text-3xl text-2xl pt-7 font-bold text-center text-white">
          Grab the best Offer Of <br /> this Week!
        </h1>
        <Countdown targetDate={targetDate.toISOString()} />
      </div>
    </div>
  );
};

export default BestDeal;
