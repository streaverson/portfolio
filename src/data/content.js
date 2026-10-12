import profilePhoto from "../assets/profile.png";
import bookStore from "../assets/bookStore.png";
import politicsview from "../assets/politicsview.png";
import redflag from "../assets/redflag.png";
import typetest from "../assets/typetest.png";
import projectPreview from "../assets/project-placeholder.svg";

/* ── Personal info ───────────────────────────────────────── */
export const profile = {
  name: "امیرمهدی ولدخانی",
  title: "Frontend Developer | React Specialist",
  intro:
    "توسعه‌دهنده فرانت‌اند متمرکز بر خلق رابط‌های کاربری سریع و مقیاس‌پذیر. در حال ساخت تجربه‌های وب مدرن با React و مشتاق به چالش‌های حوزه استارتاپ و توسعه موتورهای بازی.",
  photo: profilePhoto,
  photoAlt: " امیر",
};

/* ── About me ─────────── */
export const about = [
  "امیرمهدی ولدخانی هستم 19 ساله، مسیر حرفه‌ای من با تسلط بر اصول پایه وب شامل HTML, CSS, JavaScript و jQuery آغاز شد. با گذشت زمان و گسترش دانش فنی، بر روی فریم‌ورک React متمرکز شدم تا بتوانم اپلیکیشن‌های پیچیده‌تر و تعاملی‌تری بسازم.",
  "در پروژه‌های اخیر، استفاده از Tailwind CSS برای طراحی سریع و Zustand برای مدیریت متمرکز State، سرعت و کیفیت توسعه من را به شدت افزایش داده است. هدف نهایی من ترکیب این دانش برای ساخت یک موتور بازی تحت وب اختصاصی است.",
];

/* ── Projects ────────────────────────────────────────────── */
export const projects = [
  {
    name: "Politics View",
    description:
      "یک کوییز پاسخ‌محور (Political Compass) که با React ساخته شده. شامل رندرینگ داینامیک سوالات، مدیریت وضعیت (State Management) و تحلیل نهایی بصری نتایج است.",
    technologies: ["React", "JavaScript", "Css"],
    image: politicsview,
    imageAlt: "نمای پروژه Politics View",
    liveUrl: "https://politicsview.vercel.app/",
    sourceUrl: "https://github.com/streaverson/politics_view",
  },
  {
    name: "RedFlag Detector",
    description:
      "یک ابزار بازیگوش برای تحلیل رفتارهای روابط عاطفی و ارائه امتیاز 'پرچم قرمز' بر اساس داده‌های ورودی کاربر.",
    technologies: ["React", "JavaScript", "Css", "openai API"],
    image: redflag,
    imageAlt: "نمای پروژه RedFlag",
    liveUrl: "https://isitredflag.vercel.app/",
    sourceUrl: "https://github.com/streaverson/RedFlag",
  },
  {
    name: "برگ (آنلاین شاپ)",
    description:
      "فروشگاه آنلاین کتاب با پشتیبانی از زبان فارسی (RTL). شامل سیستم جستجو، دسته‌بندی نویسندگان و مدیریت سبد خرید به صورت کامل.",
    technologies: ["React", "JavaScript", "Tailwind", "Zustand", "Css"],
    image: bookStore,
    imageAlt: "نمای فروشگاه کتاب Barg",
    liveUrl: "https://bookshoplive.vercel.app/",
    sourceUrl: "https://github.com/streaverson/book_shop",
  },
  {
    name: "Typing Speed Test",
    description:
      "ابزاری برای سنجش سرعت تایپ با ۱۰ انگشت. یک پروژه متمرکز بر منطق جاوااسکریپت خالص (Vanilla JS) و دست‌کاری DOM برای اندازه‌گیری دقیق سرعت.",
    technologies: ["JavaScript", "CSS"],
    image: typetest,
    imageAlt: "نمای تست سرعت تایپ",
    liveUrl: "https://streaverspeedtest.vercel.app/",
    sourceUrl: "https://github.com/streaverson/typing-speedTest-vanilla",
  },
];

/* ── Experience ──────────────────────────────────────────── */
export const experience = [
  {
    company: "نوا ",
    role: "پشتیبان سایت - فرانت اند دولوپر جونیور",
    period: "از اردیبهشت 1404 تا مهر 1404",
    description:
      "همکاری در توسعه و عملکرد با استفاده از Bootstrap و JS برای بهبود تجربه کاربری و سرعت بارگذاری صفحات.",
  },
];

/* ── Contact links ───────────────────────────────────────── */
export const contact = {
  email: "amirmahdi.valadkhani@gmail.com",
  github: "https://github.com/streaverson",
  linkedin: "https://www.linkedin.com/in/amir-valadkhani",
};
