import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);

  return (
    <div className="site-shell">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  );
}
