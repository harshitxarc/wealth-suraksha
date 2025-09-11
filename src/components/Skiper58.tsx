// src/components/Skiper58.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils"; // if you don't have alias, change to "../../lib/utils" or correct relative path

const navigationItems = [
  { name: "Home", href: "/", description: "[0]" },
  { name: "Components", href: "/components", description: "[1]" },
  { name: "Pricing", href: "/pricing", description: "[2]" },
  { name: "How to use", href: "/docs/quick-start", description: "[3]" },
  { name: "Account", href: "/user", description: "[4]" },
  { name: "Login", href: "/login", description: "[7]" },
];

export const Skiper58: React.FC = () => {
  return (
    <ul className="bs flex min-h-full w-full flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl px-7 py-3 backdrop-blur-sm">
      {navigationItems.map((item, index) => (
        <li
          className="relative flex cursor-pointer flex-col items-center overflow-visible"
          key={index}
        >
          <div className="relative flex items-start">
            <TextRoll
              center
              className="text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] transition-colors lg:text-5xl"
            >
              {item.name}
            </TextRoll>
          </div>
        </li>
      ))}
    </ul>
  );
};

const STAGGER = 0.035;

type TextRollProps = {
  children: string;
  className?: string;
  center?: boolean;
};

export const TextRoll: React.FC<TextRollProps> = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden", className)}
      style={{ lineHeight: 0.75 }}
    >
      <div aria-hidden>
        {children.split("").map((l, i) => {
          const delay = center ? STAGGER * Math.abs(i - (children.length - 1) / 2) : STAGGER * i;
          return (
            <motion.span
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block"
              key={`top-${i}-${l}`}
            >
              {l}
            </motion.span>
          );
        })}
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {children.split("").map((l, i) => {
          const delay = center ? STAGGER * Math.abs(i - (children.length - 1) / 2) : STAGGER * i;
          return (
            <motion.span
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
              transition={{ ease: "easeInOut", delay }}
              className="inline-block"
              key={`bottom-${i}-${l}`}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

export default Skiper58;
