"use client";

import { useEffect, useState } from "react";
import CursorCrosshair from "./ui/CursorCrosshair";

export default function CanvasCursorWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;
  return <CursorCrosshair />;
}
