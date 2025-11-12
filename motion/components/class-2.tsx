"use client";
import {
  IconMessage2,
  IconPackage,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Class2 = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className=" w-full h-screen flex items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}

            animate={{
                opacity:1,
                scale: 1.05,
                filter: "blur(0px)"
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="w-[280px] max-h-[37em] h-[37em] rounded-md  shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(0,0,0,0.04)] p-4 flex flex-col "
          >
            <h1 className="text-sm font-medium">BuildBox UI components</h1>
            <p className="text-sm mt-4 text-neutral-600">
              A collection of UI components built with Tailwind CSS
            </p>

            <div
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center cursor-pointer"
            >
              <div className="flex items-center  gap-1.5 mt-4 w-fit shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_4px_6px_rgba(0,0,0,0.04)] px-2 py-1 rounded-md ">
                <IconPackage />
                <span className="text-sm text-neutral-600 font-medium">
                  BuildBox
                </span>
                <IconX size={10} />
              </div>
            </div>

            <div className=" flex-1 rounded-md mt-2 divide-y divide-neutral-200 border border-dashed border-neutral-200 bg-gray-100 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute insite-0 w-full h-full bg-white divide-y divide-neutral-200 border border-neutral-200 cursor-pointer"
              >
                <div className="flex items-center gap-4 p-4">
                  <IconMessage2 size={26} />
                  <div>
                    <h1 className="text-sm font-medium">
                      BuildBox UI components
                    </h1>
                    <p className="text-sm font-medium mt-1 text-neutral-500">
                      A collection of UI components built with Tailwind CSS
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <IconMessage2 size={26} />
                  <div>
                    <h1 className="text-sm font-medium">
                      BuildBox UI components
                    </h1>
                    <p className="text-sm font-medium mt-1 text-neutral-500">
                      A collection of UI components built with Tailwind CSS
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <IconMessage2 size={26} />
                  <div>
                    <h1 className="text-sm font-medium">
                      BuildBox UI components
                    </h1>
                    <p className="text-sm font-medium mt-1 text-neutral-500">
                      A collection of UI components built with Tailwind CSS
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <IconMessage2 size={26} />
                  <div>
                    <h1 className="text-sm font-medium">
                      BuildBox UI components
                    </h1>
                    <p className="text-sm font-medium mt-1 text-neutral-500">
                      A collection of UI components built with Tailwind CSS
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center  mt-1  gap-4 p-2">
                  <IconPlus size={10} />
                  <span>Create Project</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Class2;
