import type { CardProps } from "@/shared/types/Card";


function CardLarge({
  imgSrc,
  imgAlt,
  title,
  desc,
  className,
}: CardProps) {
  return (
    <div
      className={`${className} group relative flex  min-h-130 md:min-h-[unset]   flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_0px_16px_rgba(0,0,0,0.5)]`}
    >
      <div className="h-full w-full  cursor-pointer overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-500"
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
      <div className="absolute top-8/10 right-0 px-8  text-white transition-all duration-300 group-hover:-translate-y-14">
        {title && <h3 className="font-vazir-bold text-lg">{title}</h3>}
        {desc && (
          <p className="translate-y-full transition-all duration-500 select-none group-hover:translate-y-0">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

export default CardLarge;
