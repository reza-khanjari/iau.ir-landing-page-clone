import NewsSection from "./NewsSection";
import RavayatSection from "./RavayatSection";
import MediaSection from "./MediaSection";
import TimelineSection from "./TimelineSection";
import OverviewSection from "./OverviewSection";
import SocialMediaSection from "./SocialMediaSection";

function Main() {
  return (
    <main className="mt-[calc(100dvh-1px)] min-h-dvh  ">
      <div className="flex-center w-full bg-cover">
        <img className="w-full h-full saturate-0 "  src="/images/year-1405.png" alt="year1405" />
      </div>
      <div className="mx-auto px-4 md:w-9/10" >
        <NewsSection />
        <RavayatSection />
        <TimelineSection />
        <MediaSection />
        <OverviewSection />
        <SocialMediaSection />
      </div>
    </main>
  );
}

export default Main;
