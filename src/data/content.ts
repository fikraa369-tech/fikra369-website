import type { Localized } from '../types';

export type Service = {
  slug: string;
  icon: 'building' | 'briefcase' | 'chart' | 'growth';
  title: Localized;
  short: Localized;
  intro: Localized;
  bullets: Localized[];
  process: Localized[];
};

export const services: Service[] = [
  {
    slug: 'company-formation', icon: 'building',
    title: { ar: 'تأسيس الشركات', en: 'Company Formation' },
    short: { ar: 'من الفكرة إلى خطوات تأسيس واضحة ومدروسة داخل دولة الإمارات.', en: 'From a business idea to a clear, structured formation path in the UAE.' },
    intro: { ar: 'نساعد رواد الأعمال والمستثمرين على فهم الخيارات المتاحة واتخاذ خطوات تأسيس منظمة تتناسب مع طبيعة النشاط والخطة التشغيلية.', en: 'We help entrepreneurs and investors understand available options and organize the formation journey around the nature of the business and operating plan.' },
    bullets: [
      { ar: 'تحديد متطلبات النشاط والمسار المناسب', en: 'Clarify activity requirements and the suitable route' },
      { ar: 'تنظيم المستندات والخطوات المطلوبة', en: 'Organize required documents and steps' },
      { ar: 'مراجعة الاحتياجات التشغيلية الأولية', en: 'Review initial operating requirements' },
      { ar: 'تقديم استشارة عملية قبل بدء الإجراءات', en: 'Provide practical consultation before starting procedures' }
    ],
    process: [
      { ar: 'فهم النشاط والأهداف', en: 'Understand the activity and goals' },
      { ar: 'تحديد الخيارات المناسبة', en: 'Identify suitable options' },
      { ar: 'تنظيم المتطلبات', en: 'Organize requirements' },
      { ar: 'خطة خطوات واضحة', en: 'Create a clear action plan' }
    ]
  },
  {
    slug: 'project-consulting', icon: 'briefcase',
    title: { ar: 'استشارات المشاريع', en: 'Project Consulting' },
    short: { ar: 'نحو قرارات أفضل قبل الاستثمار في الوقت والميزانية.', en: 'Better decisions before committing time and budget.' },
    intro: { ar: 'نراجع فكرة المشروع من زاوية عملية تساعدك على تحديد الأولويات، التحديات، الاحتياجات، والخطوات التالية قبل التنفيذ.', en: 'We review your project idea from a practical business perspective to clarify priorities, challenges, needs, and the next steps before execution.' },
    bullets: [
      { ar: 'تقييم الفكرة ونموذج العمل', en: 'Evaluate the idea and business model' },
      { ar: 'تحديد نقاط القوة والفجوات', en: 'Identify strengths and gaps' },
      { ar: 'ترتيب الأولويات والخطوات', en: 'Prioritize actions and milestones' },
      { ar: 'توصيات قابلة للتنفيذ', en: 'Actionable recommendations' }
    ],
    process: [
      { ar: 'جلسة اكتشاف', en: 'Discovery session' },
      { ar: 'تحليل الوضع الحالي', en: 'Current-state analysis' },
      { ar: 'تحديد الأولويات', en: 'Set priorities' },
      { ar: 'خطة تنفيذ مختصرة', en: 'Concise action plan' }
    ]
  },
  {
    slug: 'feasibility-study', icon: 'chart',
    title: { ar: 'دراسة الجدوى', en: 'Feasibility Study' },
    short: { ar: 'تحليل منظم يساعدك على تقييم جدوى المشروع قبل اتخاذ القرار.', en: 'Structured analysis to assess project viability before making the decision.' },
    intro: { ar: 'دراسة الجدوى تمنحك رؤية أوضح حول السوق والتشغيل والجوانب المالية، حتى يكون قرارك مبنيًا على معطيات وليس على الانطباع فقط.', en: 'A feasibility study gives you a clearer view of the market, operations and financial factors so your decision is based on evidence, not impressions alone.' },
    bullets: [
      { ar: 'تحليل السوق والفرصة', en: 'Market and opportunity analysis' },
      { ar: 'تصور تشغيلي أولي', en: 'Initial operational model' },
      { ar: 'قراءة التكاليف والإيرادات المتوقعة', en: 'Review expected costs and revenues' },
      { ar: 'تحديد المخاطر والافتراضات الرئيسية', en: 'Identify key risks and assumptions' }
    ],
    process: [
      { ar: 'جمع المعلومات', en: 'Collect information' },
      { ar: 'تحليل السوق والتشغيل', en: 'Analyze market and operations' },
      { ar: 'التحليل المالي', en: 'Financial analysis' },
      { ar: 'التوصيات والقرار', en: 'Recommendations and decision' }
    ]
  },
  {
    slug: 'business-development', icon: 'growth',
    title: { ar: 'تطوير الأعمال', en: 'Business Development' },
    short: { ar: 'للشركات التي تريد تحسين الأداء، النمو، أو التوسع بخطة أكثر وضوحًا.', en: 'For companies seeking stronger performance, growth, or expansion through a clearer plan.' },
    intro: { ar: 'نعمل على قراءة وضع النشاط الحالي وتحديد فرص التحسين والنمو، ثم تحويلها إلى أولويات عملية قابلة للمتابعة والقياس.', en: 'We review the current business position, identify improvement and growth opportunities, then translate them into practical priorities that can be tracked.' },
    bullets: [
      { ar: 'مراجعة الأداء الحالي', en: 'Review current performance' },
      { ar: 'تحديد فرص النمو', en: 'Identify growth opportunities' },
      { ar: 'تحسين رحلة العميل والعرض', en: 'Improve customer journey and offer' },
      { ar: 'ترتيب مبادرات التوسع', en: 'Prioritize expansion initiatives' }
    ],
    process: [
      { ar: 'تشخيص الوضع الحالي', en: 'Diagnose the current state' },
      { ar: 'تحديد فرص النمو', en: 'Identify growth opportunities' },
      { ar: 'بناء الأولويات', en: 'Build priorities' },
      { ar: 'قياس ومراجعة', en: 'Measure and review' }
    ]
  }
];

export const articles = [
  {
    slug: 'before-starting-business-uae',
    title: { ar: 'قبل تأسيس مشروعك في الإمارات: 5 أسئلة لازم تجاوب عليها', en: 'Before starting a business in the UAE: 5 questions to answer' },
    excerpt: { ar: 'القرار الجيد يبدأ بفهم النشاط والسوق والتكلفة وطريقة التشغيل قبل الدخول في الإجراءات.', en: 'A good decision starts with understanding the activity, market, cost and operating model before entering procedures.' },
    body: {
      ar: ['ما المشكلة التي يحلها مشروعك؟', 'من هو العميل الذي سيدفع مقابل الحل؟', 'ما حجم التكلفة الأولية والتشغيلية؟', 'كيف ستصل إلى العملاء؟', 'ما المؤشرات التي ستحدد نجاح المشروع في أول 90 يومًا؟'],
      en: ['What problem does your business solve?', 'Who is the customer willing to pay for the solution?', 'What are the initial and operating costs?', 'How will you reach customers?', 'Which indicators will define success in the first 90 days?']
    }
  },
  {
    slug: 'feasibility-study-importance',
    title: { ar: 'متى تحتاج دراسة جدوى فعلًا؟', en: 'When do you really need a feasibility study?' },
    excerpt: { ar: 'دراسة الجدوى ليست ملفًا للعرض فقط؛ قيمتها الحقيقية في تقليل القرارات المبنية على التخمين.', en: 'A feasibility study is not just a presentation document; its real value is reducing decisions based on guesswork.' },
    body: {
      ar: ['تحتاجها عندما يكون القرار الاستثماري كبيرًا مقارنة بقدرتك على تحمل المخاطر.', 'تحتاجها عندما تدخل سوقًا جديدًا أو نشاطًا لا تملك عنه بيانات كافية.', 'تحتاجها عندما تريد مقارنة أكثر من خيار قبل الالتزام.', 'الهدف هو تحسين جودة القرار وليس ضمان نتيجة تجارية محددة.'],
      en: ['You need one when the investment decision is significant compared with your risk capacity.', 'It is useful when entering a new market or activity with limited data.', 'It helps when comparing multiple options before committing.', 'The goal is to improve decision quality, not guarantee a specific commercial outcome.']
    }
  },
  {
    slug: 'business-growth-signals',
    title: { ar: '4 إشارات تقول إن نشاطك يحتاج خطة تطوير أعمال', en: '4 signs your business needs a development plan' },
    excerpt: { ar: 'النمو لا يعني زيادة المبيعات فقط؛ أحيانًا يبدأ بإصلاح العمليات والعرض وتجربة العميل.', en: 'Growth is not only about more sales; sometimes it begins by fixing operations, the offer and customer experience.' },
    body: {
      ar: ['الإيرادات ثابتة رغم زيادة الجهد التسويقي.', 'العملاء يسألون كثيرًا لكن التحويل ضعيف.', 'الخدمات كثيرة لكن الأولويات غير واضحة.', 'التوسع يتم بصورة عشوائية بدون مؤشرات قياس.'],
      en: ['Revenue is flat despite more marketing effort.', 'There are many inquiries but weak conversion.', 'There are many services but unclear priorities.', 'Expansion is happening without measurable indicators.']
    }
  }
];
