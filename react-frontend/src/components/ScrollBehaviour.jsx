import { useEffect, useRef, useState } from "react";

const ScrollBehaviour = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setIsVIsible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVIsible(entry.isIntersecting));
    });
    const { current } = domRef;
    observer.observe(current);
    return () => {
      observer.unobserve(current);
    };
  }, []);
  return (
    <div className={`${isVisible ? "fade-in" : "hidden"}`} ref={domRef}>
      {children}
    </div>
  );
};

export default ScrollBehaviour;
