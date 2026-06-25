import type { TimelineProps } from "@/shared/types/TimelineData";

function Timeline({ items }: TimelineProps) {
  return (
    //wrapper
    <div className="w-full lg:overflow-auto">
      <div className="flex-center w-full flex-col lg:flex-row">
        <div className="bg-primary-300 border-primary-700 size-8 rounded-full border-6 shadow-[0_0_12px_#457fdd]"></div>

        {items.map((item, index) => {
          {
            /* Each Time Pont */
          }
          return (
            <div key={index} className="flex w-full lg:w-auto lg:flex-col">
              {/* contentTop */}
              <div className="flex min-h-48 w-full flex-col text-sm md:text-base justify-center text-center lg:px-2 xl:px-6 2xl:px-10">
                <p className="mx-auto max-w-32 md:max-w-50 w-full truncate"> {item.contentTop}</p>
                <p className="mx-auto max-w-32 md:max-w-50 w-full truncate">{item?.contentTop2}</p>
              </div>
              {/* Lines & Dots */}
              <div className="flex flex-col items-center lg:flex-row">
                <div className="bg-primary-700 relative h-full w-0.75 shadow-[0_0_10px_#457fdd] lg:h-0.75 lg:w-full">
                  <div className="bg-primary-700 border-primary-400 abs-center size-8 rounded-full border-4 shadow-[0_0_12px_#457fdd]"></div>
                </div>
              </div>

              {/* contentBottom */}
              <div className="flex min-h-48 w-full flex-col justify-center gap-y-2 truncate text-center lg:px-2 xl:px-6 2xl:px-10">
                <p className="mx-auto max-w-32 sm:max-w-[unset] text-sm md:text-base w-full truncate"> {item.contentBottom}</p>

              </div>
            </div>
          );
        })}
        <div className="bg-primary-300 border-primary-700 size-8 rounded-full border-6 shadow-[0_0_12px_#457fdd]"></div>
      </div>
    </div>
  );
}

export default Timeline;
