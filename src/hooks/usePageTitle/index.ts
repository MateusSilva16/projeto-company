import { useEffect } from "react";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title || "Project Budget";
    return () => {
      document.title = "Project Budget";
    };
  }, [title]);
  return null;
}
