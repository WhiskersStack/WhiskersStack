import { useEffect, useState } from "react";

const SPRITE_FRAMES = [
  "/sprites/neutral.png",
  "/sprites/blinkpng",
  "/sprites/tail-flick.png",
];

type PixelCatProps = {
  className?: string;
};

export default function PixelCat({
  className = "h-24 w-24",
}: PixelCatProps) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let resetTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      const rand = Math.random();

      if (resetTimeout) {
        clearTimeout(resetTimeout);
      }

      if (rand < 0.5) {
        setFrame(1);
        resetTimeout = setTimeout(() => setFrame(0), 150);
      } else {
        setFrame(2);
        resetTimeout = setTimeout(() => setFrame(0), 300);
      }
    }, 2000);

    return () => {
      clearInterval(interval);

      if (resetTimeout) {
        clearTimeout(resetTimeout);
      }
    };
  }, []);

  return (
    <img
      src={SPRITE_FRAMES[frame]}
      alt="WhiskersStack mascot"
      className={`${className} object-contain transition duration-200`}
    />
  );
}
