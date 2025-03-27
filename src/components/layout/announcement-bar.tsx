"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const announcement =
    "Shop for 999/- & Get Perfume Sample For FREE | *Offer applicable on the checkout";
  const link = "/collections/ryze-gums";

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const scrollText = () => {
      if (!containerRef.current || !contentRef.current) return;

      // Only animate if the content is wider than the container
      if (contentRef.current.scrollWidth > containerRef.current.clientWidth) {
        const animation = contentRef.current.animate(
          [
            { transform: "translateX(0)" },
            {
              transform: `translateX(-${
                contentRef.current.scrollWidth -
                containerRef.current.clientWidth
              }px)`,
            },
          ],
          {
            duration: 15000,
            iterations: Infinity,
            direction: "alternate",
            easing: "linear",
          }
        );

        return () => animation.cancel();
      }
    };

    const animationCleanup = scrollText();

    // Reapply animation if window size changes
    const handleResize = () => {
      if (animationCleanup) animationCleanup();
      scrollText();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationCleanup) animationCleanup();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="bg-black text-[18px] text-white py-2 text-center overflow-hidden sticky top-0 z-50"
      ref={containerRef}
    >
      <div className="inline-block whitespace-nowrap" ref={contentRef}>
        <Link href={link} className="hover:underline">
          {announcement}
        </Link>
      </div>
    </div>
  );
}
