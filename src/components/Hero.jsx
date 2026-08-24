import { useState, useEffect, useCallback } from 'react';

// Sliding hero banners — extracted from the existing GRIET website
// (https://www.griet.ac.in/) homepage carousel, kept in the same order.
const HERO_SLIDES = [
  '/hero-slides/01-nirf-banner.jpg',
  '/hero-slides/02-reunion-banner.jpg',
  '/hero-slides/03-annual-day.jpg',
  '/hero-slides/04-pulse-26.jpg',
  '/hero-slides/05-novartis-winner.png',
  '/hero-slides/06-vivitsu-26.jpeg',
  '/hero-slides/07-nidar-center-banner.jpg',
  '/hero-slides/08-alumni-banner.jpeg',
  '/hero-slides/09-iic-glimpse-banner.jpg',
  '/hero-slides/10-iic-banner.jpg',
  '/hero-slides/11-tedx-center-banner.jpg',
  '/hero-slides/12-nhetis-banner.png',
  '/hero-slides/13-grad-day-25-banner.jpg',
  '/hero-slides/14-independence-day-banner.jpg',
  '/hero-slides/15-place-jp.jpg',
  '/hero-slides/16-sports-awards-2024-25.jpg',
  '/hero-slides/17-pi-square-banner.jpg',
  '/hero-slides/18-epitome-25-banner.jpg',
  '/hero-slides/19-b1-aws-workshop.png',
  '/hero-slides/20-b4-elysium-collage.png',
  '/hero-slides/21-slider7.jpg',
  '/hero-slides/22-slider1.jpg',
];

const SLIDE_INTERVAL_MS = 5000;

function HeroBannerSlider() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i) => {
    setIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {HERO_SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${(i - index) * 100}%)` }}
        />
      ))}

      {/* Prev / Next controls — same navigation behaviour as the original carousel */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/25 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/25 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[320px] sm:min-h-[420px] md:min-h-[480px] md:h-[600px] flex items-center overflow-hidden">
      <HeroBannerSlider />
    </section>
  )
}
