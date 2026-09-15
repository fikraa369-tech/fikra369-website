import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
export function NotFound() {
  const { lang } = useLanguage();
  return (
    <section className="not-found">
      <div>
        <span>404</span>
        <h1>{lang === "ar" ? "الصفحة غير موجودة" : "Page not found"}</h1>
        <p>
          {lang === "ar"
            ? "الرابط الذي فتحته غير متاح أو تم تغييره."
            : "The link you opened is unavailable or has changed."}
        </p>
        <Link to="/" className="button button--gold">
          {lang === "ar" ? "العودة للرئيسية" : "Back home"}{" "}
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
