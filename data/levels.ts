import { LevelData } from "../types";

export const LEVELS: LevelData[] = [
  {
    id: 1,
    title: "تهران: کافه نادری",
    description: "آغاز ماجراجویی در پایتخت. اشیاء را در هیاهوی شهر پیدا کن.",
    mapCoordinates: { x: 48, y: 32 },
    categories: [
      {
        id: "l1-sub1",
        title: "کالای خواب",
        color: "bg-indigo-300",
        words: ["ملحفه", "بالش", "پتو", "تشک", "لحاف"], // حذف: روتختی
        isSubCategory: true,
        transformsTo: "Bed",
        targetCategoryId: "l1-master",
      },
      {
        id: "l1-sub2",
        title: "روشنایی",
        color: "bg-yellow-300",
        words: ["لامپ", "کلید", "سرپیچ", "مهتابی", "لوستر"], // حذف: فیوز
        isSubCategory: true,
        transformsTo: "Lamp",
        targetCategoryId: "l1-master",
      },
      {
        id: "l1-master",
        title: "اتاق دنج",
        color: "bg-purple-400",
        words: ["کمد", "آینه", "دراور", "فرش"],
        isVisual: true,
        icon: "Home",
      },
      {
        id: "l1-c4",
        title: "نوشت‌افزار",
        color: "bg-blue-200",
        words: ["مداد", "خودکار", "پاک‌کن", "خط‌کش", "دفتر"], // حذف: تراش
      },
      {
        id: "l1-c5",
        title: "میوه‌های سرخ",
        color: "bg-red-300",
        words: ["هندوانه", "توت‌فرنگی", "گیلاس", "انار", "تمشک"], // حذف: شاتوت
      },
      {
        id: "l1-c6",
        title: "حیوانات مزرعه",
        color: "bg-green-300",
        words: ["گربه", "سگ", "گاو", "گوسفند", "اسب"], // حذف: مرغ
      },
      {
        id: "l1-c7",
        title: "زمستانی",
        color: "bg-orange-300",
        words: ["کاپشن", "شال‌گردن", "کلاه", "دستکش", "پالتو"], // حذف: بوت
      },
      // حذف شده: ارقام (عمومی‌ترین دسته)
    ],
  },
  {
    id: 2,
    title: "گیلان: جنگل ابری",
    description: "سفر به شمال سبز. لطافت باران و جنگل را احساس کن.",
    mapCoordinates: { x: 35, y: 20 },
    categories: [
      {
        id: "l2-sub1",
        title: "آب و هوا",
        color: "bg-sky-300",
        words: ["باران", "برف", "طوفان", "رعد", "مه"], // حذف: تگرگ
        isSubCategory: true,
        transformsTo: "CloudRain",
        targetCategoryId: "l2-master",
      },
      {
        id: "l2-sub2",
        title: "گل‌ها",
        color: "bg-pink-300",
        words: ["رُز", "یاس", "مریم", "نرگس", "محمدی"], // حذف: سنبل
        isSubCategory: true,
        transformsTo: "Flower2",
        targetCategoryId: "l2-master",
      },
      {
        id: "l2-master",
        title: "طبیعت بکر",
        color: "bg-emerald-500",
        words: ["کوه", "دشت", "دریا", "آبشار"],
        isVisual: true,
        icon: "Mountain",
      },
      {
        id: "l2-c4",
        title: "درختان",
        color: "bg-emerald-300",
        words: ["بلوط", "راش", "کاج", "سرو", "چنار"], // حذف: بید
      },
      {
        id: "l2-c5",
        title: "جواهرات",
        color: "bg-indigo-300",
        words: ["الماس", "زمرد", "یاقوت", "فیروزه", "عقیق"], // حذف: زبرجد
      },
      {
        id: "l2-c7",
        title: "دریا و اقیانوس",
        color: "bg-cyan-300",
        words: ["آرام", "اطلس", "هند", "خزر", "مدیترانه"], // حذف: عمان
      },
      {
        id: "l2-c8",
        title: "فلزات",
        color: "bg-stone-300",
        words: ["آهن", "مس", "سرب", "آلومینیوم", "برنج"], // حذف: روی
      },
      // حذف شده: منظومه شمسی (بی‌ربط به طبیعت گیلان)
    ],
  },
  {
    id: 3,
    title: "اصفهان: نقش جهان",
    description: "هنر و معماری در قلب ایران. زیبایی را کشف کن.",
    mapCoordinates: { x: 52, y: 52 },
    categories: [
      {
        id: "l3-sub1",
        title: "سازهای ایرانی",
        color: "bg-rose-300",
        words: ["تار", "سه تار", "سنتور", "دف", "نی"], // حذف: کمانچه
        isSubCategory: true,
        transformsTo: "Music",
        targetCategoryId: "l3-master",
      },
      {
        id: "l3-sub2",
        title: "عکاسی",
        color: "bg-zinc-300",
        words: ["لنز", "شاتر", "دیافراگم", "فلاش", "تریپاد"], // حذف: ایزو
        isSubCategory: true,
        transformsTo: "Camera",
        targetCategoryId: "l3-master",
      },
      {
        id: "l3-master",
        title: "آتلیه هنر",
        color: "bg-fuchsia-400",
        words: ["بوم", "قلم‌مو", "پالت", "سه پایه"],
        isVisual: true,
        icon: "Palette",
      },
      {
        id: "l3-c4",
        title: "شاعران کهن",
        color: "bg-yellow-200",
        words: ["حافظ", "سعدی", "مولانا", "فردوسی", "خیام"], // حذف: عطار
      },
      {
        id: "l3-c5",
        title: "سبک‌های هنری",
        color: "bg-purple-300",
        words: ["رئالیسم", "کوبیسم", "سوررئال", "مدرن", "کلاسیک"], // حذف: امپرسیون
      },
      {
        id: "l3-c7",
        title: "دستگاه‌ها",
        color: "bg-orange-300",
        words: ["شور", "ماهور", "همایون", "چهارگاه", "سه گاه"], // حذف: نوا
      },
      {
        id: "l3-c8",
        title: "صنایع دستی",
        color: "bg-teal-300",
        words: ["قالی", "گلیم", "میناکاری", "خاتم", "منبت"], // حذف: ترمه
      },
      // حذف شده: سینما (کمترین ارتباط با بافت سنتی اصفهان)
    ],
  },
  {
    id: 4,
    title: "یزد: شهر بادگیرها",
    description: "سکوت کویر و معماری خشتی. منطق را پیدا کن.",
    mapCoordinates: { x: 62, y: 60 },
    categories: [
      {
        id: "l4-sub1",
        title: "هندسه",
        color: "bg-violet-400",
        words: ["مربع", "دایره", "مثلث", "لوزی", "بیضی"], // حذف: ذوزنقه
        isSubCategory: true,
        transformsTo: "Shapes",
        targetCategoryId: "l4-master",
      },
      {
        id: "l4-sub2",
        title: "ورزش‌های توپی",
        color: "bg-yellow-400",
        words: ["فوتبال", "والیبال", "بسکتبال", "هندبال", "تنیس"], // حذف: راگبی
        isSubCategory: true,
        transformsTo: "Trophy",
        targetCategoryId: "l4-master",
      },
      {
        id: "l4-master",
        title: "مدرسه",
        color: "bg-blue-500",
        words: ["تخته", "نیمکت", "گچ", "ماژیک"],
        isVisual: true,
        icon: "Home",
      },
      {
        id: "l4-c5",
        title: "واحد اندازه‌گیری",
        color: "bg-blue-300",
        words: ["متر", "لیتر", "گرم", "ثانیه", "آمپر"], // حذف: ژول
      },
      {
        id: "l4-c6",
        title: "عناصر طبیعت",
        color: "bg-orange-400",
        words: ["آب", "باد", "خاک", "آتش", "نور"], // حذف: فلز
      },
      {
        id: "l4-c7",
        title: "انواع ادبی",
        color: "bg-emerald-300",
        words: ["حماسی", "غنایی", "تعلیمی", "کمدی", "تراژدی"], // حذف: درام
      },
      {
        id: "l4-c8",
        title: "علوم پایه",
        color: "bg-cyan-200",
        words: ["فیزیک", "شیمی", "زیست", "ریاضی", "نجوم"], // حذف: زمین
      },
      // حذف شده: احساسات (انتزاعی و بی‌ربط به تم منطق/مدرسه)
    ],
  },
  {
    id: 5,
    title: "شیراز: شهر راز",
    description: "پایان سفر در تخت جمشید. شکوه تمدن.",
    mapCoordinates: { x: 55, y: 78 },
    categories: [
      {
        id: "l5-sub1",
        title: "ارزها",
        color: "bg-green-400",
        words: ["ریال", "دلار", "یورو", "پوند", "لیر"], // حذف: ین
        isSubCategory: true,
        transformsTo: "Banknote",
        targetCategoryId: "l5-master",
      },
      {
        id: "l5-sub2",
        title: "هفت سین",
        color: "bg-red-400",
        words: ["سیب", "سمنو", "سنجد", "سیر", "سرکه"], // حذف: سماق
        isSubCategory: true,
        transformsTo: "Apple",
        targetCategoryId: "l5-master",
      },
      {
        id: "l5-master",
        title: "نوروز",
        color: "bg-rose-500",
        words: ["آینه", "قرآن", "ماهی", "سبزه"],
        isVisual: true,
        icon: "Flower2",
      },
      {
        id: "l5-c4",
        title: "شیر (ایهام)",
        color: "bg-amber-100",
        words: ["جنگل", "پاکت", "آب", "سماور", "یال"], // حذف: پاستوریزه
      },
      {
        id: "l5-c5",
        title: "نام‌های دخترانه",
        color: "bg-pink-200",
        words: ["لادن", "شقایق", "بنفشه", "نیلوفر", "یاسمن"], // حذف: ارغوان
      },
      {
        id: "l5-c6",
        title: "پسوند مکان",
        color: "bg-purple-200",
        words: ["ستان", "زار", "دان", "کده", "آباد"], // حذف: سرا
      },
      {
        id: "l5-c8",
        title: "شیوه‌های پخت برنج",
        color: "bg-yellow-100",
        words: ["کته", "آبکش", "دمپخت", "پلو", "چلو"], // حذف: شیربرنج
      },
      // حذف شده: نشانه نگارشی (کاملاً بی‌ربط به تم شیراز/نوروز)
    ],
  },
  {
    id: 6,
    title: "خوزستان: لب کارون",
    description: "گرمای جنوب و تپش صنعت. انرژی را آزاد کن.",
    mapCoordinates: { x: 25, y: 70 },
    categories: [
      {
        id: "l6-sub1",
        title: "صنعت نفت",
        color: "bg-slate-500",
        words: ["دکل", "بشکه", "پالایشگاه", "لوله", "نفتکش"], // حذف: مته
        isSubCategory: true,
        transformsTo: "OilPump",
        targetCategoryId: "l6-master",
      },
      {
        id: "l6-sub2",
        title: "وسایل خنک‌کننده",
        color: "bg-cyan-200",
        words: ["پنکه", "کولر", "بادبزن", "اسپلیت", "یخ"], // حذف: سایه‌بان
        isSubCategory: true,
        transformsTo: "Fan",
        targetCategoryId: "l6-master",
      },
      {
        id: "l6-master",
        title: "نیروگاه",
        color: "bg-orange-500",
        words: ["توربین", "ژنراتور", "برق", "سد"],
        isVisual: true,
        icon: "Lightning",
      },
      {
        id: "l6-c4",
        title: "درخت نخل",
        color: "bg-amber-600",
        words: ["خارک", "رطب", "خرما", "هسته", "خوشه"], // حذف: لیف
      },
      {
        id: "l6-c6",
        title: "تمدن‌های باستان",
        color: "bg-stone-400",
        words: ["عیلام", "سومر", "بابل", "آشور", "ماد"], // حذف: پارت
      },
      {
        id: "l6-c7",
        title: "انواع کشتی",
        color: "bg-indigo-400",
        words: ["لنج", "ناو", "قایق", "یدک‌کش", "زیردریایی"], // حذف: کشتی
      },
      {
        id: "l6-c8",
        title: "آلات موسیقی جنوبی",
        color: "bg-rose-400",
        words: ["نی‌انبان", "دمام", "سنج", "تمپو", "عود"], // حذف: قانون
      },
      // حذف شده: رودهای ایران (شامل رودهای شمالی مثل ارس بود)
    ],
  },
  {
    id: 7,
    title: "همدان: هگمتانه",
    description: "پایتخت تاریخ و تمدن. در غارها و کتیبه‌ها جستجو کن.",
    mapCoordinates: { x: 30, y: 35 },
    categories: [
      {
        id: "l7-sub1",
        title: "سفالگری",
        color: "bg-orange-300",
        words: ["چرخ", "کوره", "لعاب", "کوزه", "سفال"], // حذف: گل‌رس
        isSubCategory: true,
        transformsTo: "Vase",
        targetCategoryId: "l7-master",
      },
      {
        id: "l7-sub2",
        title: "غارنوردی",
        color: "bg-zinc-600",
        words: ["مشعل", "خفاش", "قندیل", "طناب", "کلاه ایمنی"], // حذف: قلاب
        isSubCategory: true,
        transformsTo: "Cave",
        targetCategoryId: "l7-master",
      },
      {
        id: "l7-master",
        title: "موزه تاریخ",
        color: "bg-amber-700",
        words: ["کتیبه", "تندیس", "فسیل", "سکه"],
        isVisual: true,
        icon: "Museum",
      },
      {
        id: "l7-c4",
        title: "مشاهیر پزشکی",
        color: "bg-emerald-200",
        words: ["ابوعلی‌سینا", "رازی", "پاستور", "حکیم", "طبیب"], // حذف: کخ
      },
      {
        id: "l7-c5",
        title: "خشکبار",
        color: "bg-yellow-600",
        words: ["گردو", "بادام", "پسته", "فندق", "کشمش"], // حذف: تخمه
      },
      {
        id: "l7-c6",
        title: "مترادف‌های پیر",
        color: "bg-gray-300",
        words: ["کهنسال", "سالخورده", "ریش‌سفید", "باستانی", "دیرینه"], // حذف: فرتوت
      },
      {
        id: "l7-c7",
        title: "سنگ‌های ساختمانی",
        color: "bg-stone-300",
        words: ["گرانیت", "مرمر", "تراورتن", "رسوبی", "دگرگونی"], // حذف: آذرین
      },
      // حذف شده: اجرام آسمانی (کاملاً بی‌ربط به تاریخ/غار همدان)
    ],
  },
  {
    id: 8,
    title: "تبریز: شهر اولین‌ها",
    description: "بازار سرپوشیده و کوه‌های سرد. تجارت را بیاموز.",
    mapCoordinates: { x: 20, y: 15 },
    categories: [
      {
        id: "l8-sub1",
        title: "چرم‌دوزی",
        color: "bg-amber-800",
        words: ["کیف", "کفش", "کمربند", "دباغی", "واکس"], // حذف: پاشنه
        isSubCategory: true,
        transformsTo: "Boot",
        targetCategoryId: "l8-master",
      },
      {
        id: "l8-sub2",
        title: "شیرینی‌های سنتی",
        color: "bg-pink-200",
        words: ["نوقا", "ریس", "قرابیه", "باقلوا", "لوز"], // حذف: رشته‌خشکار (سوغات گیلان)
        isSubCategory: true,
        transformsTo: "Candy",
        targetCategoryId: "l8-master",
      },
      {
        id: "l8-master",
        title: "بازار بزرگ",
        color: "bg-yellow-500",
        words: ["ترازو", "چرتکه", "حجره", "تیمچه"],
        isVisual: true,
        icon: "Shop",
      },
      {
        id: "l8-c5",
        title: "رنگ‌های قالی",
        color: "bg-rose-600",
        words: ["لاکی", "رناسی", "نیلی", "کرم", "دوغی"], // حذف: شکاری
      },
      {
        id: "l8-c6",
        title: "پدیده‌های جوی",
        color: "bg-sky-200",
        words: ["کولاک", "بهمن", "یخبندان", "صاعقه", "تندباد"], // حذف: شبنم
      },
      {
        id: "l8-c7",
        title: "غلات و حبوبات",
        color: "bg-yellow-200",
        words: ["گندم", "جو", "عدس", "لپه", "نخود"], // حذف: لوبیا
      },
      {
        id: "l8-c8",
        title: "واحد شمارش",
        color: "bg-teal-400",
        words: ["جفت", "دست", "تخته", "طاقه", "باب"], // حذف: نخ
      },
      // حذف شده: کوه‌های ایران (شامل کوه‌های غیر مرتبط با آذربایجان)
    ],
  },
  {
    id: 9,
    title: "مشهد: دیار خراسان",
    description: "زعفران و حماسه. ادبیات و معنویت را ترکیب کن.",
    mapCoordinates: { x: 80, y: 25 },
    categories: [
      {
        id: "l9-sub1",
        title: "شاهنامه",
        color: "bg-orange-400",
        words: ["رستم", "سهراب", "اسفندیار", "سیمرغ", "ضحاک"], // حذف: کاوه
        isSubCategory: true,
        transformsTo: "Sword",
        targetCategoryId: "l9-master",
      },
      {
        id: "l9-sub2",
        title: "ادویه‌ها",
        color: "bg-red-500",
        words: ["زعفران", "زردچوبه", "هل", "دارچین", "فلفل"], // حذف: آویشن
        isSubCategory: true,
        transformsTo: "Saffron",
        targetCategoryId: "l9-master",
      },
      {
        id: "l9-master",
        title: "گنجینه ادب",
        color: "bg-violet-600",
        words: ["کتاب", "جوهر", "قلم", "طومار"],
        isVisual: true,
        icon: "Book",
      },
      {
        id: "l9-c4",
        title: "سنگ‌های قیمتی",
        color: "bg-cyan-400",
        words: ["فیروزه", "شرف‌الشمس", "در", "مروارید", "لاجورد"], // حذف: کهربا
      },
      {
        id: "l9-c5",
        title: "زمان‌های شرعی",
        color: "bg-indigo-300",
        words: ["سحر", "افطار", "مغرب", "عشا", "ظهر"], // حذف: طلوع
      },
      {
        id: "l9-c6",
        title: "سلسله‌های پادشاهی",
        color: "bg-amber-300",
        words: ["صفویه", "قاجار", "زندیه", "افشاریه", "سامانیان"], // حذف: ساسانیان
      },
      {
        id: "l9-c7",
        title: "افعال حرکتی",
        color: "bg-lime-400",
        words: ["دویدن", "پریدن", "جهیدن", "غلتیدن", "شتافتن"], // حذف: خزیدن
      },
      // حذف شده: اشکال هندسی ۳بعدی (بی‌ربط به تم معنوی/ادبی)
    ],
  },
  {
    id: 10,
    title: "خلیج فارس: جزیره هرمز",
    description: "پایان حماسی در خاک‌های رنگی. گنج نهایی را پیدا کن.",
    mapCoordinates: { x: 65, y: 85 },
    categories: [
      {
        id: "l10-sub1",
        title: "دریانوردی",
        color: "bg-blue-600",
        words: ["لنگر", "سکان", "بادبان", "قطب‌نما", "ناخدا"], // حذف: ملوان
        isSubCategory: true,
        transformsTo: "Anchor",
        targetCategoryId: "l10-master",
      },
      {
        id: "l10-sub2",
        title: "موجودات دریایی",
        color: "bg-teal-500",
        words: ["کوسه", "نهنگ", "دلفین", "میگو", "هشت‌پا"], // حذف: مرجان
        isSubCategory: true,
        transformsTo: "Fish",
        targetCategoryId: "l10-master",
      },
      {
        id: "l10-master",
        title: "گنج پنهان",
        color: "bg-yellow-400",
        words: ["صندوق", "نقشه", "طلا", "مروارید"],
        isVisual: true,
        icon: "Treasure",
      },
      {
        id: "l10-c4",
        title: "رنگ‌های هنری",
        color: "bg-red-400",
        words: ["اخرایی", "لاجوردی", "فیروزه‌ای", "ارغوانی", "خاکستری"], // حذف: نقرآبی
      },
      {
        id: "l10-c5",
        title: "زمین‌شناسی",
        color: "bg-stone-500",
        words: ["فرسایش", "رسوب", "گسل", "آتشفشان", "مذاب"], // حذف: کانی
      },
      {
        id: "l10-c6",
        title: "ضرب‌المثل (حیوانات)",
        color: "bg-green-300",
        words: ["گرگ", "موش", "شتر", "فیل", "لاک‌پشت"], // حذف: خرگوش
      },
      {
        id: "l10-c7",
        title: "صورت‌های فلکی",
        color: "bg-indigo-950",
        words: ["دب‌اکبر", "جبار", "خوشه پروین", "عقرب", "اسد"], // حذف: ذات‌الکرسی
      },
      // حذف شده: مفاهیم متضاد (انتزاعی و بی‌ربط به طبیعت هرمز)
    ],
  },
  {
    id: 11,
    title: "کرمان: شب‌های کویر",
    description: "سکوت لوت و راز ستاره‌ها. ارگ باستانی را بازسازی کن.",
    mapCoordinates: { x: 70, y: 65 },
    categories: [
      {
        id: "l11-sub1",
        title: "نجوم و رصد",
        color: "bg-indigo-950",
        words: ["تلسکوپ", "رصدخانه", "خسوف", "کسوف", "هلال"], // حذف: سمت‌الرأس
        isSubCategory: true,
        transformsTo: "Telescope",
        targetCategoryId: "l11-master",
      },
      {
        id: "l11-sub2",
        title: "صنایع دستی کرمان",
        color: "bg-red-300",
        words: ["پته", "قالی", "گلیم", "شال", "عریض"], // حذف: جاحیم
        isSubCategory: true,
        transformsTo: "Rug",
        targetCategoryId: "l11-master",
      },
      {
        id: "l11-master",
        title: "ارگ بم",
        color: "bg-amber-700",
        words: ["خشت", "بارو", "برج", "حصار"],
        isVisual: true,
        icon: "Castle",
      },
      {
        id: "l11-c4",
        title: "سوغات کرمان",
        color: "bg-green-200",
        words: ["قوتو", "زیره", "کلمپه", "پسته", "مس"], // حذف: خرما
      },
      {
        id: "l11-c5",
        title: "بیابان‌های ایران",
        color: "bg-yellow-200",
        words: ["لوت", "نمک", "مرنجاب", "مصر", "ورزنه"], // حذف: حلوان
      },
      {
        id: "l11-c6",
        title: "مترادف‌های گرما",
        color: "bg-orange-500",
        words: ["حرارت", "داغی", "شرجی", "سوزان", "آتشین"], // حذف: تفت
      },
      {
        id: "l11-c7",
        title: "خزندگان کویر",
        color: "bg-lime-600",
        words: ["مارمولک", "عقرب", "رتیل", "افعی", "آفتاب‌پرست"], // حذف: بزمجه
      },
      // حذف شده: عناصر جدول تناوبی (علمی و بی‌ربط به کویر)
    ],
  },
  {
    id: 12,
    title: "کرمانشاه: کوه بیستون",
    description: "عشق شیرین و فرهاد. تیشه بر سنگ بزن.",
    mapCoordinates: { x: 20, y: 45 },
    categories: [
      {
        id: "l12-sub1",
        title: "عاشقانه‌های نظامی",
        color: "bg-rose-500",
        words: ["شیرین", "فرهاد", "خسرو", "لیلی", "مجنون"], // حذف: ویس
        isSubCategory: true,
        transformsTo: "Heart",
        targetCategoryId: "l12-master",
      },
      {
        id: "l12-sub2",
        title: "ابزار سنگ‌تراشی",
        color: "bg-stone-400",
        words: ["تیشه", "چکش", "مته", "اسکنه‌", "سندان"], // حذف: اهرم
        isSubCategory: true,
        transformsTo: "Hammer",
        targetCategoryId: "l12-master",
      },
      {
        id: "l12-master",
        title: "حکاکی کوه",
        color: "bg-stone-600",
        words: ["سنگ", "صخره", "کتیبه", "نقش‌برجسته"],
        isVisual: true,
        icon: "MountainArt",
      },
      {
        id: "l12-c4",
        title: "پوشاک محلی",
        color: "bg-emerald-400",
        words: ["گیوه", "چوخا", "کلاش", "سربند", "شال"], // حذف: جلیقه
      },
      {
        id: "l12-c5",
        title: "سازهای زهی",
        color: "bg-amber-500",
        words: ["تنبور", "دوتار", "دیوان", "بربط", "چنگ"], // حذف: رباب
      },
      {
        id: "l12-c6",
        title: "نام‌های پسرانه شاهنامه",
        color: "bg-blue-300",
        words: ["کیخسرو", "سیاوش", "گیو", "گودرز", "بیژن"], // حذف: منوچهر
      },
      {
        id: "l12-c7",
        title: "صفات پهلوانی",
        color: "bg-purple-400",
        words: ["دلیر", "نترس", "یل", "جوانمرد", "غیور"], // حذف: تهمتن
      },
      // حذف شده: شیرینی‌های سنتی (شامل گز و سوهان که برای کرمانشاه نیستند)
    ],
  },
  {
    id: 13,
    title: "سیستان: شهر سوخته",
    description: "مهد تمدن باستان. اسرار زیر خاک را کشف کن.",
    mapCoordinates: { x: 90, y: 60 },
    categories: [
      {
        id: "l13-sub1",
        title: "باستان‌شناسی",
        color: "bg-amber-600",
        words: ["کاووش", "مرمت", "خاکبرداری", "قدمت", "عتیقه"], // حذف: موزه
        isSubCategory: true,
        transformsTo: "Brush",
        targetCategoryId: "l13-master",
      },
      {
        id: "l13-sub2",
        title: "دریاچه‌ها و تالاب‌ها",
        color: "bg-cyan-500",
        words: ["هامون", "ارومیه", "پریشان", "بختگان", "زریوار"], // حذف: مهارلو
        isSubCategory: true,
        transformsTo: "WaterDrop",
        targetCategoryId: "l13-master",
      },
      {
        id: "l13-master",
        title: "تمدن کهن",
        color: "bg-orange-700",
        words: ["جمجمه", "چشم‌مصنوعی", "سفال", "انیمیشن"],
        isVisual: true,
        icon: "Eye",
      },
      {
        id: "l13-c4",
        title: "بادهای معروف",
        color: "bg-slate-300",
        words: ["صدوبیست‌روز", "موسمی", "صبا", "لوچو", "خزری"], // حذف: شرتا
      },
      {
        id: "l13-c5",
        title: "حیوانات اساطیری",
        color: "bg-red-400",
        words: ["سیمرغ", "ققنوس", "رخش", "اژدها", "دیو"], // حذف: هما
      },
      {
        id: "l13-c7",
        title: "پدیده‌های جغرافیایی",
        color: "bg-green-500",
        words: ["فلات", "جلگه", "دره", "تنگه", "خلیج"], // حذف: دماغه
      },
      {
        id: "l13-c8",
        title: "واحد پول قدیم",
        color: "bg-teal-300",
        words: ["دریک", "شاهی", "قران", "عباسی", "دینار"], // حذف: اشرافی
      },
      // حذف شده: غلات و نان (عمومی و بی‌ربط به تمدن شهر سوخته)
    ],
  },
  {
    id: 14,
    title: "ترکمن‌صحرا: دشت سبز",
    description: "اسب‌های اصیل و آوای دوتار. با طبیعت یکی شو.",
    mapCoordinates: { x: 60, y: 15 },
    categories: [
      {
        id: "l14-sub1",
        title: "تجهیزات سوارکاری",
        color: "bg-amber-900",
        words: ["زین", "رکاب", "لگام", "نعل", "شلاق"], // حذف: افسار
        isSubCategory: true,
        transformsTo: "HorseShoe",
        targetCategoryId: "l14-master",
      },
      {
        id: "l14-sub2",
        title: "رنگ‌های اسب",
        color: "bg-stone-500",
        words: ["کرند", "کهر", "نیله", "سمند", "قره"], // حذف: ابرش
        isSubCategory: true,
        transformsTo: "Horse",
        targetCategoryId: "l14-master",
      },
      {
        id: "l14-master",
        title: "زندگی عشایری",
        color: "bg-green-600",
        words: ["آلاچیق", "اجاق", "نمد", "گله"],
        isVisual: true,
        icon: "Tent",
      },
      {
        id: "l14-c4",
        title: "لباس ترکمنی",
        color: "bg-red-600",
        words: ["دون", "چکمه", "تلپک", "بوریک", "چارقد"], // حذف: یاشماق
      },
      {
        id: "l14-c5",
        title: "انواع ساز کوبه‌ای",
        color: "bg-orange-400",
        words: ["تنبک", "دف", "دایره", "دهل", "نقاره"], // حذف: طبل
      },
      {
        id: "l14-c6",
        title: "گل‌های وحشی",
        color: "bg-pink-400",
        words: ["شقایق", "بابونه", "لاله", "همیشه‌بهار", "بنفشه"], // حذف: نسرین
      },
      {
        id: "l14-c8",
        title: "واحد وزن قدیم",
        color: "bg-gray-400",
        words: ["من", "سیر", "مثقال", "خروار", "چارک"], // حذف: نخود
      },
      // حذف شده: زمان (دستور زبان و بی‌ربط)
    ],
  },
  {
    id: 15,
    title: "دماوند: بام ایران",
    description: "نبرد نهایی با دیو سپید. صعود به بالاترین نقطه.",
    mapCoordinates: { x: 50, y: 30 },
    categories: [
      {
        id: "l15-sub1",
        title: "تجهیزات کوهنوردی",
        color: "bg-red-600",
        words: ["کارابین", "کرامپون", "هارنس", "باتوم", "کلنگ"], // حذف: پابند
        isSubCategory: true,
        transformsTo: "IceAxe",
        targetCategoryId: "l15-master",
      },
      {
        id: "l15-sub2",
        title: "شخصیت‌های اساطیری",
        color: "bg-purple-600",
        words: ["آرش", "ضحاک", "کاوه", "فریدون", "دیوسپید"], // حذف: اسفندیار
        isSubCategory: true,
        transformsTo: "Demon",
        targetCategoryId: "l15-master",
      },
      {
        id: "l15-master",
        title: "فتح قله",
        color: "bg-slate-100",
        words: ["پرچم", "برف", "آتشفشان", "دهانه"],
        isVisual: true,
        icon: "Flag",
      },
      {
        id: "l15-c4",
        title: "مترادف‌های قله",
        color: "bg-sky-500",
        words: ["ستیغ", "چکاد", "راس", "اوج", "فراز"], // حذف: کوهسار
      },
      {
        id: "l15-c5",
        title: "لوازم کمپینگ",
        color: "bg-green-700",
        words: ["کیسه‌خواب", "چادر", "فلاسک", "اجاق", "قطب‌نما"], // حذف: زیرانداز
      },
      {
        id: "l15-c6",
        title: "مترادف‌های سرما",
        color: "bg-cyan-200",
        words: ["برودت", "زمهرير", "انجماد", "یخبندان", "سرمایش"], // حذف: خنکا
      },
      {
        id: "l15-c7",
        title: "عوارض زمین",
        color: "bg-stone-500",
        words: ["یخچال", "مورن", "بهمن‌گیر", "شن‌اسکی", "دیواره"], // حذف: نقاب
      },
      // حذف شده: نام‌های انتزاعی (پرکننده و کم‌ارتباط)
    ],
  },
  {
    id: 16,
    title: "کردستان: اورامانات",
    description: "روستاهای پلکانی و نوای دف. همبستگی را تجربه کن.",
    mapCoordinates: { x: 15, y: 40 },
    categories: [
      {
        id: "l16-sub1",
        title: "پوشاک کردی",
        color: "bg-teal-700",
        words: ["کلاش", "شال", "سورانی", "فرنجی", "جافی"], // حذف: کوا
        isSubCategory: true,
        transformsTo: "Vest",
        targetCategoryId: "l16-master",
      },
      {
        id: "l16-sub2",
        title: "مراسم پیرشالیار",
        color: "bg-purple-500",
        words: ["ذکر", "دف", "تنبور", "دراویش", "سماع"], // حذف: خانقاه
        isSubCategory: true,
        transformsTo: "Drum",
        targetCategoryId: "l16-master",
      },
      {
        id: "l16-master",
        title: "معماری پلکانی",
        color: "bg-stone-500",
        words: ["سنگ‌چین", "بام", "حیاط", "شیب"],
        isVisual: true,
        icon: "Stairs",
      },
      {
        id: "l16-c5",
        title: "میوه‌های کوهی",
        color: "bg-red-400",
        words: ["زالزالک", "ازگیل", "ریواس", "شاتوت", "بلوط"], // حذف: تمشک
      },
      {
        id: "l16-c6",
        title: "ابزار نجاری",
        color: "bg-amber-600",
        words: ["رنده", "مغار", "اره", "سمباده", "گیره"], // حذف: گونیا
      },
      {
        id: "l16-c7",
        title: "مترادف‌های شجاعت",
        color: "bg-orange-400",
        words: ["شهامت", "دلیری", "بی‌باکی", "جسارت", "رشادت"], // حذف: تهور
      },
      {
        id: "l16-c8",
        title: "واحد سطح و زمین",
        color: "bg-green-300",
        words: ["هکتار", "جریب", "قصب", "متر", "فرسخ"], // حذف: آر
      },
      // حذف شده: کلمات هم‌خانواده (بی‌ربط به فرهنگ کردستان)
    ],
  },
  {
    id: 17,
    title: "کاشان: خانه طباطبایی‌ها",
    description: "عطر گلاب و معماری اصیل. تقارن را در خشت‌ها پیدا کن.",
    mapCoordinates: { x: 50, y: 45 },
    categories: [
      {
        id: "l17-sub1",
        title: "گلاب‌گیری",
        color: "bg-pink-400",
        words: ["تقطیر", "دیگ", "قرابه", "عرق", "نی"], // حذف: پارچ
        isSubCategory: true,
        transformsTo: "RoseWater",
        targetCategoryId: "l17-master",
      },
      {
        id: "l17-sub2",
        title: "اجزای خانه سنتی",
        color: "bg-amber-200",
        words: ["هشتی", "دالان", "اندرونی", "بیرونی", "شاه‌نشین"], // حذف: سه‌دری
        isSubCategory: true,
        transformsTo: "Window",
        targetCategoryId: "l17-master",
      },
      {
        id: "l17-master",
        title: "باغ فین",
        color: "bg-cyan-600",
        words: ["فواره", "سرو", "حوض", "عمارت"],
        isVisual: true,
        icon: "Fountain",
      },
      {
        id: "l17-c4",
        title: "فرش و گلیم (طرح)",
        color: "bg-red-700",
        words: ["لچک", "ترنج", "اسلیمی", "ختایی", "بته‌جقه"], // حذف: شکارگاه
      },
      {
        id: "l17-c5",
        title: "مفاهیم فیزیک نور",
        color: "bg-yellow-300",
        words: ["انعکاس", "شکست", "طیف", "کانون", "عدسی"], // حذف: پراش
      },
      {
        id: "l17-c7",
        title: "انواع چوب",
        color: "bg-brown-500",
        words: ["گردو", "راش", "توسکا", "آبنوس", "افرا"], // حذف: ملچ
      },
      {
        id: "l17-c8",
        title: "مترادف‌های پنهان",
        color: "bg-slate-400",
        words: ["مستتر", "نهان", "مخفی", "سری", "نامرئی"], // حذف: غیب
      },
      // حذف شده: حشرات مفید (بی‌ربط)
    ],
  },
  {
    id: 18,
    title: "لرستان: مفرغ‌های باستانی",
    description: "سرزمین آبشارها و بلوط. هنر فلزکاری ۳۰۰۰ ساله.",
    mapCoordinates: { x: 28, y: 55 },
    categories: [
      {
        id: "l18-sub1",
        title: "سلاح‌های سرد",
        color: "bg-slate-500",
        words: ["گرز", "خنجر", "زوبین", "تبر", "نیزه"], // حذف: شیردال (موجود است نه سلاح)
        isSubCategory: true,
        transformsTo: "Dagger",
        targetCategoryId: "l18-master",
      },
      {
        id: "l18-sub2",
        title: "طبیعت زاگرس",
        color: "bg-emerald-600",
        words: ["بلوط", "آبشار", "صخره", "دره", "لاله‌واژگون"], // حذف: سنجاب
        isSubCategory: true,
        transformsTo: "Oak",
        targetCategoryId: "l18-master",
      },
      {
        id: "l18-master",
        title: "قلعه فلک‌الافلاک",
        color: "bg-stone-700",
        words: ["دژ", "کنگره", "خندق", "موزه"],
        isVisual: true,
        icon: "CastleSmall",
      },
      {
        id: "l18-c4",
        title: "نام‌های کنایه‌ای",
        color: "bg-indigo-300",
        words: ["دست‌کج", "روباه‌صفت", "سنگ‌دل", "شیردل", "دهن‌بین"], // حذف: خاکی
      },
      {
        id: "l18-c5",
        title: "فلزات آلیاژی",
        color: "bg-gray-400",
        words: ["مفرغ", "برنز", "چدن", "ورشو", "برنج"], // حذف: فولاد
      },
      {
        id: "l18-c6",
        title: "آواهای طبیعت",
        color: "bg-sky-200",
        words: ["شرشر", "وزوز", "چهچهه", "خش‌خش", "زوزه"], // حذف: غارش
      },
      {
        id: "l18-c7",
        title: "مترادف‌های اندوه",
        color: "bg-violet-400",
        words: ["غم", "حزن", "ماتم", "غصه", "ملال"], // حذف: تاسف
      },
      // حذف شده: اجرام منظومه/اقمار (بی‌ربط به تاریخ لرستان)
    ],
  },
  {
    id: 19,
    title: "قزوین: پایتخت خوشنویسی",
    description: "خط نستعلیق و شیرینی‌های سنتی. ظرافت قلم را دریاب.",
    mapCoordinates: { x: 40, y: 30 },
    categories: [
      {
        id: "l19-sub1",
        title: "ابزار خوشنویسی",
        color: "bg-stone-800",
        words: ["دوات", "لیقه", "قلم‌نی", "قط‌زن", "مرکب"], // حذف: مسطر
        isSubCategory: true,
        transformsTo: "Ink",
        targetCategoryId: "l19-master",
      },
      {
        id: "l19-sub2",
        title: "خطوط اسلامی",
        color: "bg-teal-600",
        words: ["نستعلیق", "ثلث", "نسخ", "کوفی", "شکسته"], // حذف: ریحان
        isSubCategory: true,
        transformsTo: "Scroll",
        targetCategoryId: "l19-master",
      },
      {
        id: "l19-master",
        title: "چهل‌ستون",
        color: "bg-amber-400",
        words: ["ستون", "آینه", "نقاشی", "صفویه"],
        isVisual: true,
        icon: "Pillar",
      },
      {
        id: "l19-c4",
        title: "شیرینی‌های قزوین",
        color: "bg-yellow-200",
        words: ["باقلوا", "پادرازی", "نان‌چای", "نازک", "چرخی"], // حذف: اتابکی
      },
      {
        id: "l19-c5",
        title: "مراحل چاپ کتاب",
        color: "bg-gray-300",
        words: ["ویراستاری", "صفحه‌آرایی", "صحافی", "چاپ", "نشر"], // حذف: لیتوگرافی
      },
      {
        id: "l19-c7",
        title: "مترادف‌های آگاهی",
        color: "bg-blue-500",
        words: ["بصیرت", "بینش", "دانایی", "درایت", "خرد"], // حذف: فراست
      },
      {
        id: "l19-c8",
        title: "انواع کاغذ هنری",
        color: "bg-orange-100",
        words: ["گلاسه", "کاهی", "ابری", "پوستی", "موم"], // حذف: ترمی
      },
      // حذف شده: نام‌های مرکب (تله زبانی و کم‌ارتباط)
    ],
  },
  {
    id: 20,
    title: "باغ ایرانی: پردیس",
    description: "نماد کمال و بهشت روی زمین. معنای نهایی را پیدا کن.",
    mapCoordinates: { x: 45, y: 50 },
    categories: [
      {
        id: "l20-sub1",
        title: "عناصر باغ",
        color: "bg-emerald-700",
        words: ["جویبار", "کوشک", "کاریز", "دیوار", "سردرب"], // حذف: خیابان
        isSubCategory: true,
        transformsTo: "GardenGate",
        targetCategoryId: "l20-master",
      },
      {
        id: "l20-sub2",
        title: "پرندگان بهشتی",
        color: "bg-rose-300",
        words: ["طاوس", "هدهد", "بلبل", "کبک", "تذرو"], // حذف: قناری
        isSubCategory: true,
        transformsTo: "Peacock",
        targetCategoryId: "l20-master",
      },
      {
        id: "l20-master",
        title: "پردیس",
        color: "bg-fuchsia-600",
        words: ["بهشت", "جاودانگی", "آرامش", "کمال"],
        isVisual: true,
        icon: "Lotus",
      },
      {
        id: "l20-c4",
        title: "مفاهیم عرفانی",
        color: "bg-violet-800",
        words: ["سلوک", "فنا", "بقای", "اشراق", "وحدت"], // حذف: حیرت
      },
      {
        id: "l20-c5",
        title: "نام‌های خدا (پارسی)",
        color: "bg-sky-400",
        words: ["یزدان", "دادار", "آفریدگار", "ایزد", "خداوند"], // حذف: پروردگار
      },
      {
        id: "l20-c7",
        title: "مترادف‌های نور",
        color: "bg-yellow-400",
        words: ["ضیا", "فروغ", "پرتو", "تابش", "شعاع"], // حذف: مشعل
      },
      {
        id: "l20-c8",
        title: "عناصر خوشنویسی (سخت)",
        color: "bg-slate-300",
        words: ["کرسی", "قوت", "ضعف", "صعود", "نزول"], // حذف: شمره
      },
      // حذف شده: سلسله‌مراتب نظامی (بی‌ربط به تم عرفانی باغ و پردیس)
    ],
  },
];
