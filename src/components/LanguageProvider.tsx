import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, variables?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Header
    "header.features": "Features",
    "header.pricing": "Pricing",
    "header.faq": "FAQ",
    "header.contact": "Contact",
    "header.getStarted": "Get Started",
    "header.telegram": "Telegram",

    // Hero
    "hero.badge": "Metadata Assistant for Artists",
    "hero.title": "We prepare your Song Passport",
    "hero.subtitle":
      "Clean, consistent track & artist data (ISRC/UPC/dates/artwork) so DSPs pay you fully and on time. We act as your agent/assistant — you keep 100% of the rights. Crypto-friendly.",
    "hero.cta": "Get Song Passport",
    "hero.learnMore": "Learn More",
    "hero.trustBadge1": "Keep 100% rights",
    "hero.trustBadge2": "24–48h turnaround",
    "hero.trustBadge3": "Crypto payments",
    "hero.mockup.verified": "Ready",
    "hero.mockup.title": "Song Passport",
    "hero.mockup.trackTitle": "Midnight Dreams",
    "hero.mockup.artist": "by Alex Artist",
    "hero.mockup.genre": "Genre:",
    "hero.mockup.genreValue": "Electronic",
    "hero.mockup.duration": "Duration:",
    "hero.mockup.status": "Status:",
    "hero.mockup.statusValue": "Ready to upload",
    "hero.mockup.blockchain": "Sources:",

    // How It Works
    "howItWorks.title": "How Song Passport Works",
    "howItWorks.subtitle":
      "Simple, fast, platform-compliant metadata preparation",
    "howItWorks.step1.title": "Send links or a CSV",
    "howItWorks.step1.description":
      "Provide track/album links (DSPs) or a CSV; add artwork if you have it",
    "howItWorks.step2.title": "Audit & enrich",
    "howItWorks.step2.description":
      "We verify ISRC/UPC, artist names, dates, labels and fix inconsistencies",
    "howItWorks.step3.title": "Get your files",
    "howItWorks.step3.description":
      "Receive PDF + CSV/JSON passports and a step-by-step upload checklist",
    "howItWorks.step4.title": "You upload & get paid",
    "howItWorks.step4.description":
      "You keep accounts and pass any platform KYC yourself if needed",
    "howItWorks.ctaText":
      "Ready to fix your metadata? Get started in minutes.",
    "howItWorks.ctaButton": "View Pricing Plans",

    // Pricing
    "pricing.title": "Simple, Transparent Pricing",
    "pricing.subtitle":
      "All plans include song/album passports, upload checklist, and email support.",
    "pricing.cryptoOnly": "Crypto Payments Only",
    "pricing.getStarted": "Get Started",
    "pricing.singleTrack.name": "Single Track",
    "pricing.singleTrack.description": "Perfect for one song",
    "pricing.singleTrack.feature1": "Song passport (PDF + CSV/JSON)",
    "pricing.singleTrack.feature2": "Metadata verification (ISRC/UPC/date)",
    "pricing.singleTrack.feature3": "Upload checklist",
    "pricing.singleTrack.feature4": "Standard turnaround (24–48h)",
    "pricing.singleTrack.feature5": "Links to DSP profiles",
    "pricing.singleTrack.feature6": "Email support",
    "pricing.album.name": "Album Package",
    "pricing.album.description": "Best value for full albums",
    "pricing.album.popular": "Most Popular",
    "pricing.album.feature1": "Up to 15 tracks included",
    "pricing.album.feature2": "Advanced cross-platform checks",
    "pricing.album.feature3": "Passports for all tracks",
    "pricing.album.feature4": "Priority turnaround (24–48h)",
    "pricing.album.feature5": "Artist/album summary PDF",
    "pricing.album.feature6": "Artwork spec guidance",
    "pricing.album.feature7": "Priority support",
    "pricing.audit.name": "Professional Audit",
    "pricing.audit.description": "Complete catalog audit & preparation",
    "pricing.audit.feature1": "Unlimited tracks (by quote)",
    "pricing.audit.feature2": "Full consistency audit",
    "pricing.audit.feature3": "Actionable fix report (CSV/PDF)",
    "pricing.audit.feature4": "Express turnaround (24h)",
    "pricing.audit.feature5": "Templates for distributor support",
    "pricing.audit.feature6": "Rights checklist (client-owned)",
    "pricing.audit.feature7": "Dedicated account manager",
    "pricing.audit.feature8": "Phone & video support",
    "pricing.bottomNote":
      "Need a custom solution? Contact us for enterprise pricing.",
    "pricing.bitcoin": "Bitcoin accepted",
    "pricing.ethereum": "Ethereum accepted",
    "pricing.otherCrypto": "Other major cryptos",

    // Proof Demo (repurposed to samples/QA)
    "proofDemo.title": "Sample Passports & Results",
    "proofDemo.subtitle":
      "See how clean metadata improves approvals and payouts.",
    "proofDemo.stats.tracksProtected": "Tracks Processed",
    "proofDemo.stats.happyArtists": "Happy Artists",
    "proofDemo.stats.successRate": "Approval Rate",
    "proofDemo.verification.title": "Live Metadata Check",
    "proofDemo.verification.badge": "Live Demo",
    "proofDemo.verification.track": "Track:",
    "proofDemo.verification.artist": "Artist:",
    "proofDemo.verification.network": "Platform:",
    "proofDemo.verification.timestamp": "Last updated:",
    "proofDemo.verification.transactionHash": "Source link:",
    "proofDemo.verification.viewEtherscan": "Open Source Page",
    "proofDemo.blockchain.title": "What a Good Passport Includes",
    "proofDemo.blockchain.description":
      "Unified, verified fields (ISRC/UPC/dates/labels/links) ready for distributors and DSPs — no rights transfer, no middlemen.",
    "proofDemo.testimonials.title": "What Artists Say",
    "proofDemo.testimonial1.name": "Alex Rivera",
    "proofDemo.testimonial1.role": "Electronic Artist",
    "proofDemo.testimonial1.content":
      "They fixed my metadata fast. Approvals were smoother and my statements finally matched plays.",
    "proofDemo.testimonial2.name": "Maya Chen",
    "proofDemo.testimonial2.role": "Indie Artist",
    "proofDemo.testimonial2.content":
      "Clear files, simple checklist, crypto payment — exactly what I needed.",
    "proofDemo.testimonial3.name": "Jordan Blake",
    "proofDemo.testimonial3.role": "Label Manager",
    "proofDemo.testimonial3.content":
      "Their catalog audit caught duplicates and wrong dates that were hurting payouts.",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know about Song Passport",
    "faq.question1": "What is Song Passport?",
    "faq.answer1":
      "A metadata preparation and audit service. We assemble clean song/artist passports (ISRC/UPC/dates/artwork) and deliver ready-to-upload files. We do not claim any rights.",
    "faq.question2": "Do you own the rights to my music?",
    "faq.answer2":
      "No. You retain 100% of the rights and accounts. We act only as assistants for metadata and documentation.",
    "faq.question3": "Who handles KYC with platforms?",
    "faq.answer3":
      "You do. Any DSP/distributor KYC is done by you as the rights holder. We don’t handle KYC or access your accounts.",
    "faq.question4": "What cryptocurrencies do you accept?",
    "faq.answer4":
      "We accept USDT/USDC and other major cryptocurrencies. Crypto keeps payments fast and simple.",
    "faq.question5": "How long does the process take?",
    "faq.answer5":
      "Small orders usually take 24–48 hours. Larger catalog audits depend on size; express options are available.",
    "faq.question6": "Do you store my files?",
    "faq.answer6":
      "We keep working copies only to deliver your passports. On request we delete materials after delivery — you keep the originals.",
    "faq.importantNotice": "Important",
    "faq.disclaimer":
      "We provide metadata preparation and documentation only. You remain the sole rights holder of your music.",
    "faq.stillHaveQuestions": "Still have questions? We're here to help.",
    "faq.contactSupport": "Contact Support",
    "faq.joinTelegram": "Join Telegram",

    // Contact Form
    "contact.title": "Get Your Song Passport",
    "contact.subtitle":
      "Ready to fix your metadata? Contact us to get started.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.tracks": "Number of Tracks",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us about your project...",
    "contact.submit": "Send Message",
    "contact.cryptoPaymentRequired": "Payment in cryptocurrency required",
    "contact.getInTouch": "Get In Touch",
    "contact.emailSupport": "Email Support",
    "contact.emailValue": "cheesecheesson@gmail.com",
    "contact.emailDescription": "Detailed answers within 24 hours",
    "contact.liveChat": "Live Chat",
    "contact.liveChatValue": "Telegram: @tiktokproducers",
    "contact.liveChatDescription": "Instant support and community",
    "contact.prioritySupport": "Priority Support",
    "contact.prioritySupportValue": "Professional Audit clients only",
    "contact.prioritySupportDescription": "Phone & video support",
    "contact.businessHours": "Business Hours",
    "contact.mondayFriday": "Monday - Friday:",
    "contact.weekdays": "9 AM - 6 PM UTC",
    "contact.weekends": "Weekends:",
    "contact.limitedSupport": "Limited support",
    "contact.priorityNote":
      "* Professional Audit clients get 24/7 priority support",
    "contact.sendMessage": "Send Us a Message",
    "contact.formDescription":
      "Tell us about your project and we'll send a detailed quote and next steps.",
    "contact.serviceNeeded": "Service Needed",
    "contact.selectService": "Select a service",
    "contact.singleTrack": "Single Track ($10)",
    "contact.albumPackage": "Album Package ($29)",
    "contact.professionalAudit": "Professional Audit ($299)",
    "contact.customSolution": "Custom Solution",
    "contact.whatHappensNext": "What happens next?",
    "contact.step1": "• We’ll review your request within 24 hours",
    "contact.step2": "• Send a detailed quote and crypto payment instructions",
    "contact.step3": "• Provide a secure upload link for your files (optional)",
    "contact.step4": "• Deliver passports + a step-by-step upload guide",
    "contact.thankYou": "Thank You!",
    "contact.thankYouMessage":
      "We’ve received your message and will reply within 24 hours with next steps and payment instructions.",
    "contact.sendAnother": "Send Another Message",

    // Footer translations
    "footer.description":
      "Professional metadata preparation and documentation. Protect payouts with clean, platform-ready data. Crypto-native payments.",
    "footer.cryptoPaymentsOnly": "Crypto Payments Only",
    "footer.email": "Email",
    "footer.telegram": "Telegram",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.support": "Support",
    "footer.aboutUs": "About Us",
    "footer.howItWorks": "How It Works",
    "footer.pricing": "Pricing",
    "footer.faq": "FAQ",
    "footer.termsOfService": "Terms of Service",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.kycPolicy": "KYC Policy",
    "footer.refundPolicy": "Refund Policy",
    "footer.contactForm": "Contact Form",
    "footer.emailSupport": "Email Support",
    "footer.telegramCommunity": "Telegram Community",
    "footer.documentation": "Documentation",
    "footer.copyright": "© {year} Song Passport. All rights reserved.",
    "footer.noticeText": "We do not claim rights to your music",
    "footer.serviceProvider": "Service Provider Only",
    "footer.docVerification": "Documentation & Preparation",
    "footer.disclaimer":
      "Song Passport provides metadata preparation and documentation only. We do not own, transfer, or claim any rights to your music. You retain 100% ownership. For legal matters, consult professionals.",

    // Footer
    "footer.tagline": "Clean, platform-ready metadata for your music",
    "footer.product": "Product",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.compliance": "Compliance",
    "footer.contact": "Contact Us",
    "footer.rights": "All rights reserved."
  },

  ru: {
    // Header
    "header.features": "Возможности",
    "header.pricing": "Цены",
    "header.faq": "Вопросы",
    "header.contact": "Контакты",
    "header.getStarted": "Начать",
    "header.telegram": "Telegram",

    // Hero
    "hero.badge": "Помощник по метаданным для артистов",
    "hero.title": "Мы готовим ваш Song Passport",
    "hero.subtitle":
      "Чистые и согласованные данные трека и артиста (ISRC/UPC/даты/обложки), чтобы площадки платили полно и вовремя. Мы — ваш агент/помощник, вы сохраняете 100% прав. Оплата в крипте.",
    "hero.cta": "Получить Song Passport",
    "hero.learnMore": "Узнать больше",
    "hero.trustBadge1": "100% прав у артиста",
    "hero.trustBadge2": "Срок 24–48 часов",
    "hero.trustBadge3": "Оплата в крипте",
    "hero.mockup.verified": "Готово",
    "hero.mockup.title": "Музыкальный паспорт",
    "hero.mockup.trackTitle": "Полуночные мечты",
    "hero.mockup.artist": "исп. Alex Artist",
    "hero.mockup.genre": "Жанр:",
    "hero.mockup.genreValue": "Электроника",
    "hero.mockup.duration": "Длительность:",
    "hero.mockup.status": "Статус:",
    "hero.mockup.statusValue": "Готов к загрузке",
    "hero.mockup.blockchain": "Источники:",

    // How It Works
    "howItWorks.title": "Как работает Song Passport",
    "howItWorks.subtitle":
      "Простой, быстрый и соответствующий требованиям платформ процесс",
    "howItWorks.step1.title": "Пришлите ссылки или CSV",
    "howItWorks.step1.description":
      "Дайте ссылки на треки/альбомы (DSP) или CSV; при необходимости — обложки",
    "howItWorks.step2.title": "Аудит и обогащение",
    "howItWorks.step2.description":
      "Проверяем ISRC/UPC, имена, даты, лейблы и исправляем несоответствия",
    "howItWorks.step3.title": "Получите файлы",
    "howItWorks.step3.description":
      "Передадим PDF + CSV/JSON и пошаговый чек-лист загрузки",
    "howItWorks.step4.title": "Вы загружаете и получаете выплаты",
    "howItWorks.step4.description":
      "Аккаунты и права у вас; KYC (если требуется) вы проходите сами",
    "howItWorks.ctaText":
      "Готовы навести порядок в метаданных? Начните за несколько минут.",
    "howItWorks.ctaButton": "Посмотреть тарифы",

    // Pricing
    "pricing.title": "Простые и прозрачные цены",
    "pricing.subtitle":
      "Все планы включают паспорта, чек-лист загрузки и поддержку по email.",
    "pricing.cryptoOnly": "Только криптоплатежи",
    "pricing.getStarted": "Начать",
    "pricing.singleTrack.name": "Один трек",
    "pricing.singleTrack.description": "Оптимально для одной песни",
    "pricing.singleTrack.feature1": "Паспорт трека (PDF + CSV/JSON)",
    "pricing.singleTrack.feature2": "Проверка метаданных (ISRC/UPC/дата)",
    "pricing.singleTrack.feature3": "Чек-лист для загрузки",
    "pricing.singleTrack.feature4": "Стандартный срок (24–48 часов)",
    "pricing.singleTrack.feature5": "Ссылки на профили DSP",
    "pricing.singleTrack.feature6": "Поддержка по email",
    "pricing.album.name": "Пакет альбома",
    "pricing.album.description": "Лучшее для целых альбомов",
    "pricing.album.popular": "Самый популярный",
    "pricing.album.feature1": "До 15 треков",
    "pricing.album.feature2": "Расширенная кроссплатформенная проверка",
    "pricing.album.feature3": "Паспорта на все треки",
    "pricing.album.feature4": "Приоритетный срок (24–48 часов)",
    "pricing.album.feature5": "PDF-сводка по артисту/релизу",
    "pricing.album.feature6": "Рекомендации по обложкам",
    "pricing.album.feature7": "Приоритетная поддержка",
    "pricing.audit.name": "Профессиональный аудит",
    "pricing.audit.description": "Полный аудит каталога и подготовка",
    "pricing.audit.feature1": "Неограниченно треков (по запросу)",
    "pricing.audit.feature2": "Полная проверка согласованности",
    "pricing.audit.feature3": "Отчёт с правками (CSV/PDF)",
    "pricing.audit.feature4": "Экспресс-срок (24 часа)",
    "pricing.audit.feature5": "Шаблоны писем дистрибьютору",
    "pricing.audit.feature6": "Чек-лист прав (право у клиента)",
    "pricing.audit.feature7": "Персональный менеджер",
    "pricing.audit.feature8": "Поддержка по телефону и видео",
    "pricing.bottomNote":
      "Нужно индивидуальное решение? Напишите нам для корпоративного тарифа.",
    "pricing.bitcoin": "Принимаем Bitcoin",
    "pricing.ethereum": "Принимаем Ethereum",
    "pricing.otherCrypto": "Другие основные криптовалюты",

    // Proof Demo (переосмыслено под примеры/качество)
    "proofDemo.title": "Примеры паспортов и результаты",
    "proofDemo.subtitle":
      "Посмотрите, как чистые метаданные ускоряют апрувы и повышают выплаты.",
    "proofDemo.stats.tracksProtected": "Обработанных треков",
    "proofDemo.stats.happyArtists": "Довольных артистов",
    "proofDemo.stats.successRate": "Доля апрувов",
    "proofDemo.verification.title": "Живой чек метаданных",
    "proofDemo.verification.badge": "Демо",
    "proofDemo.verification.track": "Трек:",
    "proofDemo.verification.artist": "Артист:",
    "proofDemo.verification.network": "Платформа:",
    "proofDemo.verification.timestamp": "Обновлено:",
    "proofDemo.verification.transactionHash": "Источник:",
    "proofDemo.verification.viewEtherscan": "Открыть источник",
    "proofDemo.blockchain.title": "Что включает хороший паспорт",
    "proofDemo.blockchain.description":
      "Единые и проверенные поля (ISRC/UPC/даты/лейблы/ссылки), готовые для дистрибьюторов и DSP — без передачи прав и посредников.",
    "proofDemo.testimonials.title": "Отзывы артистов",
    "proofDemo.testimonial1.name": "Alex Rivera",
    "proofDemo.testimonial1.role": "Электронный артист",
    "proofDemo.testimonial1.content":
      "Они быстро починили метаданные. Релиз прошёл проще, а отчёты наконец совпали с прослушиваниями.",
    "proofDemo.testimonial2.name": "Maya Chen",
    "proofDemo.testimonial2.role": "Инди-артист",
    "proofDemo.testimonial2.content":
      "Понятные файлы, простой чек-лист, оплата в крипте — то, что нужно.",
    "proofDemo.testimonial3.name": "Jordan Blake",
    "proofDemo.testimonial3.role": "Менеджер лейбла",
    "proofDemo.testimonial3.content":
      "Аудит нашёл дубли и неверные даты, из-за которых терялись деньги.",

    // FAQ
    "faq.title": "Частые вопросы",
    "faq.subtitle": "Всё, что нужно знать о Song Passport",
    "faq.question1": "Что такое Song Passport?",
    "faq.answer1":
      "Сервис подготовки и аудита метаданных. Мы собираем чистые паспорта треков/артиста (ISRC/UPC/даты/обложки) и отдаём готовые файлы для загрузки. Прав на музыку не требуем.",
    "faq.question2": "Вы владеете правами на мою музыку?",
    "faq.answer2":
      "Нет. Все права и аккаунты остаются у вас. Мы только помощники по метаданным и документации.",
    "faq.question3": "Кто проходит KYC на платформах?",
    "faq.answer3":
      "Вы. Любой KYC у DSP/дистрибьютора проходит сам правообладатель. Мы KYC не проводим и доступ к вашим аккаунтам не запрашиваем.",
    "faq.question4": "Какие криптовалюты вы принимаете?",
    "faq.answer4":
      "USDT/USDC и другие основные криптовалюты. Это быстро и удобно.",
    "faq.question5": "Сколько занимает процесс?",
    "faq.answer5":
      "Небольшие заказы обычно 24–48 часов. Аудиты больших каталогов — по объёму; доступна экспресс-опция.",
    "faq.question6": "Храните ли вы мои файлы?",
    "faq.answer6":
      "Держим рабочие копии только для выдачи паспортов. По запросу удаляем материалы после передачи — оригиналы у вас.",
    "faq.importantNotice": "Важно",
    "faq.disclaimer":
      "Мы оказываем только услуги подготовки метаданных и документации. Правообладателем остаётесь вы.",
    "faq.stillHaveQuestions": "Остались вопросы? Мы поможем.",
    "faq.contactSupport": "Связаться с поддержкой",
    "faq.joinTelegram": "Перейти в Telegram",

    // Contact Form
    "contact.title": "Получите ваш Song Passport",
    "contact.subtitle":
      "Готовы навести порядок в метаданных? Напишите нам.",
    "contact.name": "Имя",
    "contact.email": "Email",
    "contact.tracks": "Количество треков",
    "contact.message": "Сообщение",
    "contact.messagePlaceholder": "Коротко о вашем проекте...",
    "contact.submit": "Отправить сообщение",
    "contact.cryptoPaymentRequired": "Требуется оплата в криптовалюте",
    "contact.getInTouch": "Связаться",
    "contact.emailSupport": "Поддержка по email",
    "contact.emailValue": "cheesecheesson@gmail.com",
    "contact.emailDescription": "Ответим подробно в течение 24 часов",
    "contact.liveChat": "Живой чат",
    "contact.liveChatValue": "Telegram: @tiktokproducers",
    "contact.liveChatDescription": "Мгновенная связь и сообщество",
    "contact.prioritySupport": "Приоритетная поддержка",
    "contact.prioritySupportValue":
      "Для клиентов «Профессионального аудита»",
    "contact.prioritySupportDescription":
      "Поддержка по телефону и видео",
    "contact.businessHours": "Часы работы",
    "contact.mondayFriday": "Понедельник — Пятница:",
    "contact.weekdays": "09:00 — 18:00 UTC",
    "contact.weekends": "Выходные:",
    "contact.limitedSupport": "Ограниченная поддержка",
    "contact.priorityNote":
      "* Клиенты проф. аудита получают поддержку 24/7",
    "contact.sendMessage": "Напишите нам",
    "contact.formDescription":
      "Опишите задачу — вышлем смету и шаги оплаты в крипте.",
    "contact.serviceNeeded": "Нужная услуга",
    "contact.selectService": "Выберите услугу",
    "contact.singleTrack": "Один трек ($10)",
    "contact.albumPackage": "Пакет альбома ($29)",
    "contact.professionalAudit": "Профессиональный аудит ($299)",
    "contact.customSolution": "Индивидуальное решение",
    "contact.whatHappensNext": "Что дальше?",
    "contact.step1": "• Рассмотрим запрос в течение 24 часов",
    "contact.step2": "• Пришлём смету и инструкции по крипто-оплате",
    "contact.step3":
      "• Дадим защищённую ссылку для загрузки файлов (по желанию)",
    "contact.step4": "• Передадим паспорта и пошаговый гид по загрузке",
    "contact.thankYou": "Спасибо!",
    "contact.thankYouMessage":
      "Мы получили ваше сообщение и ответим в течение 24 часов со следующими шагами и инструкциями по оплате.",
    "contact.sendAnother": "Отправить ещё сообщение",

    // Footer translations
    "footer.description":
      "Профессиональная подготовка и документация метаданных. Защитите выплаты чистыми, готовыми к платформам данными. Оплата в крипте.",
    "footer.cryptoPaymentsOnly": "Только криптоплатежи",
    "footer.email": "Email",
    "footer.telegram": "Telegram",
    "footer.company": "Компания",
    "footer.legal": "Правовая информация",
    "footer.support": "Поддержка",
    "footer.aboutUs": "О нас",
    "footer.howItWorks": "Как это работает",
    "footer.pricing": "Цены",
    "footer.faq": "Вопросы и ответы",
    "footer.termsOfService": "Условия предоставления услуг",
    "footer.privacyPolicy": "Политика конфиденциальности",
    "footer.kycPolicy": "Политика KYC",
    "footer.refundPolicy": "Политика возврата",
    "footer.contactForm": "Форма связи",
    "footer.emailSupport": "Поддержка по email",
    "footer.telegramCommunity": "Сообщество в Telegram",
    "footer.documentation": "Документация",
    "footer.copyright": "© {year} Song Passport. Все права защищены.",
    "footer.noticeText":
      "Мы не претендуем на права на вашу музыку",
    "footer.serviceProvider": "Только поставщик услуг",
    "footer.docVerification": "Документация и подготовка",
    "footer.disclaimer":
      "Song Passport оказывает услуги подготовки метаданных и документации. Мы не владеем, не передаём и не претендуем на права на вашу музыку. Вы сохраняете 100% владения. По юридическим вопросам обращайтесь к специалистам.",

    // Footer
    "footer.tagline": "Чистые метаданные, готовые к платформам",
    "footer.product": "Продукт",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия использования",
    "footer.compliance": "Соответствие",
    "footer.contact": "Связаться с нами",
    "footer.rights": "Все права защищены."
  },
};


export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("song-passport-language") as Language;
    if (saved && (saved === "en" || saved === "ru")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("song-passport-language", newLanguage);
  };

  const t = (
    key: string,
    variables?: Record<string, string | number>
  ): string => {
    let translation = translations[language][key] || key;

    if (variables) {
      Object.entries(variables).forEach(([variable, value]) => {
        translation = translation.replace(
          new RegExp(`\\{${variable}\\}`, "g"),
          String(value)
        );
      });
    }

    return translation;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
