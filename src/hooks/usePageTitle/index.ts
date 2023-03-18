import { useEffect } from "react";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title || "Projeto Company";
    return () => {
      document.title = "Projeto Company";
    };
  }, [title]);
  return null;
}
