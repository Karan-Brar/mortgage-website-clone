import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const AnimatedImage = ({ src, alt, className, width= 10, height= 10}) => {
  const imgRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const imgElement = imgRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          imgElement.classList.add("animate-fade-in"); // Use the fade-in animation class
          setHasAnimated(true);
        }
      });
    });

    observer.observe(imgElement);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return <Image ref={imgRef} src={src} alt={alt} className={className} width={width} height={height} />;
};

export default AnimatedImage;
