import React, { useEffect, useRef, useState } from "react";

function FadeIn({ children }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  });
  
  return <div ref={ref} className={`transition-all duration-700 ease-out ${
  isVisible
  ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
    {children}
    </div>;
}

export default FadeIn;
