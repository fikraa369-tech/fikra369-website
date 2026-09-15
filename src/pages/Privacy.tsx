import { useLanguage } from "../LanguageContext";

export function Privacy() {
  const { lang } = useLanguage();
  const sections =
    lang === "ar"
      ? [
          [
            "المعلومات التي نجمعها",
            "قد نجمع المعلومات التي ترسلها مباشرة عبر نماذج الموقع، مثل الاسم ورقم الهاتف والبريد الإلكتروني وطبيعة الاستفسار.",
          ],
          [
            "كيف نستخدم المعلومات",
            "نستخدم البيانات للرد على الاستفسارات، تنظيم طلبات الاستشارة، تحسين تجربة الموقع، وقياس أداء القنوات التسويقية عند تفعيل أدوات القياس.",
          ],
          [
            "مشاركة البيانات",
            "لا نبيع بياناتك. قد تُستخدم خدمات تقنية موثوقة لتشغيل الموقع أو النماذج أو التحليلات، وفق إعدادات المشروع وسياسات تلك الخدمات.",
          ],
          [
            "ملفات تعريف الارتباط",
            "قد يستخدم الموقع أدوات تحليل أو تتبع عند تفعيلها. يمكن تحديث هذه السياسة عند إضافة أدوات مثل Google Analytics أو Meta Pixel.",
          ],
          [
            "التواصل",
            "للاستفسارات المتعلقة بالخصوصية، استخدم بيانات التواصل المنشورة في الموقع بعد اعتمادها رسميًا.",
          ],
        ]
      : [
          [
            "Information we collect",
            "We may collect information you submit directly through website forms, such as your name, phone number, email address and the nature of your inquiry.",
          ],
          [
            "How we use information",
            "We use data to respond to inquiries, organize consultation requests, improve the website experience and measure marketing performance when analytics tools are enabled.",
          ],
          [
            "Sharing data",
            "We do not sell your data. Trusted technology services may be used to operate the website, forms or analytics according to project settings and their policies.",
          ],
          [
            "Cookies",
            "The website may use analytics or tracking tools when enabled. This policy can be updated when tools such as Google Analytics or Meta Pixel are added.",
          ],
          [
            "Contact",
            "For privacy-related questions, use the official contact details published on the website once approved.",
          ],
        ];
  return (
    <section className="legal-page">
      <div className="container legal-container">
        <span className="eyebrow">FIKRA 369</span>
        <h1>{lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}</h1>
        <p className="legal-intro">
          {lang === "ar"
            ? "توضح هذه السياسة بصورة عامة كيف يمكن التعامل مع المعلومات التي يرسلها زوار الموقع."
            : "This policy explains in general terms how information submitted by website visitors may be handled."}
        </p>
        {sections.map(([h, p]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{p}</p>
          </section>
        ))}
      </div>
    </section>
  );
}
