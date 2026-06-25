import Heading from "../shared/ui/Heading";

const Styles = {
  link: "hover:border-primary-700  text-lg  lg:text-xl xl:text-2xl transition-colors inline-block w-max border-b-3 border-transparent leading-12",
};

function RavayatSection() {
  return (
    <section>
      <div className="border-primary-300 glow-inner-primary-400 bg-primary-300/5 backdrop-blur-sm w-full rounded-2xl border-2 pb-16">
        <Heading level="h1">روایت تحول</Heading>
        <div className="text-primary-700 flex flex-col items-center justify-center gap-x-4 gap-y-2 text-2xl sm:flex-row">
          <a className={Styles["link"]} href="#">
            شناسنامه شاخص ها
          </a>
          <span className="bg-primary-800 sm:inline-block hidden h-12  w-1"></span>
          <a className={Styles["link"]} href="#">
            سند تحول و تعالی دانشگاه
          </a>
          <span className="bg-primary-800 sm:inline-block hidden h-12  w-1"></span>
          <a className={Styles["link"]} href="#">
            نظام نامه
          </a>
        </div>
      </div>
    </section>
  );
}

export default RavayatSection;
