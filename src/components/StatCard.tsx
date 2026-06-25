import type { StateCard } from "@/shared/types/StatCard";

function StatCard({ icon, title, number }: StateCard) {
  return (
    <div className="text-primary-700 flex flex-col bg-none text-center font-extrabold">
      <div className="flex-center my-4 text-7xl drop-shadow-[0_0_5px_#07132755]">
        {icon}
      </div>
      <p className="mb-4 text-shadow-[0px_2px_3px_#07132755] sm:text-lg md:text-xl lg:text-2xl">
        + {number}
      </p>
      <p className="text-xl text-shadow-[0px_2px_3px_#07132755]">{title}</p>
    </div>
  );
}

export default StatCard;
