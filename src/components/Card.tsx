import type { CardProps } from "@/shared/types/Card";


function Card({ imgSrc, imgAlt, title, desc }: CardProps) {
  return (
    <div className="flex  flex-col w-full overflow-hidden max-h-100 md:max-h-[unset] rounded-2xl bg-white shadow-[0px_0px_16px_rgba(0,0,0,0.5)]">
      <header className="w-full aspect-video cursor-pointer overflow-hidden">
        <img
          className="h-full w-full overflow-hidden  object-cover transition-all duration-500 hover:scale-180"
          src={imgSrc}
          alt={imgAlt}
        />
      </header>
      <div className="px-4 py-8">
        {title && <h3>{title}</h3>}
        {desc && <p>{desc}</p>}
      </div>
    </div>
  );
}

export default Card;
