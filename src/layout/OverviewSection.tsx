import StatCard from "@/components/StatCard";
import type { StateCard } from "@/shared/types/StatCard";
import Heading from "@/shared/ui/Heading";
import { BiSolidSchool } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";

const statCardData: StateCard[] = [
  {
    icon: <PiStudentFill />,
    title: "دانشجویان",
    number: 1450000,
  },
  {
    icon: <GiGraduateCap />,
    title: "فارغ التحصیلان",
    number: 7384200,
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "اساتید",
    number: 19372,
  },
  {
    icon: <BiSolidSchool />,
    title: "واحدها",
    number: 496,
  },
  {
    icon: <CiCalendarDate />,
    title: "سال تاسیس",
    number: 1361,
  },
];
function OverviewSection() {
  return (
    <section>
      <Heading level="h1">دانشگاه آزاد در یک نگاه</Heading>
      <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 lg:flex-row gap-x-28">
        {statCardData.map((card, i) => (
          <StatCard key={i} icon={card.icon} title={card.title} number={card.number}  />
        ))}
      </div>
    </section>
  );
}

export default OverviewSection;
