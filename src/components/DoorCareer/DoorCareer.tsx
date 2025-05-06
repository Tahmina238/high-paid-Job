// export default function DoorCareer() {
//   return (
//     <div className="w-full mx-auto  bg-secondary  px-20 py-20 text-center mb-6">
//       <h1 className=" text-5xl font-bold mb-2">
//         Door Closes for FREE Career Auditing
//       </h1>
//       <a href="#checkout" className="  text-lg transition-colors">
//         Countdown Complete
//       </a>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

export default function DoorCareer() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsComplete(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format seconds to hh:mm:ss
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="w-full mx-auto bg-secondary px-20 py-20 text-center mb-6">
      <h1 className="text-5xl font-bold mb-2">
        Door Closes for FREE Career Auditing
      </h1>

      {!isComplete ? (
        <p className="text-7xl  font-mono mb-4 text-red-600">
          {formatTime(timeLeft)}
        </p>
      ) : (
        <a
          href="#checkout"
          className="text-lg transition-colors text-blue-600 underline"
        >
          Countdown Complete – Go to Checkout
        </a>
      )}
    </div>
  );
}
