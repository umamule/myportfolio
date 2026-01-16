// @flow strict
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function AchievementCard({ achievement }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="achievement-card bg-[#1a1443] rounded-md p-4 text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      
      <div className="relative w-full h-40 mb-4">
        <Image
          src={achievement.image}
          alt={achievement.title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>

      <h3 className="text-lg font-semibold">{achievement.title}</h3>

      {showMore && (
        <p className="text-sm mt-2">{achievement.description}</p>
      )}

      <button
        className="flex items-center mt-4 text-sm font-medium text-violet-500"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Read More"}
        {showMore ? (
          <FaArrowUp className="ml-1" />
        ) : (
          <FaArrowDown className="ml-1" />
        )}
      </button>
    </div>
  );
}

function Achievements({ achievements = [] }) {
  return (
    <div
      id="achievements"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {achievements.slice(0, 6).map((achievement, i) => (
          <AchievementCard achievement={achievement} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Achievements;
