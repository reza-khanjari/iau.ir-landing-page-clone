import Heading from "@/shared/ui/Heading";
import { FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { RiInstagramFill, RiTelegram2Fill } from "react-icons/ri";
import { SiAparat } from "react-icons/si";
import { TiSocialYoutube } from "react-icons/ti";

const iconClass =
  "drop-shadow-[0_0_3px_#457fdd30] transition-all justify-self-center  hover:text-primary-400 cursor-pointer";

function SocialMediaSection() {
  return (
    <section className="my-32">
      <Heading level="h1">رسانه های اجتماعی</Heading>
      <div className="text-primary-600 glow-black-800 glow-opacity-40 my-24 grid w-full grid-cols-2 gap-y-8 rounded-2xl bg-[#212121] py-32 text-6xl backdrop-blur-md sm:grid-cols-4 lg:grid-cols-8 lg:px-36">
        <GrLinkedin className={iconClass} />
        <RiTelegram2Fill className={iconClass} />
        <SiAparat className={iconClass} />
        <RiInstagramFill className={iconClass} />
        <TiSocialYoutube className={iconClass} />
        <GrGithub className={iconClass} />
        <FaPinterest className={iconClass} />
        <FaSquareXTwitter className={iconClass} />
      </div>
    </section>
  );
}

export default SocialMediaSection;
