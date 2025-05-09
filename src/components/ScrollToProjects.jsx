
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToProjects() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" && sessionStorage.getItem("fromProjects")) {
      sessionStorage.removeItem("fromProjects");      
      setTimeout(() => {
        const el = document.getElementById("projects");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [pathname]);

  return null;
}
