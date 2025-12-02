"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {motion} from 'motion/react';


const MotionImage = motion(Image);
const useOutsiteClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

const Class5 = () => {
  const [current, setCurrent] = useState<Card | null>(null);

  const ref = useOutsiteClick(() => setCurrent(null));
  return (
    <div className="min-h-screen bg-gray-100 py-40">
      {current && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-sm" />
      )}
      {current && (
        <motion.div
         layoutId={`card-${current.title}`}
        ref={ref} className="fixed inset-0 z-20 m-auto h-[400px] w-80 rounded-2xl border border-neutral-200 bg-white p-4">
          <MotionImage
          layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            width={200}
            height={200}
            className="aspect-square h-60 rounded-lg"
          />

          <div className="flex flex-col items-start justify-between gap-3">
            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-col items-start gap-2">
                <h2 className="text-xl font-bold tracking-tight text-black">
                  {current.title}
                </h2>
                <p className="text-[10px] text-neutral-500">
                  {current.description}
                </p>
              </div>
            </div>

            <Link
              href={current.ctaLink}
              className="rounded-full bg-green-500 px-2 py-1 text-xs text-white"
            >
              {current.ctaText}
            </Link>

            <div className="h-40 overflow-auto py-10 mask-[linear-gradient(to_top,transparent_10%,black_80%)]">{current.content()}</div>
          </div>
        </motion.div>
      )}

      <div className="mx-auto flex max-w-lg flex-col gap-10 rounded-lg">
        {cards.map((card) => (
          <motion.button
           layoutId={`card-${card.title}`}

            key={card.title}
            onClick={() => setCurrent(card)}
            className="ng-white flex items-center justify-between rounded-lg border border-neutral-200 p-4"
          >
            <div className="flex w-full items-center justify-between rounded-lg">
              <div className="flex items-center gap-4">
                <MotionImage
                layoutId={`card-image-${card.title}`}
                  src={card.src}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="aspect-square h-10 rounded-lg"
                />

                <div className="flex flex-col items-start gap-2">
                  <h2 className="text-base font-bold text-black">
                    {card.title}
                  </h2>
                  <p className="text-[10px] text-neutral-500">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="rounded-full bg-green-500 px-2 py-1 text-xs text-white">
                {card.ctaText}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Class5;

type Card = {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

export const cards: Card[] = [
  {
    title: "Getting Started with React",
    description: "Learn the fundamentalsr.",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Learn More",
    ctaLink: "/react-guide",
    content: () => (
      <p className="text-[10px] text-neutral-500">
        React is a JavaScript library for building user interfaces with reusable
        components. It uses a virtual DOM to efficiently update the UI and
        provides a declarative approach to building applications. With React,
        you can create dynamic, fast, and scalable web applications that provide
        excellent user experiences across all devices and platforms.
      </p>
    ),
  },
  {
    title: "Next.js Framework Essentials",
    description: "Master Next.js and build ",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Explore",
    ctaLink: "/nextjs-guide",
    content: () => (
      <p className="text-[10px] text-neutral-500">
        Next.js is a powerful React framework that enables you to build
        production-ready applications with server-side rendering, static
        generation, and API routes. It provides an excellent developer
        experience with features like automatic code splitting, optimized
        images, and built-in CSS support. Next.js simplifies the process of
        creating full-stack web applications with modern best practices and
        performance optimizations.
      </p>
    ),
  },
  {
    title: "Advanced JavaScript Concepts",
    description: "Deepen your understanding of ",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Dive In",
    ctaLink: "/js-advanced",
    content: () => (
      <p className="text-[10px] text-neutral-500">
        Understanding advanced JavaScript concepts is crucial for building
        robust applications. Topics like closures, prototypes, async/await, and
        functional programming paradigms will transform you into a more capable
        developer. Mastering these concepts enables you to write cleaner, more
        efficient code and tackle complex programming challenges with confidence
        and expertise.
      </p>
    ),
  },
  {
    title: "Advanced JavaScript Concepts2",
    description: "Deepen your understanding of ",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Dive In",
    ctaLink: "/js-advanced",
    content: () => (
      <p className="text-[10px] text-neutral-500">
        Understanding advanced JavaScript concepts is crucial for building
        robust applications. Topics like closures, prototypes, async/await, and
        functional programming paradigms will transform you into a more capable
        developer. Mastering these concepts enables you to write cleaner, more
        efficient code and tackle complex programming challenges with confidence
        and expertise.
      </p>
    ),
  },
];
