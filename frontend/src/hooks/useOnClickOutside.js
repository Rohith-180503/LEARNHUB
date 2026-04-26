import { useEffect } from "react";

export function useOnClickOutside(refs, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Check if the click was outside all the provided refs
      const isOutside = refs.every((ref) => {
        return !ref.current || !ref.current.contains(event.target);
      });

      if (isOutside) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}
