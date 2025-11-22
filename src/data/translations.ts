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

interface Translation {
  heroTitle: string;
  heroDescription: string;
  heroBullets: string[];
  heroPhone: string;
  heroCtas: HeroCTA;
  features: FeatureItem[];
  stats: StatItem[];
  topPicksTitle: string;
  topPicksDescription: string;
  categoriesTitle: string;
  categoriesDescription: string;
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaButton: string;
  contact: ContactInfo;
  aboutIntro: string;
  corporateTitle: string;
  corporateDescription: string;
  corporateBullets: string[];
  corporateProcess: string[];
  transferTitle: string;
  transferDescription: string;
  transferIntro: string[];
  transferTable: {
    car: string;
    hours: string;
    transfer: string;
  };
  filterLabels: Record<FilterId, string>;
  carLabels: CarCardLabels;
  currencyLabel: string;
}

export const translations: Record<LanguageCode, Translation> = {
  az: {
    heroTitle: "Azərbaycanda sadə və şəffaf rent-a-car təcrübəsi",
    heroDescription:
      "Seçdiyiniz kateqoriyanı filtr edin, qiyməti görün və WhatsApp-la rezerv edin. Heç bir əlavə səhifə və ya çətin forma yoxdur.",
    heroBullets: ["Tam sığorta", "24/7 əlaqə", "Bakı çatdırılma"],
    heroPhone: "Zəng et: +994 50 979 97 97",
    heroCtas: {
      primary: "WhatsApp ilə sifariş et",
      secondary: "Bütün avtomobillərə bax",
    },
    features: [
      {
        title: "15 dəqiqəyə təsdiq",
        description: "WhatsApp sorğularına operativ cavab veririk.",
      },
      {
        title: "Tam sığorta və servis",
        description:
          "Kasko, texniki yoxlama və yol kənarı yardım xidmətə daxildir.",
      },
      {
        title: "Qapıya çatdırılma",
        description: "Bakı və hava limanına 60 dəqiqə içində çatdırılma.",
      },
    ],
    stats: [
      { value: "500+", label: "Məmnun müştəri" },
      { value: "70+", label: "Avtomobil parkı" },
      { value: "24/7", label: "Concierge dəstəyi" },
    ],
    topPicksTitle: "Ən çox seçilən modellər",
    topPicksDescription:
      "Müştərilərimizin ən çox sifariş etdiyi avtomobillər – hazır parkdan dərhal çatdırılır.",
    categoriesTitle: "Kateqoriyalar üzrə seçim",
    categoriesDescription:
      "Sedan, SUV və Luxury parkını ayrı-ayrılıqda izləyin və uyğun variantı seçin.",
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
    corporateProcess: [
      "Sorğunun qəbulu və tələblərin dəqiqləşdirilməsi",
      "Avtomobil seçimi və müqavilə imzası",
      "Çatdırılma, texniki servis və aylıq monitorinq",
    ],
    transferTitle: "Transfer və concierge",
    transferDescription:
      "Hava limanı, otel və xüsusi tədbirlər üçün xüsusi transfer parkımız var. Sürücülərimiz çoxdilli və protokol qaydalarına vakifdir.",
    transferIntro: [
      "uDrive MMC-nin sürücülü rent-a-car xidməti Azərbaycanda səyahətinizi maksimum komfortlu edir.",
      "Bu servis sayəsində parklama, tıxac, marşrut seçimi və gözlənilməz cərimələrdən azad olursunuz – sürücülərimiz şəhərin hər küçəsini tanıyır və protokol qaydalarına riayət edir.",
      "Tariflər seçdiyiniz avtomobilin sinfi və icarə müddətindən asılıdır. Gəliş və gediş tarixlərinizi öncədən bizə bildirin ki, sizin üçün ən sərfəli şərtləri təşkil edək.",
      "uDrive MMC həmçinin sürücü ilə yüksək keyfiyyətli transfer xidmətləri təqdim edir: Baku daxilində 11 saat iş rejimi qiymətə daxildir, şəhərdən kənar üçün əlavə ödəniş tətbiq olunur.",
      "Qiymətə professional sürücünün xidməti və avtomobilin yanacaq təminatı da daxildir.",
    ],
    transferTable: {
      car: "Transfer üçün avtomobil",
      hours: "11 saat",
      transfer: "Transfer",
    },
    filterLabels: {
      all: "Hamısı",
      sedan: "Sedan",
      suv: "SUV",
      lux: "Luxury",
    },
    carLabels: {
      specs: {
        year: "İl",
        type: "Tip",
        seats: "Oturacaq",
        engine: "Mühərrik",
        gear: "Sürət qutusu",
        price: "Qiymət",
      },
      orderCta: "WhatsApp ilə Sifariş et",
      more: "Əlavə...",
    },
    currencyLabel: "Valyuta",
  },
  en: {
    heroTitle: "Simple and transparent car rental across Azerbaijan",
    heroDescription:
      "Filter the category you need, see the price, and confirm via WhatsApp. No extra pages or complicated forms.",
    heroBullets: ["Full insurance", "24/7 support", "Baku delivery"],
    heroPhone: "Call: +994 50 979 97 97",
    heroCtas: {
      primary: "Order via WhatsApp",
      secondary: "View all cars",
    },
    features: [
      {
        title: "15-minute confirmation",
        description: "We reply to WhatsApp requests almost instantly.",
      },
      {
        title: "Full insurance & service",
        description: "Comprehensive coverage, maintenance and roadside help.",
      },
      {
        title: "Doorstep delivery",
        description: "Baku city and airport handover within 60 minutes.",
      },
    ],
    stats: [
      { value: "500+", label: "Happy clients" },
      { value: "70+", label: "Fleet size" },
      { value: "24/7", label: "Concierge" },
    ],
    topPicksTitle: "Most booked models",
    topPicksDescription:
      "Customer favorites ready for immediate delivery anywhere in Baku.",
    categoriesTitle: "Pick by category",
    categoriesDescription:
      "Browse sedans, SUVs and luxury vehicles separately and compare prices.",
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
      "uDrive LLC also provides high-quality and reliable transfer services with a driver. Prices include 11 hours of service within Baku; trips outside the city are subject to an extra charge.",
      "Each package covers the services of a professional driver and fuel for the rented car.",
    ],
    transferTable: {
      car: "Cars for transfer",
      hours: "11 hours",
      transfer: "Transfer",
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
        type: "Fuel type",
        seats: "Seats",
        engine: "Engine / l/100km / power",
        gear: "Gearbox",
        price: "Price",
      },
      orderCta: "Order via WhatsApp",
      more: "More...",
    },
    currencyLabel: "Currency",
  },
  ru: {
    heroTitle: "Простой и прозрачный прокат авто в Азербайджане",
    heroDescription:
      "Выберите нужную категорию, увидьте цену и бронируйте через WhatsApp — без лишних страниц и сложных форм.",
    heroBullets: ["Полное каско", "Поддержка 24/7", "Доставка по Баку"],
    heroPhone: "Звонок: +994 50 979 97 97",
    heroCtas: {
      primary: "Заказать в WhatsApp",
      secondary: "Все автомобили",
    },
    features: [
      {
        title: "Подтверждение за 15 минут",
        description: "Мы отвечаем на запросы в WhatsApp практически мгновенно.",
      },
      {
        title: "Полное каско и сервис",
        description: "Страховка, ТО и помощь на дороге уже включены.",
      },
      {
        title: "Доставка до двери",
        description: "По Баку и в аэропорт передача в течение 60 минут.",
      },
    ],
    stats: [
      { value: "500+", label: "Довольных клиентов" },
      { value: "70+", label: "Авто в парке" },
      { value: "24/7", label: "Консьерж" },
    ],
    topPicksTitle: "Самые популярные модели",
    topPicksDescription:
      "Хиты бронирований — доступные прямо сейчас для доставки по Баку.",
    categoriesTitle: "Выбор по категориям",
    categoriesDescription:
      "Просматривайте седаны, SUV и люкс отдельно и сравнивайте цены.",
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
      emailLabel: "Email",
      emailValue: "concierge@udrive.az",
      phoneLabel: "Телефон",
      phoneValue: "+994 50 979 97 97",
    },
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
    corporateProcess: [
      "Приём запроса и уточнение требований",
      "Подбор авто и подписание договора",
      "Передача, сервис и регулярный мониторинг",
    ],
    transferTitle: "Трансфер и concierge",
    transferDescription:
      "Аэропорт, отели и VIP-протокол с водителями, владеющими несколькими языками.",
    transferIntro: [
      "Аренда автомобиля с водителем от компании uDrive LLC в Азербайджане гарантирует полный комфорт и спокойствие.",
      "Вы забудете о парковке, пробках, выборе маршрута и неожиданных штрафах — наши профессиональные водители отлично знают город и соблюдают все протокольные требования.",
      "Тариф зависит от класса и марки автомобиля, а также от срока аренды. Сообщите нам даты прилёта и вылета заранее, и мы предложим оптимальные условия.",
      "Компания uDrive LLC также предоставляет надёжные трансферные услуги с водителем. В стоимость входит 11 часов работы в пределах Баку, а выезды за пределы города оплачиваются дополнительно.",
      "Цена включает услуги профессионального водителя и топливо для арендованного автомобиля.",
    ],
    transferTable: {
      car: "Авто для трансфера",
      hours: "11 часов",
      transfer: "Трансфер",
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
    },
    currencyLabel: "Валюта",
  },
};

export const languageOptions = [
  { id: "az", label: "AZ" },
  { id: "en", label: "EN" },
  { id: "ru", label: "RU" },
] as const;
