import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";

const StatsGraph = ({ hp, attack, defence, spdef, spatt, speed }: { hp: number,attack: number,defence: number,spatt: number,spdef: number, speed: number }) => {
  return (
    <div className="bg-[#a4a4a4] py-2 px-8 rounded-md my-2 w-full">
      <h1 className="text-xl mb-6">Stats</h1>
      <div className="flex justify-center gap-4">
      <div className="flex flex-col flex-col-reverse gap-1 items-center">
      <h5>HP</h5>
        {Array.from({ length: 15 }, (_, index) => (
          <div className="w-16 h-2 relative bg-white">
            <motion.div
              initial={{ scaleY: 0 }} // Start fully collapsed (no blue)
              animate={hp / 15 > index + 1 ? { scaleY: 1 } : { scaleY: 0 }} // Expand to full height
              transition={{
                duration: 1, // Transition duration
                ease: "easeInOut", // Smooth easing
                delay: 1 * index,
              }}
              className="absolute inset-0 bg-[#30a7d7] origin-bottom"
            />
          </div>
        ))}
        
      </div>
      <div className="flex flex-col flex-col-reverse gap-1 items-center">
      <h5>Attack</h5>
        {Array.from({ length: 15 }, (_, index) => (
          <div className="w-16 h-2 relative bg-white">
            <motion.div
              initial={{ scaleY: 0 }} // Start fully collapsed (no blue)
              animate={attack / 15 > index + 1 ? { scaleY: 1 } : { scaleY: 0 }} // Expand to full height
              transition={{
                duration: 1, // Transition duration
                ease: "easeInOut", // Smooth easing
                delay: 1 * index,
              }}
              className="absolute inset-0 bg-[#30a7d7] origin-bottom"
            />
          </div>
        ))}
        
      </div>
      <div className="flex flex-col flex-col-reverse gap-1 items-center">
      <h5>Defence</h5>
        {Array.from({ length: 15 }, (_, index) => (
          <div className="w-16 h-2 relative bg-white">
            <motion.div
              initial={{ scaleY: 0 }} // Start fully collapsed (no blue)
              animate={defence / 15 > index + 1 ? { scaleY: 1 } : { scaleY: 0 }} // Expand to full height
              transition={{
                duration: 1, // Transition duration
                ease: "easeInOut", // Smooth easing
                delay: 1 * index,
              }}
              className="absolute inset-0 bg-[#30a7d7] origin-bottom"
            />
          </div>
        ))}
        
      </div>
      <div className="flex flex-col flex-col-reverse flex-wrap gap-1 items-center">
      <h5>Sp Attk</h5>
        {Array.from({ length: 15 }, (_, index) => (
          <div className="w-16 h-2 relative bg-white">
            <motion.div
              initial={{ scaleY: 0 }} // Start fully collapsed (no blue)
              animate={spatt / 15 > index + 1 ? { scaleY: 1 } : { scaleY: 0 }} // Expand to full height
              transition={{
                duration: 1, // Transition duration
                ease: "easeInOut", // Smooth easing
                delay: 1 * index,
              }}
              className="absolute inset-0 bg-[#30a7d7] origin-bottom"
            />
          </div>
        ))}
        
      </div>
      <div className="flex flex-col flex-col-reverse gap-1 items-center">
      <h5>Sp. Def</h5>
        {Array.from({ length: 15 }, (_, index) => (
          <div className="w-16 h-2 relative bg-white">
            <motion.div
              initial={{ scaleY: 0 }} // Start fully collapsed (no blue)
              animate={spdef / 15 > index + 1 ? { scaleY: 1 } : { scaleY: 0 }} // Expand to full height
              transition={{
                duration: 1, // Transition duration
                ease: "easeInOut", // Smooth easing
                delay: 1 * index,
              }}
              className="absolute inset-0 bg-[#30a7d7] origin-bottom"
            />
          </div>
        ))}
        
      </div>
      <div className="flex flex-col flex-col-reverse gap-1 items-center">
      <h5>Speed</h5>
        {Array.from({ length: 15 }, (_, index) => (
          <div className="w-16 h-2 relative bg-white">
            <motion.div
              initial={{ scaleY: 0 }} // Start fully collapsed (no blue)
              animate={speed / 15 > index + 1 ? { scaleY: 1 } : { scaleY: 0 }} // Expand to full height
              transition={{
                duration: 1, // Transition duration
                ease: "easeInOut", // Smooth easing
                delay: 1 * index,
              }}
              className="absolute inset-0 bg-[#30a7d7] origin-bottom"
            />
          </div>
        ))}
        
      </div>
      </div>
    </div>
  );
};

export default StatsGraph;
