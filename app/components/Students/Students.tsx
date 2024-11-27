"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

// CAROUSEL DATA

interface DataType {
  name: string;
  username: string;
  body: string;
  img: string;
}

const reviews: DataType[] = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  // Split reviews for marquee rows
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-bgpink py-16 md:py-32">
      {/* Header Section */}
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-8 pb-10">
        {/* Left Side: Title and Description */}
        <div className="sm:max-w-md">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
            What Our Happy <br /> Students Say
          </h2>
          <p className="text-lg font-medium mt-2">
            Build skills with our courses and mentors from world-class companies.
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="mt-6 sm:mt-0">
          <button className="bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-3 px-6 border border-lightgrey hover:border-transparent rounded">
            Give Your Review
          </button>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full max-w-5xl mx-auto px-6 h-60 md:h-80">
        {/* First Marquee Row */}
        <Marquee pauseOnHover className="[--duration:15s] gap-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Second Marquee Row (Reverse Direction) */}
        <Marquee reverse pauseOnHover className="[--duration:15s] mt-4 gap-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-bgpink"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-bgpink"></div>
      </div>
    </div>
  );
}

export default MarqueeDemo;
