import { useEffect, useRef, type RefObject } from "react";

function useClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T | null> | RefObject<T | null>[],
  handler: (event: PointerEvent) => void,
): void {
  const savedHandler = useRef(handler);
  useEffect(() => {
    savedHandler.current = handler;
  },[handler]);

  useEffect(() => {
    const refArray = Array.isArray(refs) ? refs : [refs];

    const listner = (event: PointerEvent) => {
      const path = event.composedPath?.() ?? [];
      const target = event.target as Node;
      const isInside = refArray.some((ref) => {
        const element = ref.current;
        if (!element) return false;
        return path.length ? path.includes(element) : element.contains(target);
      });

      if (!isInside) {
        savedHandler.current(event);
      }
    };
    document.addEventListener("pointerdown", listner);

    return () => {
      document.removeEventListener("pointerdown", listner);
    };
  }, [refs]);
}

export default useClickOutside;
