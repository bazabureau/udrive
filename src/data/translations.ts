import type { CarCategory } from "./cars";

export type LanguageCode = "az" | "en" | "ru";
export type FilterId = "all" | CarCategory;
export type CurrencyCode = "AZN" | "USD" | "EUR" | "RUB";

export interface CarCardLabels {
  specs: {
    year: string;
    type: string;
    seats: string;
    engine: string;
    gear: string;
    price: string;
  };
  orderCta: string;
  more: string;
  perDay: string;
  seatsUnit: string;
  whatsappTemplate: string;
}

interface HeroCTA {
  primary: string;
  secondary: string;
}

interface FeatureItem {
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface ContactInfo {
  title: string;
  description: string;
  addressLabel: string;
  addressValue: string;
  hoursLabel: string;
  hoursValue: string;
  emailLabel: string;
  emailValue: string;
  phoneLabel: string;
  phoneValue: string;
}

interface NavLink {
  href: string;
  label: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface FooterLink {
  href: string;
  label: string;
}

interface FooterContent {
  descriptionLines: string[];
  exploreTitle: string;
  exploreLinks: FooterLink[];
  contactTitle: string;
  contactPhone: string;
  contactEmail: string;
  contactAddress: string;
  legalTitle: string;
  legalLinks: FooterLink[];
  copyright: string;
  status: string;
}

interface Translation {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    openGraphTitle: string;
    openGraphDescription: string;
    locale: string;
  };
  navLinks: NavLink[];
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDescription: string;
  heroBullets: string[];
  heroPhone: string;
  heroCtas: HeroCTA;
  featuresTitle: string;
  featuresTitleHighlight: string;
  featuresDescription: string;
  features: FeatureItem[];
  stats: StatItem[];
  fleetTitle: string;
  fleetTitleHighlight: string;
  fleetDescription: string;
  fleetCtaLabel: string;
  testimonialsTitle: string;
  testimonialsTitleHighlight: string;
  testimonialsDescription: string;
  testimonials: Testimonial[];
  topPicksTitle: string;
  topPicksDescription: string;
  categoriesTitle: string;
  categoriesDescription: string;
  carsBadge: string;
  carsSearchLabel: string;
  carsSearchPlaceholder: string;
  carsSortLabel: string;
  carsSortOptions: {
    featured: string;
    priceLow: string;
    priceHigh: string;
    newest: string;
    name: string;
  };
  carsResultsLabelRange: string;
  carsResultsLabelSingle: string;
  carsClearFilters: string;
  carsNoResults: string;
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaButton: string;
  contact: ContactInfo;
  contactWhatsappLabel: string;
  aboutTitle: string;
  aboutIntro: string;
  corporateTitle: string;
  corporateDescription: string;
  corporateBullets: string[];
  corporateProcessTitle: string;
  corporateProcess: string[];
  transferTitle: string;
  transferDescription: string;
  transferIntro: string[];
  transferPriceBadge: string;
  transferDestinationsLabel: string;
  transferPassengersUnit: string;
  transferCityPackageTitle: string;
  transferCityPackageLabel: string;
  transferTable: {
    car: string;
    hours: string;
    transfer: string;
  };
  transferSearchLabel: string;
  transferSearchPlaceholder: string;
  transferQuickLabel: string;
  transferClearFilters: string;
  transferResultsLabel: string;
  transferNoResults: string;
  transferTabs: {
    all: string;
    vans: string;
    minibus: string;
    sedan: string;
  };
  filterLabels: Record<FilterId, string>;
  carLabels: CarCardLabels;
  currencyLabel: string;
  footer: FooterContent;
}

export const translations: Record<LanguageCode, Translation> = {
  az: {
    seo: {
      title: "Bakı avtomobil kirayəsi və transfer",
      description:
        "Bakıda və Azərbaycanda avtomobil kirayəsi, hava limanı transferi, sürücülü xidmət və sürətli WhatsApp sifarişi. Şəffaf qiymətlər, 24/7 dəstək, çatdırılma.",
      keywords: [
        "avtomobil kirayəsi",
        "maşın kirayəsi bakı",
        "rent a car baku",
        "baku car rental",
        "hava limanı transferi",
        "transfer bakı",
        "sürücülü transfer",
        "udrive",
        "avtomobil icarəsi",
        "bakı rent a car",
      ],
      openGraphTitle: "uDrive.az | Bakı avtomobil kirayəsi",
      openGraphDescription:
        "Avtomobil kirayəsi və transfer xidmətləri: sərfəli qiymətlər, sürətli WhatsApp sifarişi, Bakı və regionlar üzrə çatdırılma.",
      locale: "az_AZ",
    },
    navLinks: [
      { href: "/", label: "Ana səhifə" },
      { href: "/cars", label: "Avtomobillər" },
      { href: "/haqqimizda", label: "Haqqımızda" },
      { href: "/korporativ", label: "Korporativ" },
      { href: "/transfer", label: "Transfer" },
      { href: "/contact", label: "Əlaqə" },
    ],
    heroBadge: "Premium rent-a-car xidməti",
    heroTitle: "Sadə və şəffaf",
    heroTitleHighlight: "Azərbaycanda rent-a-car",
    heroDescription:
      "Seçdiyiniz kateqoriyanı filtr edin, qiyməti görün və WhatsApp-la rezerv edin. Heç bir əlavə səhifə və ya çətin forma yoxdur.",
    heroBullets: ["Tam sığorta", "24/7 əlaqə", "Bakıya çatdırılma"],
    heroPhone: "Zəng et: +994 50 979 97 97",
    heroCtas: {
      primary: "WhatsApp ilə sifariş et",
      secondary: "Bütün avtomobillərə bax",
    },
    featuresTitle: "Niyə",
    featuresTitleHighlight: "uDrive?",
    featuresDescription:
      "Biz icarə təcrübəsini yüksək keyfiyyət və xidmətlə yenidən qururuq.",
    features: [
      {
        title: "Tam sığorta",
        description:
          "Rahatlığınız üçün tam təminat. Tam qorunma ilə narahat olmadan sürün.",
      },
      {
        title: "24/7 dəstək",
        description:
          "Hər zaman yanınızdayıq. Concierge komandamız hər an köməyə hazırdır.",
      },
      {
        title: "Sürətli rezervasiya",
        description:
          "Rəqəmsal və rahat təcrübə. Xəyalınızdakı avtomobili bir neçə dəqiqəyə bron edin.",
      },
      {
        title: "Premium park",
        description:
          "Dünyanın nüfuzlu brendlərindən diqqətlə saxlanılan premium avtomobillər.",
      },
    ],
    stats: [
      { value: "500+", label: "Məmnun müştəri" },
      { value: "70+", label: "Avtomobil parkı" },
      { value: "24/7", label: "Concierge dəstəyi" },
    ],
    fleetTitle: "Premium",
    fleetTitleHighlight: "avtoparkımız",
    fleetDescription:
      "Lüks sedanlardan güclü SUV-lərə qədər hər fürsət üçün uyğun avtomobilimiz var.",
    fleetCtaLabel: "Bütün avtomobillərə bax",
    testimonialsTitle: "Müştəri",
    testimonialsTitleHighlight: "Hekayələri",
    testimonialsDescription: "Yüzlərlə məmnun müştərinin etibarı.",
    testimonials: [
      {
        name: "Leyla Məmmədova",
        role: "Biznes səyyahı",
        content:
          "Bakıda ən peşəkar icarə xidməti. Avtomobil ideal vəziyyətdə idi və çatdırılma vaxtında oldu.",
        rating: 5,
      },
      {
        name: "Tural Aliyev",
        role: "Daimi müştəri",
        content:
          "uDrive hər şeyi çox sadə edir. WhatsApp-la yazıram və avtomobil hazır olur. Parkın keyfiyyəti əladır.",
        rating: 5,
      },
      {
        name: "James Wilson",
        role: "Turist",
        content:
          "Möhtəşəm təcrübə! Komanda çox köməkçi idi və premium SUV Qəbələyə səfərimizi unudulmaz etdi.",
        rating: 5,
      },
    ],
    topPicksTitle: "Ən çox seçilən modellər",
    topPicksDescription:
      "Müştərilərimizin ən çox sifariş etdiyi avtomobillər – hazır parkdan dərhal çatdırılır.",
    categoriesTitle: "Kateqoriyalar üzrə seçim",
    categoriesDescription:
      "Sedan, SUV və lüks parkını ayrı-ayrılıqda izləyin və uyğun variantı seçin.",
    carsBadge: "{count}+ avtomobil parkda",
    carsSearchLabel: "Axtarış",
    carsSearchPlaceholder: "Marka, model və ya il yazın (məs., BMW 2022)",
    carsSortLabel: "Sıralama",
    carsSortOptions: {
      featured: "Seçilmiş",
      priceLow: "Qiymət: aşağıdan yuxarı",
      priceHigh: "Qiymət: yuxarıdan aşağı",
      newest: "Ən yeni",
      name: "A-dan Z-yə",
    },
    carsResultsLabelRange: "{count} avtomobil · {min}-{max} {currency} {perDay}",
    carsResultsLabelSingle: "{count} avtomobil · {min} {currency} {perDay}",
    carsClearFilters: "Filtrləri sıfırla",
    carsNoResults: "Bu filtrə uyğun avtomobil tapılmadı.",
    finalCtaTitle: "Sifariş üçün hazırıq",
    finalCtaDescription:
      "Sorğunuzu göndərin və şəxsi meneceriniz 15 dəqiqə ərzində geri dönüş etsin.",
    finalCtaButton: "Əlaqə saxla",
    contact: {
      title: "Bizimlə əlaqə saxlayın",
      description:
        "WhatsApp, zəng və e-poçt ilə sorğularınızı qəbul edirik. Çatdırılma və texniki dəstəyi 24/7 təmin edirik.",
      addressLabel: "Ünvan",
      addressValue: "Port Baku Tower, Bakı",
      hoursLabel: "İş rejimi",
      hoursValue: "Hər gün 09:00 – 23:00",
      emailLabel: "E-poçt",
      emailValue: "concierge@udrive.az",
      phoneLabel: "Telefon",
      phoneValue: "+994 50 979 97 97",
    },
    contactWhatsappLabel: "WhatsApp",
    aboutTitle: "Haqqımızda",
    aboutIntro:
      "uDrive komandası Azərbaycanda premium rent-a-car təcrübəsini minimalizm, şəffaflıq və sürətli kommunikasiya ilə təqdim edir.",
    corporateTitle: "Korporativ əməkdaşlıqlar",
    corporateDescription:
      "Şirkətlər üçün uzunmüddətli icarə, sürücü xidməti və aylıq raportlaşdırma ilə tam uçot sistemini birləşdiririk.",
    corporateBullets: [
      "Flotun tam idarəetməsi və aylıq raportlaşdırma",
      "Dəqiq SLA və xüsusi əlaqə xətti",
      "Şəxsi menecer və növbəli sürücülər",
    ],
    corporateProcessTitle: "Proses",
    corporateProcess: [
      "Sorğunun qəbulu və tələblərin dəqiqləşdirilməsi",
      "Avtomobil seçimi və müqavilə imzası",
      "Çatdırılma, texniki servis və aylıq monitorinq",
    ],
    transferTitle: "Transfer və concierge",
    transferDescription:
      "Hava limanı, otel və xüsusi tədbirlər üçün xüsusi transfer parkımız var. Sürücülərimiz çoxdilli və protokol qaydalarına vaqifdir.",
    transferIntro: [
      "uDrive MMC-nin sürücülü rent-a-car xidməti Azərbaycanda səyahətinizi maksimum komfortlu edir.",
      "Bu servis sayəsində parklama, tıxac, marşrut seçimi və gözlənilməz cərimələrdən azad olursunuz – sürücülərimiz şəhərin hər küçəsini tanıyır və protokol qaydalarına riayət edir.",
      "Tariflər seçdiyiniz avtomobilin sinfi və icarə müddətindən asılıdır. Gəliş və gediş tarixlərinizi öncədən bizə bildirin ki, sizin üçün ən sərfəli şərtləri təşkil edək.",
      "uDrive MMC həmçinin sürücü ilə yüksək keyfiyyətli transfer xidmətləri təqdim edir: Bakı daxilində 10 saat və ya 100 km qiymətə daxildir, şəhərdən kənar üçün əlavə ödəniş tətbiq olunur.",
      "Qiymətə professional sürücünün xidməti və avtomobilin yanacaq təminatı da daxildir.",
    ],
    transferPriceBadge: "Şəxsi transfer qiymətləri (bir istiqamət)",
    transferDestinationsLabel: "Marşrutlar",
    transferPassengersUnit: "nəfər",
    transferCityPackageTitle: "Bakı şəhər paketi",
    transferCityPackageLabel: "Bakı — 10 saat və ya 100 km",
    transferTable: {
      car: "Transfer üçün avtomobil",
      hours: "10 saat / 100 km",
      transfer: "Transfer",
    },
    transferSearchLabel: "Axtarış",
    transferSearchPlaceholder: "Avtomobil və ya marşrut axtarın (məs., Airport)",
    transferQuickLabel: "Tez seçim",
    transferClearFilters: "Filtrləri sıfırla",
    transferResultsLabel: "{cars} avtomobil · {routes} marşrut",
    transferNoResults: "Bu filtrə uyğun transfer tapılmadı.",
    transferTabs: {
      all: "Hamısı",
      vans: "Minivan",
      minibus: "Mikroavtobus",
      sedan: "Sedan",
    },
    filterLabels: {
      all: "Hamısı",
      sedan: "Sedan",
      suv: "SUV",
      lux: "Lüks",
    },
    carLabels: {
      specs: {
        year: "İl",
        type: "Yanacaq",
        seats: "Oturacaq",
        engine: "Mühərrik",
        gear: "Sürət qutusu",
        price: "Qiymət",
      },
      orderCta: "WhatsApp ilə sifariş et",
      more: "Əlavə...",
      perDay: "/ gün",
      seatsUnit: "yer",
      whatsappTemplate:
        "Salam, {brand} {model} ({year}) üçün rezervasiya etmək istəyirəm.",
    },
    currencyLabel: "Valyuta",
    footer: {
      descriptionLines: [
        "Bakıda premium avtomobil kirayəsi.",
        "Seçilmiş parkımız və yüksək xidmətlə fərqi hiss edin.",
      ],
      exploreTitle: "Kəşf et",
      exploreLinks: [
        { href: "/cars", label: "Avtomobil parkı" },
        { href: "/transfer", label: "Transfer xidməti" },
        { href: "/haqqimizda", label: "Haqqımızda" },
        { href: "/contact", label: "Əlaqə" },
      ],
      contactTitle: "Əlaqə",
      contactPhone: "+994 50 979 97 97",
      contactEmail: "info@udrive.az",
      contactAddress: "Port Baku Tower, Bakı, Azərbaycan",
      legalTitle: "Hüquqi",
      legalLinks: [
        { href: "/terms", label: "Xidmət şərtləri" },
        { href: "/privacy", label: "Məxfilik siyasəti" },
      ],
      copyright: "© {year} uDrive. Bütün hüquqlar qorunur.",
      status: "Sistem işləkdir",
    },
  },
  en: {
    seo: {
      title: "Car rental in Baku and Azerbaijan",
      description:
        "Car rental and private transfer services in Baku and across Azerbaijan. Fast WhatsApp booking, transparent pricing, 24/7 support, and delivery.",
      keywords: [
        "car rental baku",
        "rent a car baku",
        "azerbaijan car rental",
        "airport transfer baku",
        "private transfer",
        "chauffeur service",
        "udrive",
        "baku rent a car",
      ],
      openGraphTitle: "uDrive.az | Car rental in Baku",
      openGraphDescription:
        "Reliable car rental and transfer services with transparent pricing and fast WhatsApp booking.",
      locale: "en_US",
    },
    navLinks: [
      { href: "/", label: "Home" },
      { href: "/cars", label: "Cars" },
      { href: "/haqqimizda", label: "About" },
      { href: "/korporativ", label: "Corporate" },
      { href: "/transfer", label: "Transfer" },
      { href: "/contact", label: "Contact" },
    ],
    heroBadge: "Premium car rental service",
    heroTitle: "Simple and transparent",
    heroTitleHighlight: "Rent-a-car in Azerbaijan",
    heroDescription:
      "Filter the category you need, see the price, and confirm via WhatsApp. No extra pages or complicated forms.",
    heroBullets: ["Full insurance", "24/7 support", "Baku delivery"],
    heroPhone: "Call: +994 50 979 97 97",
    heroCtas: {
      primary: "Order via WhatsApp",
      secondary: "View all cars",
    },
    featuresTitle: "Why choose",
    featuresTitleHighlight: "uDrive?",
    featuresDescription:
      "We redefine the car rental experience with unmatched quality and service.",
    features: [
      {
        title: "Premium insurance",
        description:
          "Full coverage for peace of mind. Drive without worries knowing you're fully protected.",
      },
      {
        title: "24/7 support",
        description:
          "Always here for you. Our concierge team is available round-the-clock for any assistance.",
      },
      {
        title: "Instant booking",
        description:
          "Seamless digital experience. Book your dream car in minutes with our easy-to-use platform.",
      },
      {
        title: "Top-tier fleet",
        description:
          "Meticulously maintained premium vehicles from the world's most prestigious brands.",
      },
    ],
    stats: [
      { value: "500+", label: "Happy clients" },
      { value: "70+", label: "Fleet size" },
      { value: "24/7", label: "Concierge" },
    ],
    fleetTitle: "Our Premium",
    fleetTitleHighlight: "Fleet",
    fleetDescription:
      "From luxury sedans to powerful SUVs, we have the perfect vehicle for every occasion.",
    fleetCtaLabel: "View all cars",
    testimonialsTitle: "Client",
    testimonialsTitleHighlight: "Stories",
    testimonialsDescription: "Trusted by hundreds of satisfied customers.",
    testimonials: [
      {
        name: "Leyla Məmmədova",
        role: "Business traveler",
        content:
          "The most professional car rental service in Baku. The car was spotless and the delivery was right on time.",
        rating: 5,
      },
      {
        name: "Tural Aliyev",
        role: "Regular client",
        content:
          "uDrive makes it so simple. I just text on WhatsApp and my car is ready. Excellent fleet quality.",
        rating: 5,
      },
      {
        name: "James Wilson",
        role: "Tourist",
        content:
          "Fantastic experience! The team was super helpful and the premium SUV made our trip to Gabala unforgettable.",
        rating: 5,
      },
    ],
    topPicksTitle: "Most booked models",
    topPicksDescription:
      "Customer favorites ready for immediate delivery anywhere in Baku.",
    categoriesTitle: "Pick by category",
    categoriesDescription:
      "Browse sedans, SUVs and luxury vehicles separately and compare prices.",
    carsBadge: "{count}+ cars in fleet",
    carsSearchLabel: "Search",
    carsSearchPlaceholder: "Search by brand, model, or year (e.g. BMW 2022)",
    carsSortLabel: "Sort by",
    carsSortOptions: {
      featured: "Featured",
      priceLow: "Price: Low to High",
      priceHigh: "Price: High to Low",
      newest: "Newest first",
      name: "Name A-Z",
    },
    carsResultsLabelRange: "{count} cars · {min}-{max} {currency} {perDay}",
    carsResultsLabelSingle: "{count} cars · from {min} {currency} {perDay}",
    carsClearFilters: "Clear filters",
    carsNoResults: "No cars match these filters.",
    finalCtaTitle: "Ready to assist",
    finalCtaDescription:
      "Send your request and a dedicated manager will respond within 15 minutes.",
    finalCtaButton: "Contact us",
    contact: {
      title: "Get in touch",
      description:
        "Reach us via WhatsApp, phone or email. Delivery and technical support operate around the clock.",
      addressLabel: "Address",
      addressValue: "Port Baku Tower, Baku",
      hoursLabel: "Hours",
      hoursValue: "Daily 09:00 – 23:00",
      emailLabel: "Email",
      emailValue: "concierge@udrive.az",
      phoneLabel: "Phone",
      phoneValue: "+994 50 979 97 97",
    },
    contactWhatsappLabel: "WhatsApp",
    aboutTitle: "About us",
    aboutIntro:
      "uDrive team delivers premium car rental in Azerbaijan with minimal steps, transparent pricing, and immediate concierge support.",
    corporateTitle: "Corporate services",
    corporateDescription:
      "Long-term rentals, dedicated chauffeur services, and monthly reporting tailored for companies with mixed fleets.",
    corporateBullets: [
      "Full fleet management with monthly reports",
      "Clear SLAs and priority support line",
      "Dedicated manager and rotating driver pool",
    ],
    corporateProcessTitle: "Process",
    corporateProcess: [
      "Collect requirements and confirm needs",
      "Select vehicles and sign agreement",
      "Delivery, maintenance, and ongoing monitoring",
    ],
    transferTitle: "Transfer & concierge",
    transferDescription:
      "Airport, hotel, and VIP transfers with multilingual drivers familiar with protocol standards.",
    transferIntro: [
      "Renting a car in Azerbaijan with chauffeur services from our uDrive LLC company provides additional comfort and peace of mind.",
      "You can forget about parking, traffic jams, route planning, and unexpected fines—our professional drivers know every street and handle protocol requirements for you.",
      "Tariffs depend on the class and brand of the vehicle as well as the rental period. Share your arrival and departure dates in advance so we can secure the most suitable option.",
      "uDrive LLC also provides high-quality and reliable transfer services with a driver. Prices include 10 hours or 100 km within Baku; trips outside the city are subject to an extra charge.",
      "Each package covers the services of a professional driver and fuel for the rented car.",
    ],
    transferPriceBadge: "Private transfer prices (one way)",
    transferDestinationsLabel: "Destinations",
    transferPassengersUnit: "passengers",
    transferCityPackageTitle: "Baku city package",
    transferCityPackageLabel: "Baku — 10 hours or 100 km",
    transferTable: {
      car: "Cars for transfer",
      hours: "10 hours / 100 km",
      transfer: "Transfer",
    },
    transferSearchLabel: "Search",
    transferSearchPlaceholder: "Search car or destination (e.g. Airport)",
    transferQuickLabel: "Quick routes",
    transferClearFilters: "Clear filters",
    transferResultsLabel: "{cars} cars · {routes} routes",
    transferNoResults: "No transfers match these filters.",
    transferTabs: {
      all: "All",
      vans: "Vans",
      minibus: "Minibus",
      sedan: "Sedan",
    },
    filterLabels: {
      all: "All",
      sedan: "Sedan",
      suv: "SUV",
      lux: "Luxury",
    },
    carLabels: {
      specs: {
        year: "Year",
        type: "Fuel",
        seats: "Seats",
        engine: "Engine / l/100km / power",
        gear: "Gearbox",
        price: "Price",
      },
      orderCta: "Order via WhatsApp",
      more: "More...",
      perDay: "/ day",
      seatsUnit: "seats",
      whatsappTemplate:
        "Hello, I would like to reserve {brand} {model} ({year}).",
    },
    currencyLabel: "Currency",
    footer: {
      descriptionLines: [
        "Premium car rental service in Baku.",
        "Experience the difference with our curated fleet and exceptional service.",
      ],
      exploreTitle: "Explore",
      exploreLinks: [
        { href: "/cars", label: "Our Fleet" },
        { href: "/transfer", label: "Transfer Services" },
        { href: "/haqqimizda", label: "About Us" },
        { href: "/contact", label: "Contact" },
      ],
      contactTitle: "Contact",
      contactPhone: "+994 50 979 97 97",
      contactEmail: "info@udrive.az",
      contactAddress: "Port Baku Tower, Baku, Azerbaijan",
      legalTitle: "Legal",
      legalLinks: [
        { href: "/terms", label: "Terms of Service" },
        { href: "/privacy", label: "Privacy Policy" },
      ],
      copyright: "© {year} uDrive. All rights reserved.",
      status: "Systems Operational",
    },
  },
  ru: {
    seo: {
      title: "Аренда авто в Баку и Азербайджане",
      description:
        "Аренда авто и частные трансферы в Баку и по Азербайджану. Быстрое оформление через WhatsApp, прозрачные цены, доставка и поддержка 24/7.",
      keywords: [
        "аренда авто баку",
        "прокат авто баку",
        "машина в аренду баку",
        "трансфер баку",
        "аэропорт трансфер",
        "услуги водителя",
        "udrive",
      ],
      openGraphTitle: "uDrive.az | Аренда авто в Баку",
      openGraphDescription:
        "Аренда авто и трансферы с прозрачными ценами и быстрым бронированием через WhatsApp.",
      locale: "ru_RU",
    },
    navLinks: [
      { href: "/", label: "Главная" },
      { href: "/cars", label: "Автомобили" },
      { href: "/haqqimizda", label: "О нас" },
      { href: "/korporativ", label: "Корпоратив" },
      { href: "/transfer", label: "Трансфер" },
      { href: "/contact", label: "Контакты" },
    ],
    heroBadge: "Премиальный прокат авто",
    heroTitle: "Простой и прозрачный",
    heroTitleHighlight: "Прокат в Азербайджане",
    heroDescription:
      "Выберите нужную категорию, увидите цену и бронируйте через WhatsApp — без лишних страниц и сложных форм.",
    heroBullets: ["Полное каско", "Поддержка 24/7", "Доставка по Баку"],
    heroPhone: "Звоните: +994 50 979 97 97",
    heroCtas: {
      primary: "Заказать в WhatsApp",
      secondary: "Все автомобили",
    },
    featuresTitle: "Почему",
    featuresTitleHighlight: "uDrive?",
    featuresDescription:
      "Мы заново определяем аренду автомобилей с безупречным качеством и сервисом.",
    features: [
      {
        title: "Полное страхование",
        description:
          "Полное покрытие для спокойствия. Управляйте без забот, зная, что вы защищены.",
      },
      {
        title: "Поддержка 24/7",
        description:
          "Мы всегда рядом. Команда консьержей доступна круглосуточно.",
      },
      {
        title: "Мгновенное бронирование",
        description:
          "Бесшовный цифровой опыт. Забронируйте автомобиль мечты за минуты.",
      },
      {
        title: "Премиальный автопарк",
        description:
          "Тщательно обслуживаемые премиальные авто от лучших брендов мира.",
      },
    ],
    stats: [
      { value: "500+", label: "Довольных клиентов" },
      { value: "70+", label: "Авто в парке" },
      { value: "24/7", label: "Консьерж" },
    ],
    fleetTitle: "Наш премиальный",
    fleetTitleHighlight: "автопарк",
    fleetDescription:
      "От люксовых седанов до мощных SUV — найдется авто для любого повода.",
    fleetCtaLabel: "Смотреть все авто",
    testimonialsTitle: "Истории",
    testimonialsTitleHighlight: "клиентов",
    testimonialsDescription: "Нам доверяют сотни довольных клиентов.",
    testimonials: [
      {
        name: "Leyla Məmmədova",
        role: "Бизнес-путешественник",
        content:
          "Самый профессиональный прокат в Баку. Машина была идеально чистой, а доставка — точно вовремя.",
        rating: 5,
      },
      {
        name: "Tural Aliyev",
        role: "Постоянный клиент",
        content:
          "uDrive делает всё очень просто. Пишу в WhatsApp — и машина готова. Качество автопарка отличное.",
        rating: 5,
      },
      {
        name: "James Wilson",
        role: "Турист",
        content:
          "Отличный опыт! Команда была очень отзывчивой, а премиальный SUV сделал нашу поездку в Габалу незабываемой.",
        rating: 5,
      },
    ],
    topPicksTitle: "Самые популярные модели",
    topPicksDescription:
      "Хиты бронирований — доступные прямо сейчас для доставки по Баку.",
    categoriesTitle: "Выбор по категориям",
    categoriesDescription:
      "Просматривайте седаны, SUV и люкс отдельно и сравнивайте цены.",
    carsBadge: "{count}+ авто в парке",
    carsSearchLabel: "Поиск",
    carsSearchPlaceholder: "Ищите по бренду, модели или году (например, BMW 2022)",
    carsSortLabel: "Сортировка",
    carsSortOptions: {
      featured: "Рекомендуемые",
      priceLow: "Цена: по возрастанию",
      priceHigh: "Цена: по убыванию",
      newest: "Сначала новые",
      name: "По названию A-Z",
    },
    carsResultsLabelRange: "{count} авто · {min}-{max} {currency} {perDay}",
    carsResultsLabelSingle: "{count} авто · от {min} {currency} {perDay}",
    carsClearFilters: "Сбросить фильтры",
    carsNoResults: "Нет авто по выбранным фильтрам.",
    finalCtaTitle: "Готовы оформить заказ",
    finalCtaDescription:
      "Отправьте запрос, и персональный менеджер ответит в течение 15 минут.",
    finalCtaButton: "Связаться",
    contact: {
      title: "Свяжитесь с нами",
      description:
        "Пишите в WhatsApp, звоните или отправляйте письмо. Доставка и техподдержка работают круглосуточно.",
      addressLabel: "Адрес",
      addressValue: "Port Baku Tower, Баку",
      hoursLabel: "График",
      hoursValue: "Ежедневно 09:00 – 23:00",
      emailLabel: "Эл. почта",
      emailValue: "concierge@udrive.az",
      phoneLabel: "Телефон",
      phoneValue: "+994 50 979 97 97",
    },
    contactWhatsappLabel: "WhatsApp",
    aboutTitle: "О нас",
    aboutIntro:
      "Команда uDrive объединяет премиальный парк, минимальные процессы и мгновенную связь для клиентов по всему Азербайджану.",
    corporateTitle: "Корпоративные решения",
    corporateDescription:
      "Долгосрочная аренда, водители и ежемесячная отчётность для компаний с гибким автопарком.",
    corporateBullets: [
      "Полный контроль флота и ежемесячные отчёты",
      "Чёткие SLA и выделенная линия связи",
      "Персональный менеджер и сменные водители",
    ],
    corporateProcessTitle: "Процесс",
    corporateProcess: [
      "Приём запроса и уточнение требований",
      "Подбор авто и подписание договора",
      "Передача, сервис и регулярный мониторинг",
    ],
    transferTitle: "Трансфер и консьерж",
    transferDescription:
      "Аэропорт, отели и VIP-протокол с водителями, владеющими несколькими языками.",
    transferIntro: [
      "Аренда автомобиля с водителем от компании uDrive LLC в Азербайджане гарантирует полный комфорт и спокойствие.",
      "Вы забудете о парковке, пробках, выборе маршрута и неожиданных штрафах — наши профессиональные водители отлично знают город и соблюдают все протокольные требования.",
      "Тариф зависит от класса и марки автомобиля, а также от срока аренды. Сообщите нам даты прилёта и вылета заранее, и мы предложим оптимальные условия.",
      "Компания uDrive LLC также предоставляет надёжные трансферные услуги с водителем. В стоимость входит 10 часов или 100 км по Баку, а выезды за пределы города оплачиваются дополнительно.",
      "Цена включает услуги профессионального водителя и топливо для арендованного автомобиля.",
    ],
    transferPriceBadge: "Частные цены трансфера (в одну сторону)",
    transferDestinationsLabel: "Маршруты",
    transferPassengersUnit: "пассажиров",
    transferCityPackageTitle: "Пакет по Баку",
    transferCityPackageLabel: "Баку — 10 часов или 100 км",
    transferTable: {
      car: "Авто для трансфера",
      hours: "10 часов / 100 км",
      transfer: "Трансфер",
    },
    transferSearchLabel: "Поиск",
    transferSearchPlaceholder: "Найдите авто или маршрут (например, Airport)",
    transferQuickLabel: "Быстрые маршруты",
    transferClearFilters: "Сбросить фильтры",
    transferResultsLabel: "{cars} авто · {routes} маршрутов",
    transferNoResults: "Нет доступных трансферов для выбранных фильтров.",
    transferTabs: {
      all: "Все",
      vans: "Минивэны",
      minibus: "Микроавтобусы",
      sedan: "Седаны",
    },
    filterLabels: {
      all: "Все",
      sedan: "Седан",
      suv: "SUV",
      lux: "Люкс",
    },
    carLabels: {
      specs: {
        year: "Год",
        type: "Топливо",
        seats: "Мест",
        engine: "Двигатель / расход / мощность",
        gear: "Коробка",
        price: "Цена",
      },
      orderCta: "Заказать в WhatsApp",
      more: "Подробнее...",
      perDay: "/ день",
      seatsUnit: "мест",
      whatsappTemplate:
        "Здравствуйте, хочу забронировать {brand} {model} ({year}).",
    },
    currencyLabel: "Валюта",
    footer: {
      descriptionLines: [
        "Премиальный прокат авто в Баку.",
        "Оцените разницу благодаря отобранному автопарку и высокому уровню сервиса.",
      ],
      exploreTitle: "Разделы",
      exploreLinks: [
        { href: "/cars", label: "Автопарк" },
        { href: "/transfer", label: "Трансфер" },
        { href: "/haqqimizda", label: "О нас" },
        { href: "/contact", label: "Контакты" },
      ],
      contactTitle: "Контакты",
      contactPhone: "+994 50 979 97 97",
      contactEmail: "info@udrive.az",
      contactAddress: "Port Baku Tower, Баку, Азербайджан",
      legalTitle: "Правовая информация",
      legalLinks: [
        { href: "/terms", label: "Условия сервиса" },
        { href: "/privacy", label: "Политика конфиденциальности" },
      ],
      copyright: "© {year} uDrive. Все права защищены.",
      status: "Системы работают",
    },
  },
};

export const languageOptions = [
  { id: "en", label: "EN" },
  { id: "az", label: "AZ" },
  { id: "ru", label: "RU" },
] as const;
