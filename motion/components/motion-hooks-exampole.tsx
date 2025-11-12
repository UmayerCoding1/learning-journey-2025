"use client";
import { IconRocket } from "@tabler/icons-react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

const MotionHooksExample = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
        {features.map((feature, index) => (
          <Card key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default MotionHooksExample;

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useTransform(scrollYProgress, [0, 1], [200, -300]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(latest);
  // })
  return (
    <div ref={ref} className="grid grid-cols-2 gap-2 py-40">
      <div className="flex flex-col gap-5">
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With a single prompt, you can generate ultra realistic images in seconds. Try it out! ",
    content: (
      <div>
        <Image
          src={"https://assets.aceternity.com/pro/car-1.jpg"}
          alt="car"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With a single prompt, you can generate ultra realistic images in seconds. Try it out! ",
    content: (
      <div>
        <Image
          src={
            "https://sidefolio.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1692544350322-ac70cfd63614%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=640&q=75"
          }
          alt="car"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With a single prompt, you can generate ultra realistic images in seconds. Try it out! ",
    content: (
      <div>
        <Image
          src={
            "https://sidefolio.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1692005561659-cdba32d1e4a1%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=640&q=75"
          }
          alt="car"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
];
