import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const CursorCrosshair = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      console.log(e.clientX, e.clientY);
      
      if (!isVisible) setIsVisible(true);
    };

    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Vertical line */}
      <motion.div
        className="fixed top-0 left-0 w-[1px] h-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          opacity: isVisible ? 0.15 : 0,
          background: "linear-gradient(to bottom, transparent 0%, hsl(var(--warm-white)) 50%, transparent 100%)",
        }}
        transition={{ opacity: { duration: 0.8 } }}
      />
      {/* Horizontal line */}
      <motion.div
        className="fixed left-0 top-0 h-[1px] w-full pointer-events-none z-[9999]"
        style={{
          y: cursorYSpring,
          opacity: isVisible ? 0.15 : 0,
          background: "linear-gradient(to right, transparent 0%, hsl(var(--warm-white)) 50%, transparent 100%)",
        }}
        transition={{ opacity: { duration: 0.8 } }}
      />
    </>
  );
};

export default CursorCrosshair;
