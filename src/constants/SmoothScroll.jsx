import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  const rafId = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,         
      smooth: true,
      smoothTouch: true,     
      wheelMultiplier: 1,   
      touchMultiplier: 2,   
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }

    rafId.current = requestAnimationFrame(raf);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId.current);
      } else {
        rafId.current = requestAnimationFrame(raf);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener("visibilitychange", onVisibility);
      try {
        lenis.destroy();
      } catch (e) {
        console.error("Error destroying Lenis instance:", e);
      }
      lenisRef.current = null;
    };
  }, []);

  return null;
}
