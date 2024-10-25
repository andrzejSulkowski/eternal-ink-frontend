import { useCallback, useEffect, useState } from "react";

export const useIsMobile = (opt?: { query: string }) => {
  const [matches, setMatches] = useState<null | boolean>(null);
  const [query] = useState(opt ? opt.query : "(max-width: 768px)");

  const handleMatchChange = useCallback(
    (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    },
    [setMatches]
  );
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 768px)");

    mediaQueryList.addEventListener("change", (e) => handleMatchChange(e));
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener("change", handleMatchChange);
    };
  }, [query]);

  return matches;
};
