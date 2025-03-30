import { useEffect, useState } from "react";

const SPRITE_FRAMES = [
  "/sprites/neutral.png",     // 0 - neutral
  "/sprites/blink.png",       // 1 - blink
  "/sprites/tail-flick.png",  // 2 - tail flick
];

export default function PixelCat() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.random();

      if (rand < 0.5) {
        setFrame(1); // Blink
        setTimeout(() => setFrame(0), 150);
      } else {
        setFrame(2); // Tail flick
        setTimeout(() => setFrame(0), 300);
      }
    }, 2000); // Every 2 seconds, randomly blink or flick

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={SPRITE_FRAMES[frame]}
      alt="WhiskersStack mascot"
      className="w-24 h-24 object-contain transition duration-200 border border-red-500"
    />
  );
}
