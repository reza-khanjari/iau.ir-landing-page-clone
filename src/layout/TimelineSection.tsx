import Timeline from "@/components/Timeline";
import type { TimelineData } from "@/shared/types/TimelineData";
import Heading from "@/shared/ui/Heading";

const timelineItems: TimelineData[] = [
  {
    id: '0',
    contentTop: " 25 مرداد تا 6 شهریور",
    contentBottom: "ثبت نام و انتخاب واحد",
  },
  {
    id: '1',
    contentTop: "22 شهریور",
    contentBottom: "شروع کلاس ها",
  },
  {
    id: '2',
    contentTop: "29 شهریور تا 3 مهر ",
    contentBottom: "حذف و اضافه",
  },
  {
    id: '3',
    contentTop: "11  دی (غیر پزشکی)",
    contentTop2: "18 دی (علوم پزشکی)",
    contentBottom: "پایان کلاس",
  },

  {
    id: '4',
    contentTop: "14 تا 25 دی(غیر پزشکی)",
    contentTop2: "20دی تا 2 بهمن(علوم پزشکی)",
    contentBottom: "برگزاری امتحانات",
  },
];

function TimelineSection() {
  return (
    <>
      <Heading level="h1" shapes={false}>
        <span className="text-center">
          تقویم آموزشی دانشگاه برای رشته‌های نیمسال اول
        </span>
      </Heading>
      <div className="my-8 rounded-3xl glow-black-800 glow-opacity-40 bg-[#151515ef] backdrop-blur-md py-16 text-white">
        <Timeline items={timelineItems} />
      </div>
    </>
  );
}

export default TimelineSection;
