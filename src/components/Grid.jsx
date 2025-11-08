import React, { useRef, useEffect, useState } from "react";
import img11 from "../assets/11.png"; 
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img77 from "../assets/77.png"; 
import busVideo from "../assets/bus.mp4";
export default function Grid() {
  const videoRef = useRef(null);
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });
  const images = [img11, img2, img3, img4, img5, img6, img7, img8, img9, img77];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) videoRef.current.play();
        else videoRef.current.pause();
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);
  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === 0 ? images.length - 1 : prev.index - 1,
    }));
  };
  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === images.length - 1 ? 0 : prev.index + 1,
    }));
  };
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-2 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1400px]">

        {images.slice(0, 3).map((img, idx) => (
          <GridItem key={idx} img={img} idx={idx} setLightbox={() => setLightbox({ isOpen: true, index: idx })} />
        ))}

        {images.slice(3, 6).map((img, idx) => (
          <GridItem key={idx + 3} img={img} idx={idx + 3} setLightbox={() => setLightbox({ isOpen: true, index: idx + 3 })} />
        ))}

        {images.slice(6, 8).map((img, idx) => (
          <GridItem key={idx + 6} img={img} idx={idx + 6} setLightbox={() => setLightbox({ isOpen: true, index: idx + 6 })} />
        ))}
<div className="row-span-2 w-full aspect-[428/624] self-end lg:-translate-y-8">
  <video
    ref={videoRef}
    src={busVideo}
    muted
    controls
    className="w-full h-full object-cover"
  />
</div>
        <GridItem img={img77} idx={9} setLightbox={() => setLightbox({ isOpen: true, index: 9 })} />
        <GridItem img={img9} idx={10} setLightbox={() => setLightbox({ isOpen: true, index: 10 })} />
      </div>
      {lightbox.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <button
            onClick={() => setLightbox({ isOpen: false, index: 0 })}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-3xl font-bold"
          >
            &#10094;
          </button>

          <img
            src={images[lightbox.index]}
            alt="Enlarged"
            className="max-h-full max-w-full object-contain animate-scaleUp"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-3xl font-bold"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
function GridItem({ img, idx, setLightbox }) {
  return (
     <div
      className="relative w-full aspect-[428/250] sm:aspect-[4/3] lg:aspect-[16/12] cursor-pointer overflow-hidden rounded-[20px]"
      onClick={setLightbox}
    >
      <img
        src={img}
        alt={`bus-${idx + 1}`}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
