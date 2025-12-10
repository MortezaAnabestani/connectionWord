
import { LevelData } from "../types";

export const LEVELS: LevelData[] = [
  {
    id: 1,
    title: "تهران: کافه نادری",
    description: "آغاز ماجراجویی در پایتخت. اشیاء را در هیاهوی شهر پیدا کن.",
    mapCoordinates: { x: 48, y: 32 }, // Tehran (North Central)
    categories: [
      { 
        id: "l1-sub1", title: "کالای خواب", color: "bg-indigo-300", 
        words: ["ملحفه", "بالش", "پتو", "تشک", "روتختی", "لحاف"],
        isSubCategory: true, transformsTo: "Bed", targetCategoryId: "l1-master"
      },
      { 
        id: "l1-sub2", title: "روشنایی", color: "bg-yellow-300", 
        words: ["لامپ", "کلید", "سرپیچ", "مهتابی", "لوستر", "فیوز"],
        isSubCategory: true, transformsTo: "Lamp", targetCategoryId: "l1-master"
      },
      { 
        id: "l1-master", title: "اتاق دنج", color: "bg-purple-400", 
        words: ["کمد", "آینه", "درایور", "فرش"], 
        isVisual: true, icon: "Home"
      },
      { id: "l1-c4", title: "نوشت‌افزار", color: "bg-blue-200", words: ["مداد", "خودکار", "پاک‌کن", "تراش", "خط‌کش", "دفتر"] },
      { id: "l1-c5", title: "میوه‌های سرخ", color: "bg-red-300", words: ["هندوانه", "توت‌فرنگی", "گیلاس", "انار", "تمشک", "شاتوت"] },
      { id: "l1-c6", title: "حیوانات مزرعه", color: "bg-green-300", words: ["گربه", "سگ", "گاو", "گوسفند", "اسب", "مرغ"] },
      { id: "l1-c7", title: "زمستانی", color: "bg-orange-300", words: ["کاپشن", "شال‌گردن", "کلاه", "دستکش", "پالتو", "بوت"] },
      { id: "l1-c8", title: "ارقام", color: "bg-teal-200", words: ["یک", "دو", "سه", "چهار", "پنج", "شش"] },
    ]
  },
  {
    id: 2,
    title: "گیلان: جنگل ابری",
    description: "سفر به شمال سبز. لطافت باران و جنگل را احساس کن.",
    mapCoordinates: { x: 35, y: 20 }, // Gilan (North West)
    categories: [
      { 
        id: "l2-sub1", title: "آب و هوا", color: "bg-sky-300", 
        words: ["باران", "برف", "تگرگ", "طوفان", "رعد", "مه"],
        isSubCategory: true, transformsTo: "CloudRain", targetCategoryId: "l2-master"
      },
      { 
        id: "l2-sub2", title: "گل‌ها", color: "bg-pink-300", 
        words: ["رُز", "یاس", "مریم", "نرگس", "محمدی", "سنبل"],
        isSubCategory: true, transformsTo: "Flower2", targetCategoryId: "l2-master"
      },
      { 
        id: "l2-master", title: "طبیعت بکر", color: "bg-emerald-500", 
        words: ["کوه", "دشت", "دریا", "کویر"], 
        isVisual: true, icon: "Mountain"
      },
      { id: "l2-c4", title: "درختان", color: "bg-emerald-300", words: ["بلوط", "راش", "کاج", "سرو", "چنار", "بید"] },
      { id: "l2-c5", title: "جواهرات", color: "bg-indigo-300", words: ["الماس", "زمرد", "یاقوت", "فیروزه", "عقیق", "زبرجد"] },
      { id: "l2-c6", title: "منظومه شمسی", color: "bg-violet-300", words: ["مریخ", "زهره", "مشتری", "زحل", "عطارد", "نپتون"] },
      { id: "l2-c7", title: "اقیانوس‌ها", color: "bg-cyan-300", words: ["آرام", "اطلس", "هند", "خزر", "عمان", "مدیترانه"] },
      { id: "l2-c8", title: "فلزات", color: "bg-stone-300", words: ["آهن", "مس", "روی", "سرب", "آلومینیوم", "برنج"] },
    ]
  },
  {
    id: 3,
    title: "اصفهان: نقش جهان",
    description: "هنر و معماری در قلب ایران. زیبایی را کشف کن.",
    mapCoordinates: { x: 52, y: 52 }, // Isfahan (Center)
    categories: [
      { 
        id: "l3-sub1", title: "سازهای ایرانی", color: "bg-rose-300", 
        words: ["تار", "سه تار", "سنتور", "کمانچه", "دف", "نی"],
        isSubCategory: true, transformsTo: "Music", targetCategoryId: "l3-master"
      },
      { 
        id: "l3-sub2", title: "عکاسی", color: "bg-zinc-300", 
        words: ["لنز", "شاتر", "دیافراگم", "ایزو", "فلاش", "سه پایه"],
        isSubCategory: true, transformsTo: "Camera", targetCategoryId: "l3-master"
      },
      { 
        id: "l3-master", title: "آتلیه هنر", color: "bg-fuchsia-400", 
        words: ["بوم", "قلم‌مو", "پالت", "سه پایه"], 
        isVisual: true, icon: "Palette"
      },
      { id: "l3-c4", title: "شاعران کهن", color: "bg-yellow-200", words: ["حافظ", "سعدی", "مولانا", "فردوسی", "خیام", "عطار"] },
      { id: "l3-c5", title: "سبک‌های هنری", color: "bg-purple-300", words: ["رئالیسم", "کوبیسم", "سوررئال", "امپرسیون", "مدرن", "کلاسیک"] },
      { id: "l3-c6", title: "سینما", color: "bg-gray-400", words: ["دوربین", "تدوین", "بازیگر", "کارگردان", "پلان", "سکانس"] },
      { id: "l3-c7", title: "دستگاه‌ها", color: "bg-orange-300", words: ["شور", "ماهور", "همایون", "نوا", "چهارگاه", "سه گاه"] },
      { id: "l3-c8", title: "صنایع دستی", color: "bg-teal-300", words: ["قالی", "گلیم", "میناکاری", "خاتم", "منبت", "ترمه"] },
    ]
  },
  {
    id: 4,
    title: "یزد: شهر بادگیرها",
    description: "سکوت کویر و معماری خشتی. منطق را پیدا کن.",
    mapCoordinates: { x: 62, y: 60 }, // Yazd (Center East)
    categories: [
      { 
        id: "l4-sub1", title: "هندسه", color: "bg-violet-400", 
        words: ["مربع", "دایره", "مثلث", "لوزی", "بیضی", "ذوزنقه"],
        isSubCategory: true, transformsTo: "Shapes", targetCategoryId: "l4-master"
      },
      { 
        id: "l4-sub2", title: "ورزش‌های توپی", color: "bg-yellow-400", 
        words: ["فوتبال", "والیبال", "بسکتبال", "هندبال", "راگبی", "تنیس"],
        isSubCategory: true, transformsTo: "Trophy", targetCategoryId: "l4-master"
      },
      { 
        id: "l4-master", title: "مدرسه", color: "bg-blue-500", 
        words: ["تخته", "نیمکت", "گچ", "ماژیک"], 
        isVisual: true, icon: "Home" 
      },
      { id: "l4-c4", title: "احساسات", color: "bg-red-200", words: ["شادی", "امید", "عشق", "آرامش", "غرور", "اشتیاق"] },
      { id: "l4-c5", title: "واحد اندازه‌گیری", color: "bg-blue-300", words: ["متر", "لیتر", "گرم", "ثانیه", "آمپر", "ژول"] },
      { id: "l4-c6", title: "عناصر چهارگانه", color: "bg-orange-400", words: ["آب", "باد", "خاک", "آتش", "اثیری", "هوا"] }, 
      { id: "l4-c7", title: "انواع ادبی", color: "bg-emerald-300", words: ["حماسی", "غنایی", "تعلیمی", "درام", "کمدی", "تراژدی"] },
      { id: "l4-c8", title: "علوم پایه", color: "bg-cyan-200", words: ["فیزیک", "شیمی", "زیست", "ریاضی", "نجوم", "زمین"] },
    ]
  },
  {
    id: 5,
    title: "شیراز: شهر راز",
    description: "پایان سفر در تخت جمشید. شکوه تمدن.",
    mapCoordinates: { x: 55, y: 78 }, // Shiraz (South)
    categories: [
      { 
        id: "l5-sub1", title: "ارزها", color: "bg-green-400", 
        words: ["ریال", "دلار", "یورو", "پوند", "لیر", "ین"],
        isSubCategory: true, transformsTo: "Banknote", targetCategoryId: "l5-master"
      },
      { 
        id: "l5-sub2", title: "هفت سین", color: "bg-red-400", 
        words: ["سیب", "سمنو", "سنجد", "سیر", "سرکه", "سماق"],
        isSubCategory: true, transformsTo: "Apple", targetCategoryId: "l5-master"
      },
      { 
        id: "l5-master", title: "نوروز", color: "bg-rose-500", 
        words: ["آینه", "قرآن", "ماهی", "سبزه"], 
        isVisual: true, icon: "Flower2"
      },
      { id: "l5-c4", title: "شیر", color: "bg-amber-100", words: ["جنگل", "پاکت", "آب", "خوراکی", "شجاع", "سلطان"] }, 
      { id: "l5-c5", title: "نام‌های دخترانه", color: "bg-pink-200", words: ["لادن", "شقایق", "بنفشه", "نیلوفر", "یاسمن", "ارغوان"] },
      { id: "l5-c6", title: "پسوند مکان", color: "bg-purple-200", words: ["ستان", "زار", "دان", "کده", "آباد", "سرا"] },
      { id: "l5-c7", title: "نشانه نگارشی", color: "bg-gray-300", words: ["نقطه", "ویرگول", "دوتقطه", "گیومه", "پرانتز", "خط‌تیره"] },
      { id: "l5-c8", title: "انواع برنج", color: "bg-yellow-100", words: ["کته", "آبکش", "دمپخت", "شیربرنج", "پلو", "چلو"] },
    ]
  }
];
