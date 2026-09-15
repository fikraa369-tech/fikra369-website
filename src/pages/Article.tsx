import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { articles } from "../data/content";

export function Article() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <Navigate to="/insights" replace />;
  const BackIcon = lang === "ar" ? ArrowRight : ArrowLeft;
  return (
    <article className="article-page">
      <div className="container article-container">
        <Link to="/insights" className="back-link">
          <BackIcon size={18} />
          {lang === "ar" ? "العودة إلى المعرفة" : "Back to insights"}
        </Link>
        <span className="eyebrow">FIKRA INSIGHTS</span>
        <h1>{t(article.title)}</h1>
        <p className="article-lead">{t(article.excerpt)}</p>
        <div className="article-body">
          {article.body[lang].map((p, i) => (
            <section key={p}>
              <span className="article-step">0{i + 1}</span>
              <p>{p}</p>
            </section>
          ))}
        </div>
        <div className="article-callout">
          <h2>
            {lang === "ar"
              ? "هل تحتاج تناقش وضع مشروعك بصورة عملية؟"
              : "Want to discuss your business situation practically?"}
          </h2>
          <Link to="/contact" className="button button--gold">
            {lang === "ar" ? "اطلب استشارة" : "Request Consultation"}
          </Link>
        </div>
      </div>
    </article>
  );
}
