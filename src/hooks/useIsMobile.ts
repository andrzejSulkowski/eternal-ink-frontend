import { useEffect, useState } from "react";

export const useIsMobile = (opt?: { query: string }) => {
  const [matches, setMatches] = useState<null | boolean>(null);
  const [query] = useState(opt ? opt.query : "(max-width: 768px)");

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 768px)");

    const handleMatchChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQueryList.addEventListener("change", (e) => handleMatchChange(e));
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener("change", handleMatchChange);
    };
  }, [query]);

  return matches;
};
