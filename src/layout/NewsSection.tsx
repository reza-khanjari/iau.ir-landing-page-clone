import type { CardProps } from "@/shared/types/Card";
import Card from "../components/Card";
import CardLarge from "../components/CardLarge";
import Heading from "../shared/ui/Heading";
import Button from "@/shared/ui/Button";

const images: CardProps[] = [
  {
    imgSrc: "/images/iau-white.png",
    imgAlt: "iau-logo-white",
    desc: `
        ثبت‌نام و انتخاب رشته برای پذیرش دانشجو صرفاً بر اساس سوابق تحصیلی در مقاطع کارشناسی و کاردانی (پیوسته و ناپیوسته) دانشگاه آزاد اسلامی آغاز شد.

    `,
  },
  {
    imgSrc: "/images/iau-indigo.png",
    imgAlt: "iau-logo-gold",
    desc: "رئیس دانشگاه آزاد اسلامی در نشست سراسری رؤسای واحدها، بر لزوم حرکت دانشگاه‌ها به سمت کارآفرینی تأکید کرد.",
  },
  {
    imgSrc: "/images/iau-silver.png",
    imgAlt: "iau-logo-gold",
    desc: "معاونت آموزشی دانشگاه آزاد اسلامی جزئیات دریافت کارت ورود به جلسه و تقویم امتحانات پایان‌سال را اعلام کرد. دانشجویان جهت شرکت در امتحانات لازم است",
  },

  {
    imgSrc: "/images/iau-gold.png",
    imgAlt: "iau-logo-gold",
    desc: "مدیرکل امور بین‌الملل دانشگاه آزاد اسلامی از افزایش جذب دانشجویان غیرایرانی در سال تحصیلی جاری خبر داد. وی اعلام کرد با ارتقای زیرساخت‌های آموزشی... ",
  },
];
const imagesLg: CardProps[] = [
  {
    imgSrc: "/images/iau-green.png",
    imgAlt: "iau-logo-white",
    title: "راه‌اندازی سامانه‌ دستیار آموزشی برای دانشجویان دکتری",
    desc: "معاونت علوم، مهندسی و کشاورزی دانشگاه آزاد اسلامی از فعال‌سازی فرآیند جذب «دستیاران آموزشی» خبر داد. در این طرح، دانشجویان دکتری تخصصی واجد شرایط می‌توانند ...",
  },
  {
    imgSrc: "/images/iau-neon.png",
    imgAlt: "iau-logo-white",
    title: " آغاز مسابقات ملی کرسی‌های آزاداندیشی دانشجویی",
    desc: "مرحله کشوری رویداد ملی کرسی‌های آزاداندیشی با حضور صدها تیم دانشجویی از سراسر کشور در دانشگاه آزاد اسلامی آغاز شد. این مسابقات با هدف ایجاد",
  },
];
function NewsSection() {
  return (
    <section className="w-full">
      <Heading level="h1">اخبار و رویدادهای دانشگاه</Heading>

      <div className="mx-auto grid max-w-full grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:grid-rows-2">
        {images.slice(0, 2).map((img, i) => (
          <Card
            key={i}
            imgSrc={img.imgSrc}
            imgAlt={img.imgAlt}
            desc={img.desc}
          />
        ))}
        {imagesLg.map((img, i) => (
          <CardLarge
            className="col-span-2"
            key={i}
            imgSrc={img.imgSrc}
            imgAlt={img.imgAlt}
            title={img.title}
            desc={img.desc}
          />
        ))}
        {images.slice(2, 4).map((img, i) => (
          <Card
            key={i}
            imgSrc={img.imgSrc}
            imgAlt={img.imgAlt}
            desc={img.desc}
          />
        ))}
      </div>

      <div className="my-16 flex justify-center">
        <Button >
          آرشیو اخبار
        </Button>
      </div>
    </section>
  );
}

export default NewsSection;
