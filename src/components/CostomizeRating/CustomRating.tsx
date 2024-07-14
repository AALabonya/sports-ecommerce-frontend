import React from "react";
import Rating from "react-rating";

export const CustomRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <Rating
      emptySymbol={
        <svg
          className="w-5 h-5 text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27l5.18 3.73-1.64-6.81 5.22-4.4-6.82-.59L12 .98 9.06 8.2l-6.82.59 5.22 4.4L6.82 21z" />
        </svg>
      }
      fullSymbol={
        <svg
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27l5.18 3.73-1.64-6.81 5.22-4.4-6.82-.59L12 .98 9.06 8.2l-6.82.59 5.22 4.4L6.82 21z" />
        </svg>
      }
      initialRating={rating}
      readonly
    />
  );
};
