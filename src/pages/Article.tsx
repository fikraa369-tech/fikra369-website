import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MessageCircle,
} from "lucide-react";

import { Link, Navigate, useParams } from "react-router-dom";

import { useLanguage } from "../LanguageContext";

import { articles } from "../data/content";

export function Article() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const BackIcon = lang === "ar" ? ArrowRight : ArrowLeft;

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  const formattedDate = new Intl.DateTimeFormat(
    lang === "ar" ? "ar-AE" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  ).format(new Date(article.date));

  const categoryLabels: Record<
    string,
    {
      ar: string;
      en: string;
    }
  > = {
    "Company Formation": {
      ar: "تأسيس الشركات",
      en: "Company Formation",
    },

    "Feasibility Study": {
      ar: "دراسة الجدوى",
      en: "Feasibility Study",
    },

    "Business Development": {
      ar: "تطوير الأعمال",
      en: "Business Development",
    },

    "Project Consulting": {
      ar: "استشارات المشاريع",
      en: "Project Consulting",
    },
  };

  const category = categoryLabels[article.category]?.[lang] ?? article.category;

  const whatsappMessage =
    lang === "ar"
      ? `مرحباً، أريد مناقشة موضوع المقال: ${t(article.title)}`
      : `Hello, I would like to discuss the topic of this article: ${t(
          article.title,
        )}`;

  const whatsappUrl = `https://wa.me/971502341288?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <article className="article-page">
      {/* Article header */}
      <div className="container article-container">
        <Link to="/insights" className="back-link">
          <BackIcon size={18} />

          {lang === "ar" ? "العودة إلى المعرفة" : "Back to insights"}
        </Link>

        <div className="article-header">
          <span className="eyebrow">FIKRA INSIGHTS</span>

          <div className="article-meta">
            <span className="article-category">{category}</span>

            <span className="article-date">{formattedDate}</span>

            <span className="article-read-time">
              <Clock3 size={14} />
              {article.readTime} {lang === "ar" ? "دقائق قراءة" : "min read"}
            </span>
          </div>

          <h1>{t(article.title)}</h1>

          <p className="article-lead">{t(article.excerpt)}</p>
        </div>

        {/* Article body */}
        <div className="article-body">
          {article.body[lang].map((paragraph, index) => (
            <section
              key={`${article.slug}-${index}`}
              className="article-section"
            >
              <div className="article-step">0{index + 1}</div>

              <div className="article-section__content">
                <p>{paragraph}</p>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="article-callout">
          <div className="article-callout__content">
            <span className="eyebrow eyebrow--on-dark">
              {lang === "ar" ? "خطوتك التالية" : "Your next step"}
            </span>

            <h2>
              {lang === "ar"
                ? "هل تحتاج تناقش وضع مشروعك بصورة عملية؟"
                : "Want to discuss your business situation practically?"}
            </h2>

            <p>
              {lang === "ar"
                ? "إذا كنت في مرحلة دراسة فكرة أو تأسيس مشروع أو تطوير نشاط قائم، يمكننا مناقشة وضعك وتحديد الخطوة التالية."
                : "Whether you are exploring an idea, setting up a business, or developing an existing activity, we can discuss your situation and define the next step."}
            </p>
          </div>

          <div className="article-callout__actions">
            <Link to="/contact" className="button button--gold">
              {lang === "ar" ? "اطلب استشارة" : "Request Consultation"}

              <ArrowUpRight size={18} />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button button--outline-light"
            >
              <MessageCircle size={18} />

              {lang === "ar" ? "تواصل عبر واتساب" : "WhatsApp us"}
            </a>
          </div>
        </div>
      </div>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="section section--cream article-related">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                {lang === "ar" ? "مقالات ذات صلة" : "Related insights"}
              </span>

              <h2>
                {lang === "ar"
                  ? "اقرأ المزيد من المعرفة العملية."
                  : "Explore more practical insights."}
              </h2>
            </div>

            <div className="articles-grid">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  to={`/insights/${relatedArticle.slug}`}
                  className="article-card"
                >
                  <div className="article-card__top">
                    <span className="article-index">FIKRA INSIGHTS</span>

                    <ArrowUpRight size={20} />
                  </div>

                  <div className="insight-meta">
                    <span>
                      {categoryLabels[relatedArticle.category]?.[lang] ??
                        relatedArticle.category}
                    </span>

                    <span>
                      {relatedArticle.readTime}{" "}
                      {lang === "ar" ? "دقائق" : "min"}
                    </span>
                  </div>

                  <h3>{t(relatedArticle.title)}</h3>

                  <p>{t(relatedArticle.excerpt)}</p>

                  <span className="card-link">
                    {lang === "ar" ? "اقرأ المقال" : "Read article"}

                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
