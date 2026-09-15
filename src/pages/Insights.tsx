import { ArrowUpRight, BookOpenText } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { articles } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Insights() {
  const { lang, t } = useLanguage();
  useReveal();
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow eyebrow--on-dark">
            {lang === "ar" ? "المعرفة" : "Insights"}
          </span>
          <h1>
            {lang === "ar"
              ? "محتوى عملي لأصحاب الأفكار والمشاريع."
              : "Practical thinking for founders and business owners."}
          </h1>
          <p>
            {lang === "ar"
              ? "مقالات مختصرة تساعدك على التفكير في القرار قبل اتخاذه."
              : "Short, useful articles to help you think through the decision before making it."}
          </p>
        </div>
      </section>
      <section className="section section--light">
        <div className="container insights-list">
          {articles.map((a, i) => (
            <Link
              className="insight-row reveal"
              to={`/insights/${a.slug}`}
              key={a.slug}
            >
              <div className="insight-row__icon">
                <BookOpenText size={26} />
              </div>
              <div>
                <span className="article-index">ARTICLE 0{i + 1}</span>
                <h2>{t(a.title)}</h2>
                <p>{t(a.excerpt)}</p>
              </div>
              <span className="round-link">
                <ArrowUpRight size={21} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
