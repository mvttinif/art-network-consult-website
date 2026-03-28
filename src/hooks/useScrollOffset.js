import { useState, useEffect } from "react";

/**
 * Returns a dynamic scroll offset based on viewport height.
 * Smaller screens → smaller offset, larger screens → larger offset.
 */
const useScrollOffset = () => {
  const calculate = () => {
    const vh = window.innerHeight;
    if (vh < 600) return -30; // mobile small
    if (vh < 800) return 0; // mobile / tablet
    if (vh < 1000) return 20; // laptop
    return 40; // desktop / large monitors
  };

  const [offset, setOffset] = useState(calculate);

  useEffect(() => {
    const handleResize = () => setOffset(calculate());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return offset;
};

export default useScrollOffset;
