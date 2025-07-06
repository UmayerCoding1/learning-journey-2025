

"use client";
import React, { useEffect, useState } from "react";

const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverElement = target.closest("li, a, button");

      setIsHovering(!!hoverElement);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mousePosition]);

  return (
    <>
      <div
        className={`w-8 h-8 bg-blue-100/50 border border-blue-500 rounded-full fixed pointer-events-none transition-transform duration-200 ease-in-out`}
        style={{
          top: `${mousePosition.y - 12}px`,
          left: `${mousePosition.x - 12}px`,
          transform: isHovering ? "scale(2)" : "scale(1)",
          position: "fixed",
          zIndex: 9999,
        }}
      />
      <div
        className="w-2 h-2 bg-blue-500 rounded-full fixed pointer-events-none"
        style={{
          top: `${mousePosition.y - 2}px`,
          left: `${mousePosition.x - 2}px`,
          position: "fixed",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default MouseTrail;
