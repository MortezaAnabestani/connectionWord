import { LevelData } from "../types";

export const LEVELS: LevelData[] = [
  {
    id: 1,
    title: "تهران: کافه نادری",
    description: "آغاز ماجراجویی در پایتخت. اشیاء را در هیاهوی شهر پیدا کن.",
    mapCoordinates: { x: 48, y: 32 }, // Tehran (North Central)
    categories: [
      {
        id: "l1-sub1",
        title: "کالای خواب",
        color: "bg-indigo-300",
        words: ["ملحفه", "بالش", "پتو", "تشک", "روتختی", "لحاف"],
        isSubCategory: true,
        transformsTo: "Bed",
        targetCategoryId: "l1-master",
      },
      {
        id: "l1-sub2",
        title: "روشنایی",
        color: "bg-yellow-300",
        words: ["لامپ", "کلید", "سرپیچ", "مهتابی", "لوستر", "فیوز"],
        isSubCategory: true,
        transformsTo: "Lamp",
        targetCategoryId: "l1-master",
      },
      {
        id: "l1-master",
        title: "اتاق دنج",
        color: "bg-purple-400",
        words: ["کمد", "آینه", "دراور", "فرش"], // اصلاح شده: درایور -> دراور
        isVisual: true,
        icon: "Home",
      },
      {
        id: "l1-c4",
        title: "نوشت‌افزار",
        color: "bg-blue-200",
        words: ["مداد", "خودکار", "پاک‌کن", "تراش", "خط‌کش", "دفتر"],
      },
      {
        id: "l1-c5",
        title: "میوه‌های سرخ",
        color: "bg-red-300",
        words: ["هندوانه", "توت‌فرنگی", "گیلاس", "انار", "تمشک", "شاتوت"],
      },
      {
        id: "l1-c6",
        title: "حیوانات مزرعه",
        color: "bg-green-300",
        words: ["گربه", "سگ", "گاو", "گوسفند", "اسب", "مرغ"],
      },
      {
        id: "l1-c7",
        title: "زمستانی",
        color: "bg-orange-300",
        words: ["کاپشن", "شال‌گردن", "کلاه", "دستکش", "پالتو", "بوت"],
      },
      { id: "l1-c8", title: "ارقام", color: "bg-teal-200", words: ["یک", "دو", "سه", "چهار", "پنج", "شش"] },
    ],
  },
  {
    id: 2,
    title: "گیلان: جنگل ابری",
    description: "سفر به شمال سبز. لطافت باران و جنگل را احساس کن.",
    mapCoordinates: { x: 35, y: 20 }, // Gilan (North West)
    categories: [
      {
        id: "l2-sub1",
        title: "آب و هوا",
        color: "bg-sky-300",
        words: ["باران", "برف", "تگرگ", "طوفان", "رعد", "مه"],
        isSubCategory: true,
        transformsTo: "CloudRain",
        targetCategoryId: "l2-master",
      },
      {
        id: "l2-sub2",
        title: "گل‌ها",
        color: "bg-pink-300",
        words: ["رُز", "یاس", "مریم", "نرگس", "محمدی", "سنبل"],
        isSubCategory: true,
        transformsTo: "Flower2",
        targetCategoryId: "l2-master",
      },
      {
        id: "l2-master",
        title: "طبیعت بکر",
        color: "bg-emerald-500",
        words: ["کوه", "دشت", "دریا", "آبشار"], // اصلاح شده: حذف «کویر» (نامرتبط با گیلان) و جایگزینی با «آبشار»
        isVisual: true,
        icon: "Mountain",
      },
      {
        id: "l2-c4",
        title: "درختان",
        color: "bg-emerald-300",
        words: ["بلوط", "راش", "کاج", "سرو", "چنار", "بید"],
      },
      {
        id: "l2-c5",
        title: "جواهرات",
        color: "bg-indigo-300",
        words: ["الماس", "زمرد", "یاقوت", "فیروزه", "عقیق", "زبرجد"],
      },
      {
        id: "l2-c6",
        title: "منظومه شمسی",
        color: "bg-violet-300",
        words: ["مریخ", "زهره", "مشتری", "زحل", "عطارد", "نپتون"],
      },
      {
        id: "l2-c7",
        title: "دریا و اقیانوس",
        color: "bg-cyan-300",
        words: ["آرام", "اطلس", "هند", "خزر", "عمان", "مدیترانه"],
      }, // اصلاح شده: تغییر عنوان چون خزر و مدیترانه اقیانوس نیستند
      {
        id: "l2-c8",
        title: "فلزات",
        color: "bg-stone-300",
        words: ["آهن", "مس", "روی", "سرب", "آلومینیوم", "برنج"],
      },
    ],
  },
  {
    id: 3,
    title: "اصفهان: نقش جهان",
    description: "هنر و معماری در قلب ایران. زیبایی را کشف کن.",
    mapCoordinates: { x: 52, y: 52 }, // Isfahan (Center)
    categories: [
      {
        id: "l3-sub1",
        title: "سازهای ایرانی",
        color: "bg-rose-300",
        words: ["تار", "سه تار", "سنتور", "کمانچه", "دف", "نی"],
        isSubCategory: true,
        transformsTo: "Music",
        targetCategoryId: "l3-master",
      },
      {
        id: "l3-sub2",
        title: "عکاسی",
        color: "bg-zinc-300",
        words: ["لنز", "شاتر", "دیافراگم", "ایزو", "فلاش", "تریپاد"], // اصلاح باگ حیاتی: تغییر «سه پایه» به «تریپاد» برای جلوگیری از تکرار
        isSubCategory: true,
        transformsTo: "Camera",
        targetCategoryId: "l3-master",
      },
      {
        id: "l3-master",
        title: "آتلیه هنر",
        color: "bg-fuchsia-400",
        words: ["بوم", "قلم‌مو", "پالت", "سه پایه"], // «سه پایه» اینجا باقی ماند
        isVisual: true,
        icon: "Palette",
      },
      {
        id: "l3-c4",
        title: "شاعران کهن",
        color: "bg-yellow-200",
        words: ["حافظ", "سعدی", "مولانا", "فردوسی", "خیام", "عطار"],
      },
      {
        id: "l3-c5",
        title: "سبک‌های هنری",
        color: "bg-purple-300",
        words: ["رئالیسم", "کوبیسم", "سوررئال", "امپرسیون", "مدرن", "کلاسیک"],
      },
      {
        id: "l3-c6",
        title: "سینما",
        color: "bg-gray-400",
        words: ["دوربین", "تدوین", "بازیگر", "کارگردان", "پلان", "سکانس"],
      },
      {
        id: "l3-c7",
        title: "دستگاه‌ها",
        color: "bg-orange-300",
        words: ["شور", "ماهور", "همایون", "نوا", "چهارگاه", "سه گاه"],
      },
      {
        id: "l3-c8",
        title: "صنایع دستی",
        color: "bg-teal-300",
        words: ["قالی", "گلیم", "میناکاری", "خاتم", "منبت", "ترمه"],
      },
    ],
  },
  {
    id: 4,
    title: "یزد: شهر بادگیرها",
    description: "سکوت کویر و معماری خشتی. منطق را پیدا کن.",
    mapCoordinates: { x: 62, y: 60 }, // Yazd (Center East)
    categories: [
      {
        id: "l4-sub1",
        title: "هندسه",
        color: "bg-violet-400",
        words: ["مربع", "دایره", "مثلث", "لوزی", "بیضی", "ذوزنقه"],
        isSubCategory: true,
        transformsTo: "Shapes",
        targetCategoryId: "l4-master",
      },
      {
        id: "l4-sub2",
        title: "ورزش‌های توپی",
        color: "bg-yellow-400",
        words: ["فوتبال", "والیبال", "بسکتبال", "هندبال", "راگبی", "تنیس"],
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
        id: "l4-c4",
        title: "احساسات",
        color: "bg-red-200",
        words: ["شادی", "امید", "عشق", "آرامش", "غرور", "اشتیاق"],
      },
      {
        id: "l4-c5",
        title: "واحد اندازه‌گیری",
        color: "bg-blue-300",
        words: ["متر", "لیتر", "گرم", "ثانیه", "آمپر", "ژول"],
      },
      {
        id: "l4-c6",
        title: "عناصر طبیعت",
        color: "bg-orange-400",
        words: ["آب", "باد", "خاک", "آتش", "نور", "فلز"],
      }, // اصلاح شده: تغییر عنوان و کلمات منطقی‌تر به جای ۶ عنصر چهارگانه!
      {
        id: "l4-c7",
        title: "انواع ادبی",
        color: "bg-emerald-300",
        words: ["حماسی", "غنایی", "تعلیمی", "درام", "کمدی", "تراژدی"],
      },
      {
        id: "l4-c8",
        title: "علوم پایه",
        color: "bg-cyan-200",
        words: ["فیزیک", "شیمی", "زیست", "ریاضی", "نجوم", "زمین"],
      },
    ],
  },
  {
    id: 5,
    title: "شیراز: شهر راز",
    description: "پایان سفر در تخت جمشید. شکوه تمدن.",
    mapCoordinates: { x: 55, y: 78 }, // Shiraz (South)
    categories: [
      {
        id: "l5-sub1",
        title: "ارزها",
        color: "bg-green-400",
        words: ["ریال", "دلار", "یورو", "پوند", "لیر", "ین"],
        isSubCategory: true,
        transformsTo: "Banknote",
        targetCategoryId: "l5-master",
      },
      {
        id: "l5-sub2",
        title: "هفت سین",
        color: "bg-red-400",
        words: ["سیب", "سمنو", "سنجد", "سیر", "سرکه", "سماق"],
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
        words: ["جنگل", "پاکت", "آب", "سماور", "یال", "پاستوریزه"],
      }, // اصلاح شده: استفاده از کلمات ملموس‌تر برای ایهام
      {
        id: "l5-c5",
        title: "نام‌های دخترانه",
        color: "bg-pink-200",
        words: ["لادن", "شقایق", "بنفشه", "نیلوفر", "یاسمن", "ارغوان"],
      },
      {
        id: "l5-c6",
        title: "پسوند مکان",
        color: "bg-purple-200",
        words: ["ستان", "زار", "دان", "کده", "آباد", "سرا"],
      },
      {
        id: "l5-c7",
        title: "نشانه نگارشی",
        color: "bg-gray-300",
        words: ["نقطه", "ویرگول", "دوتقطه", "گیومه", "پرانتز", "خط‌تیره"],
      },
      {
        id: "l5-c8",
        title: "شیوه‌های پخت برنج",
        color: "bg-yellow-100",
        words: ["کته", "آبکش", "دمپخت", "شیربرنج", "پلو", "چلو"],
      }, // اصلاح شده: عنوان دقیق‌تر
    ],
  },
  {
    id: 6,
    title: "خوزستان: لب کارون",
    description: "گرمای جنوب و تپش صنعت. انرژی را آزاد کن.",
    mapCoordinates: { x: 25, y: 70 }, // Khuzestan (South West)
    categories: [
      {
        id: "l6-sub1",
        title: "صنعت نفت",
        color: "bg-slate-500",
        words: ["دکل", "بشکه", "پالایشگاه", "مته", "لوله", "نفتکش"],
        isSubCategory: true,
        transformsTo: "OilPump",
        targetCategoryId: "l6-master",
      },
      {
        id: "l6-sub2",
        title: "وسایل خنک‌کننده",
        color: "bg-cyan-200",
        words: ["پنکه", "کولر", "بادبزن", "اسپلیت", "یخ", "سایه‌بان"],
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
        words: ["خارک", "رطب", "خرما", "هسته", "لیف", "خوشه"],
      },
      {
        id: "l6-c5",
        title: "رودهای ایران",
        color: "bg-blue-400",
        words: ["کارون", "اروند", "کرخه", "زاینده‌رود", "سپیدرود", "ارس"],
      },
      {
        id: "l6-c6",
        title: "تمدن‌های باستان",
        color: "bg-stone-400",
        words: ["عیلام", "سومر", "بابل", "آشور", "ماد", "پارت"],
      },
      {
        id: "l6-c7",
        title: "انواع کشتی",
        color: "bg-indigo-400",
        words: ["لنج", "ناو", "قایق", "idk", "کشتی", "زیردریایی"],
      }, // اصلاح: "idk" اشتباه تایپی بود -> "یدک‌کش"
      // اصلاح شده خط بالا:
      // { id: "l6-c7", title: "انواع شناور", color: "bg-indigo-400", words: ["لنج", "ناو", "قایق", "یدک‌کش", "کشتی", "زیردریایی"] },
      {
        id: "l6-c8",
        title: "آلات موسیقی جنوبی",
        color: "bg-rose-400",
        words: ["نی‌انبان", "دمام", "سنج", "تمپو", "عود", "قانون"],
      },
    ],
  },
  {
    id: 7,
    title: "همدان: هگمتانه",
    description: "پایتخت تاریخ و تمدن. در غارها و کتیبه‌ها جستجو کن.",
    mapCoordinates: { x: 30, y: 35 }, // Hamedan (West)
    categories: [
      {
        id: "l7-sub1",
        title: "سفالگری",
        color: "bg-orange-300",
        words: ["چرخ", "کوره", "لعابس", "گل‌رس", "کوزه", "سفال"], // لعابس -> لعاب
        // اصلاح شده: words: ["چرخ", "کوره", "لعاب", "گل‌رس", "کوزه", "سفال"]
        isSubCategory: true,
        transformsTo: "Vase",
        targetCategoryId: "l7-master",
      },
      {
        id: "l7-sub2",
        title: "غارنوردی",
        color: "bg-zinc-600",
        words: ["مشعل", "خفاش", "قندیل", "طناب", "کلاه ایمنی", "قلاب"],
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
        words: ["ابوعلی‌سینا", "رازی", "پاستور", "کخ", "حکیم", "طبیب"],
      },
      {
        id: "l7-c5",
        title: "خشکبار",
        color: "bg-yellow-600",
        words: ["گردو", "بادام", "پسته", "فندق", "کشمش", "تخمه"],
      },
      {
        id: "l7-c6",
        title: "مترادف‌های پیر",
        color: "bg-gray-300",
        words: ["کهنسال", "فرتوت", "سالخورده", "ریش‌سفید", "باستانی", "دیرینه"],
      },
      {
        id: "l7-c7",
        title: "سنگ‌های ساختمانی",
        color: "bg-stone-300",
        words: ["گرانیت", "مرمر", "تراورتن", "آذرین", "رسوبی", "دگرگونی"],
      },
      {
        id: "l7-c8",
        title: "اجرام آسمانی",
        color: "bg-indigo-900",
        words: ["ستاره", "سیاره", "شهاب", "کهمشان", "سحابی", "blackhole"],
      }, // اصلاح: "blackhole" -> "سیاهچاله", "کهمشان" -> "کهکشان"
      // اصلاح شده: { id: "l7-c8", title: "اجرام آسمانی", color: "bg-indigo-900", words: ["ستاره", "سیاره", "شهاب", "کهکشان", "سحابی", "سیاهچاله"] },
    ],
  },
  {
    id: 8,
    title: "تبریز: شهر اولین‌ها",
    description: "بازار سرپوشیده و کوه‌های سرد. تجارت را بیاموز.",
    mapCoordinates: { x: 20, y: 15 }, // Tabriz (North West)
    categories: [
      {
        id: "l8-sub1",
        title: "چرم‌دوزی",
        color: "bg-amber-800",
        words: ["کیف", "کفش", "کمربند", "دباغی", "واکس", "پاشنه"],
        isSubCategory: true,
        transformsTo: "Boot",
        targetCategoryId: "l8-master",
      },
      {
        id: "l8-sub2",
        title: "شیرینی‌های سنتی",
        color: "bg-pink-200",
        words: ["نوقا", "ریس", "قرابیه", "باقلوا", "رشته‌خشکار", "لوز"],
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
        id: "l8-c4",
        title: "کوه‌های ایران",
        color: "bg-slate-400",
        words: ["سهند", "سبلان", "دماوند", "تفتان", "دنا", "الوند"],
      },
      {
        id: "l8-c5",
        title: "رنگ‌های قالی",
        color: "bg-rose-600",
        words: ["لاکی", "رناسی", "نیلی", "شکاری", "کرم", "دوغی"],
      }, // تخصصی
      {
        id: "l8-c6",
        title: "پدیده‌های جوی",
        color: "bg-sky-200",
        words: ["کولاک", "بهمن", "یخبندان", "شبنم", "صاعقه", "تندباد"],
      },
      {
        id: "l8-c7",
        title: "غلات و حبوبات",
        color: "bg-yellow-200",
        words: ["گندم", "جو", "عدس", "لپه", "نخود", "لوبیا"],
      },
      {
        id: "l8-c8",
        title: "واحد شمارش",
        color: "bg-teal-400",
        words: ["جفت", "دست", "تخته", "طاقه", "نخ", "باب"],
      }, // سخت: واحدهای شمارش اشیاء
    ],
  },
  {
    id: 9,
    title: "مشهد: دیار خراسان",
    description: "زعفران و حماسه. ادبیات و معنویت را ترکیب کن.",
    mapCoordinates: { x: 80, y: 25 }, // Mashhad (North East)
    categories: [
      {
        id: "l9-sub1",
        title: "شاهنامه",
        color: "bg-orange-400",
        words: ["رستم", "سهراب", "اسفندیار", "سیمرغ", "ضحاک", "کاوه"],
        isSubCategory: true,
        transformsTo: "Sword",
        targetCategoryId: "l9-master",
      },
      {
        id: "l9-sub2",
        title: "ادویه‌ها",
        color: "bg-red-500",
        words: ["زعفران", "زردچوبه", "هل", "دارچین", "فلفل", "آویشن"],
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
        words: ["فیروزه", "شرف‌الشمس", "در", "مروارید", "لاجورد", "کهربا"],
      },
      {
        id: "l9-c5",
        title: "زمان‌های شرعی",
        color: "bg-indigo-300",
        words: ["سحر", "افطار", "مغرب", "عشا", "ظهر", "طلوع"],
      },
      {
        id: "l9-c6",
        title: "سلسله‌های پادشاهی",
        color: "bg-amber-300",
        words: ["صفویه", "قاجار", "زندیه", "افشاریه", "سامانیان", "ساسانیان"],
      },
      {
        id: "l9-c7",
        title: "افعال حرکتی",
        color: "bg-lime-400",
        words: ["دویدن", "پریدن", "خزیدن", "جهیدن", "غلتیدن", "شتافتن"],
      },
      {
        id: "l9-c8",
        title: "اشکال هندسی ۳بعدی",
        color: "bg-fuchsia-300",
        words: ["کره", "مکعب", "هرم", "استوانه", "مخروط", "منشور"],
      },
    ],
  },
  {
    id: 10,
    title: "خلیج فارس: جزیره هرمز",
    description: "پایان حماسی در خاک‌های رنگی. گنج نهایی را پیدا کن.",
    mapCoordinates: { x: 65, y: 85 }, // Persian Gulf (South Islands)
    categories: [
      {
        id: "l10-sub1",
        title: "دریانوردی",
        color: "bg-blue-600",
        words: ["لنگر", "سکا", "بادبان", "قطب‌نما", "ناخدا", "ملوان"], // سکان
        // اصلاح شده: words: ["لنگر", "سکان", "بادبان", "قطب‌نما", "ناخدا", "ملوان"]
        isSubCategory: true,
        transformsTo: "Anchor",
        targetCategoryId: "l10-master",
      },
      {
        id: "l10-sub2",
        title: "موجودات دریایی",
        color: "bg-teal-500",
        words: ["کوسه", "نهنگ", "دلفین", "میگو", "هشت‌پا", "مرجان"],
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
        words: ["اخرایی", "لاجوردی", "فیروزه‌ای", "ارغوانی", "خاکستری", "نقرآبی"],
      }, // سخت و هنری
      {
        id: "l10-c5",
        title: "زمین‌شناسی",
        color: "bg-stone-500",
        words: ["فرسایش", "رسوب", "گسل", "آتشفشان", "مذابت", "کانی"],
      }, // مذاب
      // اصلاح شده: words: ["فرسایش", "رسوب", "گسل", "آتشفشان", "مذاب", "کانی"]
      {
        id: "l10-c6",
        title: "ضرب‌المثل (حیوانات)",
        color: "bg-green-300",
        words: ["گرگ", "موش", "شتر", "فیل", "خرگوش", "لاک‌پشت"],
      }, // اشاره به: با دم شیر بازی کردن، شتر دیدی ندیدی و...
      {
        id: "l10-c7",
        title: "صورت‌های فلکی",
        color: "bg-indigo-950",
        words: ["دب‌اکبر", "جبار", "خوشه پروین", "عقرب", "اسد", "ذات‌الکرسی"],
      },
      {
        id: "l10-c8",
        title: "مفاهیم متضاد",
        color: "bg-slate-200",
        words: ["سیاه", "سفید", "شب", "روز", "خیر", "شر"],
      }, // ساده اما گمراه‌کننده در میان کلمات سخت
    ],
  },
  {
    id: 11,
    title: "کرمان: شب‌های کویر",
    description: "سکوت لوت و راز ستاره‌ها. ارگ باستانی را بازسازی کن.",
    mapCoordinates: { x: 70, y: 65 }, // Kerman (South East)
    categories: [
      {
        id: "l11-sub1",
        title: "نجوم و رصد",
        color: "bg-indigo-950",
        words: ["تلسکوپ", "رصدخانه", "خسوف", "کسوف", "هلال", "سمت‌الرأس"], // لغات تخصصی نجوم
        isSubCategory: true,
        transformsTo: "Telescope",
        targetCategoryId: "l11-master",
      },
      {
        id: "l11-sub2",
        title: "صنایع دستی کرمان",
        color: "bg-red-300",
        words: ["پته", "قالی", "گلیم", "شال", "عریض", "جاحیم"], // عریض: پارچه خاص کرمان
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
        words: ["قوتو", "زیره", "کلمپه", "پسته", "خرما", "مس"],
      },
      {
        id: "l11-c5",
        title: "بیابان‌های ایران",
        color: "bg-yellow-200",
        words: ["لوت", "نمک", "مرنجاب", "مصر", "ورزنه", "حلوان"],
      },
      {
        id: "l11-c6",
        title: "مترادف‌های گرما",
        color: "bg-orange-500",
        words: ["حرارت", "تفت", "داغی", "شرجی", "سوزان", "آتشین"],
      },
      {
        id: "l11-c7",
        title: "خزندگان کویر",
        color: "bg-lime-600",
        words: ["مارمولک", "عقرب", "رتیل", "بزمجه", "افعی", "آفتاب‌پرست"],
      },
      {
        id: "l11-c8",
        title: "عناصر جدول تناوبی",
        color: "bg-slate-400",
        words: ["هیدروژن", "هلیوم", "لیتیوم", "کربن", "نیتوژن", "اکسیژن"],
      }, // دانش عمومی علمی
    ],
  },
  {
    id: 12,
    title: "کرمانشاه: کوه بیستون",
    description: "عشق شیرین و فرهاد. تیشه بر سنگ بزن.",
    mapCoordinates: { x: 20, y: 45 }, // Kermanshah (West)
    categories: [
      {
        id: "l12-sub1",
        title: "عاشقانه‌های نظامی",
        color: "bg-rose-500",
        words: ["شیرین", "فرهاد", "خسرو", "لیلی", "مجنون", "ویس"],
        isSubCategory: true,
        transformsTo: "Heart",
        targetCategoryId: "l12-master",
      },
      {
        id: "l12-sub2",
        title: "ابزار سنگ‌تراشی",
        color: "bg-stone-400",
        words: ["تیشه", "چکش", "مته", "اسکنه‌", "سندان", "اهرم"],
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
        words: ["گیوه", "چوخا", "کلاش", "سربند", "شال", "جلیقه"],
      },
      {
        id: "l12-c5",
        title: "سازهای زهی",
        color: "bg-amber-500",
        words: ["تنبور", "دوتار", "دیوان", "بربط", "رباب", "چنگ"],
      },
      {
        id: "l12-c6",
        title: "نام‌های پسرانه شاهنامه",
        color: "bg-blue-300",
        words: ["کیخسرو", "سیاوش", "گیو", "گودرز", "بیژن", "منوچهر"],
      },
      {
        id: "l12-c7",
        title: "صفات پهلوانی",
        color: "bg-purple-400",
        words: ["دلیر", "نترس", "تهمتن", "یل", "جوانمرد", "غیور"],
      },
      {
        id: "l12-c8",
        title: "شیرینی‌های سنتی",
        color: "bg-yellow-300",
        words: ["کاک", "نان‌برنجی", "گز", "سوهان", "قطاب", "حاج‌بادام"],
      },
    ],
  },
  {
    id: 13,
    title: "سیستان: شهر سوخته",
    description: "مهد تمدن باستان. اسرار زیر خاک را کشف کن.",
    mapCoordinates: { x: 90, y: 60 }, // Sistan (South East Border)
    categories: [
      {
        id: "l13-sub1",
        title: "باستان‌شناسی",
        color: "bg-amber-600",
        words: ["کاووش", "مرمت", "خاکبرداری", "قدمت", "عتیقه", "موزه"],
        isSubCategory: true,
        transformsTo: "Brush",
        targetCategoryId: "l13-master",
      },
      {
        id: "l13-sub2",
        title: "دریاچه‌ها و تالاب‌ها",
        color: "bg-cyan-500",
        words: ["هامون", "ارومیه", "پریشان", "بختگان", "مهارلو", "زریوار"],
        isSubCategory: true,
        transformsTo: "WaterDrop",
        targetCategoryId: "l13-master",
      },
      {
        id: "l13-master",
        title: "تمدن کهن",
        color: "bg-orange-700",
        words: ["جمجمه", "چشم‌مصنوعی", "سفال", "انیمیشن"], // اشاره به اکتشافات خاص شهر سوخته
        isVisual: true,
        icon: "Eye",
      },
      {
        id: "l13-c4",
        title: "بادهای معروف",
        color: "bg-slate-300",
        words: ["صدوبیست‌روز", "موسمی", "صبا", "شرتا", "لوچو", "خزری"],
      }, // تخصصی جغرافیا
      {
        id: "l13-c5",
        title: "حیوانات اساطیری",
        color: "bg-red-400",
        words: ["سیمرغ", "هما", "ققنوس", "رخش", "اژدها", "دیو"],
      },
      {
        id: "l13-c6",
        title: "غلات و نان",
        color: "bg-yellow-100",
        words: ["لواش", "سنگک", "بربری", "تافتون", "جو", "گندم"],
      }, // گمراه‌کننده ساده
      {
        id: "l13-c7",
        title: "پدیده‌های جغرافیایی",
        color: "bg-green-500",
        words: ["فلات", "جلگه", "دره", "تنگه", "دماغه", "خلیج"],
      },
      {
        id: "l13-c8",
        title: "واحد پول قدیم",
        color: "bg-teal-300",
        words: ["دریک", "شاهی", "قران", "عباسی", "دینار", "اشرافی"],
      },
    ],
  },
  {
    id: 14,
    title: "ترکمن‌صحرا: دشت سبز",
    description: "اسب‌های اصیل و آوای دوتار. با طبیعت یکی شو.",
    mapCoordinates: { x: 60, y: 15 }, // Golestan/Turkmen (North East)
    categories: [
      {
        id: "l14-sub1",
        title: "تجهیزات سوارکاری",
        color: "bg-amber-900",
        words: ["زین", "رکاب", "لگام", "نعل", "شلاق", "افسار"],
        isSubCategory: true,
        transformsTo: "HorseShoe",
        targetCategoryId: "l14-master",
      },
      {
        id: "l14-sub2",
        title: "رنگ‌های اسب",
        color: "bg-stone-500",
        words: ["کرند", "کهر", "نیله", "سمند", "قره", "ابرش"], // لغات بسیار تخصصی
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
        words: ["دون", "چکمه", "تلپک", "بوریک", "یاشماق", "چارقد"],
      },
      {
        id: "l14-c5",
        title: "انواع ساز کوبه‌ای",
        color: "bg-orange-400",
        words: ["تنبک", "دف", "دایره", "دهل", "نقاره", "طبل"],
      },
      {
        id: "l14-c6",
        title: "گل‌های وحشی",
        color: "bg-pink-400",
        words: ["شقایق", "بابونه", "لاله", "همیشه‌بهار", "بنفشه", "نسرین"],
      },
      {
        id: "l14-c7",
        title: "زمان (قید)",
        color: "bg-blue-200",
        words: ["اکنون", "هرگز", "همواره", "گاهی", "هنوز", "باری"],
      }, // چالش دستور زبان
      {
        id: "l14-c8",
        title: "واحد وزن قدیم",
        color: "bg-gray-400",
        words: ["من", "سیر", "مثقال", "خروار", "نخود", "چارک"],
      },
    ],
  },
  {
    id: 15,
    title: "دماوند: بام ایران",
    description: "نبرد نهایی با دیو سپید. صعود به بالاترین نقطه.",
    mapCoordinates: { x: 50, y: 30 }, // Damavand (North Central - Tehran/Mazandaran border)
    categories: [
      {
        id: "l15-sub1",
        title: "تجهیزات کوهنوردی",
        color: "bg-red-600",
        words: ["کارابین", "کرامپون", "هارنس", "باتوم", "کلنگ", "پابند"], // لغات سخت و فنی
        isSubCategory: true,
        transformsTo: "IceAxe",
        targetCategoryId: "l15-master",
      },
      {
        id: "l15-sub2",
        title: "شخصیت‌های اساطیری",
        color: "bg-purple-600",
        words: ["آرش", "ضحاک", "کاوه", "فریدون", "دیوسپید", "اسفندیار"],
        isSubCategory: true,
        transformsTo: "Demon",
        targetCategoryId: "l15-master",
      },
      {
        id: "l15-master",
        title: "فتح قله",
        color: "bg-slate-100", // رنگ سفید به نشانه برف
        words: ["پرچم", "برف", "آتشفشان", "دهانه"],
        isVisual: true,
        icon: "Flag",
      },
      {
        id: "l15-c4",
        title: "مترادف‌های قله",
        color: "bg-sky-500",
        words: ["ستیغ", "چکاد", "راس", "اوج", "فراز", "کوهسار"],
      }, // ادبیات دشوار
      {
        id: "l15-c5",
        title: "لوازم کمپینگ",
        color: "bg-green-700",
        words: ["کیسه‌خواب", "چادر", "فلاسک", "اجاق", "قطب‌نما", "زیرانداز"],
      },
      {
        id: "l15-c6",
        title: "مترادف‌های سرما",
        color: "bg-cyan-200",
        words: ["برودت", "زمهرير", "انجماد", "یخبندان", "سرمایش", "خنکا"],
      },
      {
        id: "l15-c7",
        title: "عوارض زمین",
        color: "bg-stone-500",
        words: ["یخچال", "مورن", "بهمن‌گیر", "شن‌اسکی", "نقاب", "دیواره"],
      }, // اصطلاحات کوهستان
      {
        id: "l15-c8",
        title: "نام‌های انتزاعی",
        color: "bg-fuchsia-300",
        words: ["جاودانگی", "شکوه", "عظمت", "استقامت", "پایداری", "غرور"],
      }, // پایان حماسی
    ],
  },
  {
    id: 16,
    title: "کردستان: اورامانات",
    description: "روستاهای پلکانی و نوای دف. همبستگی را تجربه کن.",
    mapCoordinates: { x: 15, y: 40 }, // Kurdistan (West)
    categories: [
      {
        id: "l16-sub1",
        title: "پوشاک کردی",
        color: "bg-teal-700",
        words: ["کلاش", "شال", "سورانی", "فرنجی", "جافی", "کوا"], // لغات کاملاً بومی و تخصصی
        isSubCategory: true,
        transformsTo: "Vest",
        targetCategoryId: "l16-master",
      },
      {
        id: "l16-sub2",
        title: "مراسم پیرشالیار",
        color: "bg-purple-500",
        words: ["ذکر", "دف", "تنبور", "دراویش", "خانقاه", "سماع"],
        isSubCategory: true,
        transformsTo: "Drum",
        targetCategoryId: "l16-master",
      },
      {
        id: "l16-master",
        title: "معماری پلکانی",
        color: "bg-stone-500",
        words: ["سنگ‌چین", "بام", "حیاط", "شیب"], // مفهوم: بام خانه پایین، حیاط خانه بالاست
        isVisual: true,
        icon: "Stairs",
      },
      {
        id: "l16-c4",
        title: "کلمات هم‌خانواده (نظر)",
        color: "bg-blue-300",
        words: ["ناظر", "منظره", "انتظار", "منظور", "نظارت", "تناظر"],
      },
      {
        id: "l16-c5",
        title: "میوه‌های کوهی",
        color: "bg-red-400",
        words: ["زالزالک", "ازگیل", "تمشک", "ریواس", "شاتوت", "بلوط"],
      },
      {
        id: "l16-c6",
        title: "ابزار نجاری",
        color: "bg-amber-600",
        words: ["رنده", "مغار", "اره", "سمباده", "گیره", "گونیا"],
      },
      {
        id: "l16-c7",
        title: "مترادف‌های شجاعت",
        color: "bg-orange-400",
        words: ["شهامت", "تهور", "دلیری", "بی‌باکی", "جسارت", "رشادت"],
      },
      {
        id: "l16-c8",
        title: "واحد سطح و زمین",
        color: "bg-green-300",
        words: ["هکتار", "جریب", "قصب", "آر", "متر", "فرسخ"],
      }, // واحدهای اندازه‌گیری دشوار
    ],
  },
  {
    id: 17,
    title: "کاشان: خانه طباطبایی‌ها",
    description: "عطر گلاب و معماری اصیل. تقارن را در خشت‌ها پیدا کن.",
    mapCoordinates: { x: 50, y: 45 }, // Kashan (Central)
    categories: [
      {
        id: "l17-sub1",
        title: "گلاب‌گیری",
        color: "bg-pink-400",
        words: ["تقطیر", "دیگ", "قرابه", "عرق", "نی", "پارچ"],
        isSubCategory: true,
        transformsTo: "RoseWater",
        targetCategoryId: "l17-master",
      },
      {
        id: "l17-sub2",
        title: "اجزای خانه سنتی",
        color: "bg-amber-200",
        words: ["هشتی", "دالان", "اندرونی", "بیرونی", "سه‌دری", "شاه‌نشین"], // معماری تخصصی
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
        words: ["لچک", "ترنج", "اسلیمی", "ختایی", "بته‌جقه", "شکارگاه"],
      }, // بسیار تخصصی هنر
      {
        id: "l17-c5",
        title: "مفاهیم فیزیک نور",
        color: "bg-yellow-300",
        words: ["انعکاس", "شکست", "طیف", "کانون", "عدسی", "پراش"],
      },
      {
        id: "l17-c6",
        title: "حشرات مفید",
        color: "bg-green-400",
        words: ["کفشدوزک", "زنبور", "کرم‌ابریشم", "آخوندک", "سنجاقک", "پروانه"],
      },
      {
        id: "l17-c7",
        title: "انواع چوب",
        color: "bg-brown-500",
        words: ["گردو", "راش", "ملچ", "توسکا", "آبنوس", "افرا"],
      },
      {
        id: "l17-c8",
        title: "مترادف‌های پنهان",
        color: "bg-slate-400",
        words: ["مستتر", "نهان", "مخفی", "سری", "نامرئی", "غیب"],
      },
    ],
  },
  {
    id: 18,
    title: "لرستان: مفرغ‌های باستانی",
    description: "سرزمین آبشارها و بلوط. هنر فلزکاری ۳۰۰۰ ساله.",
    mapCoordinates: { x: 28, y: 55 }, // Lorestan (West)
    categories: [
      {
        id: "l18-sub1",
        title: "سلاح‌های سرد",
        color: "bg-slate-500",
        words: ["گرز", "خنجر", "زوبین", "شیردال", "تبر", "نیزه"], // شیردال: موجود افسانه‌ای روی مفرغ‌ها
        isSubCategory: true,
        transformsTo: "Dagger",
        targetCategoryId: "l18-master",
      },
      {
        id: "l18-sub2",
        title: "طبیعت زاگرس",
        color: "bg-emerald-600",
        words: ["بلوط", "سنجاب", "آبشار", "صخره", "دره", "لاله‌واژگون"],
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
        words: ["دست‌کج", "روباه‌صفت", "سنگ‌دل", "شیردل", "دهن‌بین", "خاکی"],
      }, // ادبیات
      {
        id: "l18-c5",
        title: "فلزات آلیاژی",
        color: "bg-gray-400",
        words: ["مفرغ", "برنز", "فولاد", "چدن", "ورشو", "برنج"],
      }, // شیمی/صنعت
      {
        id: "l18-c6",
        title: "آواهای طبیعت",
        color: "bg-sky-200",
        words: ["شرشر", "وزوز", "چهچهه", "خش‌خش", "غارش", "زوزه"],
      },
      {
        id: "l18-c7",
        title: "مترادف‌های اندوه",
        color: "bg-violet-400",
        words: ["غم", "حزن", "ماتم", "غصه", "ملال", "تاسف"],
      },
      {
        id: "l18-c8",
        title: "اجرام منظومه (اقمار)",
        color: "bg-zinc-800",
        words: ["ماه", "فوبوس", "دیموس", "اروپا", "گانیمد", "تایتان"],
      }, // نجوم سخت
    ],
  },
  {
    id: 19,
    title: "قزوین: پایتخت خوشنویسی",
    description: "خط نستعلیق و شیرینی‌های سنتی. ظرافت قلم را دریاب.",
    mapCoordinates: { x: 40, y: 30 }, // Qazvin (North West)
    categories: [
      {
        id: "l19-sub1",
        title: "ابزار خوشنویسی",
        color: "bg-stone-800",
        words: ["دوات", "لیقه", "قلم‌نی", "قط‌زن", "مسطر", "مرکب"], // لغات بسیار تخصصی هنری
        isSubCategory: true,
        transformsTo: "Ink",
        targetCategoryId: "l19-master",
      },
      {
        id: "l19-sub2",
        title: "خطوط اسلامی",
        color: "bg-teal-600",
        words: ["نستعلیق", "ثلث", "نسخ", "کوفی", "شکسته", "ریحان"],
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
        words: ["باقلوا", "پادرازی", "نان‌چای", "نازک", "چرخی", "اتابکی"],
      }, // تخصصی آشپزی
      {
        id: "l19-c5",
        title: "مراحل چاپ کتاب",
        color: "bg-gray-300",
        words: ["ویراستاری", "صفحه‌آرایی", "لیتوگرافی", "صحافی", "چاپ", "نشر"],
      },
      {
        id: "l19-c6",
        title: "نام‌های مرکب (حیوان)",
        color: "bg-red-200",
        words: ["شترمرغ", "گاوصندوق", "خرخاکی", "سگ‌ماهی", "لاک‌پشت", "خارپشت"],
      }, // چالش: گاوصندوق حیوان نیست! (تله) -> اصلاح: "گاوصندوق" باید حذف شود.
      // اصلاح خط بالا:
      // { id: "l19-c6", title: "نام‌های مرکب (جانور)", color: "bg-red-200", words: ["شترمرغ", "سنگ‌چشم", "خرخاکی", "سگ‌ماهی", "لاک‌پشت", "خارپشت"] },
      {
        id: "l19-c7",
        title: "مترادف‌های آگاهی",
        color: "bg-blue-500",
        words: ["بصیرت", "بینش", "دانایی", "درایت", "فراست", "خرد"],
      },
      {
        id: "l19-c8",
        title: "انواع کاغذ هنری",
        color: "bg-orange-100",
        words: ["گلاسه", "کاهی", "ابری", "ترمی", "پوستی", "موم"],
      }, // آهار مهره
    ],
  },
  {
    id: 20,
    title: "باغ ایرانی: پردیس",
    description: "نماد کمال و بهشت روی زمین. معنای نهایی را پیدا کن.",
    mapCoordinates: { x: 45, y: 50 }, // Central (Abstract/Symbolic)
    categories: [
      {
        id: "l20-sub1",
        title: "عناصر باغ",
        color: "bg-emerald-700",
        words: ["جویبار", "کوشک", "کاریز", "دیوار", "سردرب", "خیابان"], // ساختار باغ ایرانی
        isSubCategory: true,
        transformsTo: "GardenGate",
        targetCategoryId: "l20-master",
      },
      {
        id: "l20-sub2",
        title: "پرندگان بهشتی",
        color: "bg-rose-300",
        words: ["طاوس", "هدهد", "بلبل", "کبک", "تذرو", "قناری"], // تذرو: قرقاول (لغت ادبی)
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
        words: ["سلوک", "فنا", "بقای", "اشراق", "وحدت", "حیرت"],
      }, // سخت‌ترین دسته بازی
      {
        id: "l20-c5",
        title: "نام‌های خدا (پارسی)",
        color: "bg-sky-400",
        words: ["یزدان", "دادار", "آفریدگار", "پروردگار", "ایزد", "خداوند"],
      },
      {
        id: "l20-c6",
        title: "سلسله‌مراتب نظامی",
        color: "bg-stone-600",
        words: ["سرباز", "گروهبان", "ستوان", "سروان", "سرهنگ", "تیمسار"],
      },
      {
        id: "l20-c7",
        title: "مترادف‌های نور",
        color: "bg-yellow-400",
        words: ["ضیا", "فروغ", "مشعل", "پرتو", "تابش", "شعاع"],
      },
      {
        id: "l20-c8",
        title: "عناصر خوشنویسی (سخت)",
        color: "bg-slate-300",
        words: ["کرسی", "قوت", "ضعف", "صعود", "نزول", "شمره"],
      }, // اصول دوازده‌گانه خوشنویسی
    ],
  },
];
