import Card from "../components/Card";
import type {  CardProps } from "../shared/types/Card";
import Heading from "../shared/ui/Heading";

const images: CardProps[] = [
  {
    imgSrc: "/images/iau-white.png",
    imgAlt: "iau-logo-white",
    desc: "  ثبت‌نام و انتخاب رشته برای پذیرش دانشجو صرفاً بر اساس سوابق تحصیلی در مقاطع کارشناسی و کاردانی (پیوسته و ناپیوسته) دانشگاه آزاد اسلامی آغاز شد    ",
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
function MediaSection() {
  return (
    <section>
      <Heading level="h1" >رسانه‌های برخط دانشگاه</Heading>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {images.map((img, i) => (
          <Card
            key={i}
            imgSrc={img.imgSrc}
            imgAlt={img.imgSrc}
            desc={img.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default MediaSection;
