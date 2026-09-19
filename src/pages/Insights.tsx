import { ArrowUpRight, BookOpenText } from "lucide-react";

import { Link } from "react-router-dom";

import { useLanguage } from "../LanguageContext";

import { articles } from "../data/content";

import { useReveal } from "../hooks/useReveal";

export function Insights() {
  const { lang, t } = useLanguage();

  useReveal();

  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1);

  const categoryLabels: Record<string, { ar: string; en: string }> = {
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

  const getCategory = (category: string) =>
    categoryLabels[category]?.[lang] ?? category;

  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow eyebrow--on-dark">
            {lang === "ar" ? "المعرفة" : "Insights"}
          </span>

          <h1>
            {lang === "ar"
              ? "معرفة عملية قبل اتخاذ قرار الأعمال."
              : "Practical knowledge before making business decisions."}
          </h1>

          <p>
            {lang === "ar"
              ? "مقالات مختصرة تساعد رواد الأعمال وأصحاب المشاريع على فهم الخيارات وترتيب الخطوات."
              : "Practical articles helping founders and business owners understand options and organize their next steps."}
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="insights-heading">
            <div>
              <span className="eyebrow">
                {lang === "ar" ? "مقالات مختارة" : "Featured insight"}
              </span>

              <h2>
                {lang === "ar"
                  ? "أفكار تساعدك على اتخاذ قرار أوضح."
                  : "Ideas that help you make clearer decisions."}
              </h2>
            </div>
          </div>

          <Link
            className="insight-featured reveal"
            to={`/insights/${featuredArticle.slug}`}
          >
            <div className="insight-featured__visual">
              <BookOpenText size={42} />
            </div>

            <div className="insight-featured__content">
              <div className="insight-meta">
                <span>{getCategory(featuredArticle.category)}</span>

                <span>
                  {featuredArticle.readTime}{" "}
                  {lang === "ar" ? "دقائق قراءة" : "min read"}
                </span>
              </div>

              <h2>{t(featuredArticle.title)}</h2>

              <p>{t(featuredArticle.excerpt)}</p>

              <span className="insight-featured__link">
                {lang === "ar" ? "اقرأ المقال" : "Read article"}

                <ArrowUpRight size={20} />
              </span>
            </div>
          </Link>

          <div className="insights-section-heading">
            <span className="eyebrow">
              {lang === "ar" ? "أحدث المقالات" : "Latest articles"}
            </span>

            <h2>
              {lang === "ar"
                ? "محتوى عملي لأصحاب الأفكار والمشاريع."
                : "Practical content for founders and business owners."}
            </h2>
          </div>

          <div className="insights-grid">
            {latestArticles.map((article, index) => (
              <Link
                className="insight-card reveal"
                to={`/insights/${article.slug}`}
                key={article.slug}
              >
                <div className="insight-card__top">
                  <span className="article-index">ARTICLE 0{index + 2}</span>

                  <BookOpenText size={24} />
                </div>

                <div className="insight-meta">
                  <span>{getCategory(article.category)}</span>

                  <span>
                    {article.readTime} {lang === "ar" ? "دقائق" : "min"}
                  </span>
                </div>

                <h3>{t(article.title)}</h3>

                <p>{t(article.excerpt)}</p>

                <span className="insight-card__link">
                  {lang === "ar" ? "اقرأ المقال" : "Read article"}

                  <ArrowUpRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container narrow">
          <div className="insights-cta">
            <span className="eyebrow eyebrow--on-dark">
              {lang === "ar" ? "خطوتك التالية" : "Your next step"}
            </span>

            <h2>
              {lang === "ar"
                ? "عندك فكرة أو مشروع وتحتاج رؤية أوضح؟"
                : "Have a business idea or project that needs clarity?"}
            </h2>

            <p>
              {lang === "ar"
                ? "ناقش وضع مشروعك مع فريق فكرة واحصل على توجيه عملي للخطوة التالية."
                : "Discuss your business situation with Fikra and get practical direction for the next step."}
            </p>

            <Link to="/contact" className="button button--gold">
              {lang === "ar" ? "اطلب استشارة" : "Request Consultation"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
