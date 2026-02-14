"use client";

import { useEffect, useState } from "react";
import CanvasCursor from "@/components/FuildCursor";

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
  return <CanvasCursor />;
}
