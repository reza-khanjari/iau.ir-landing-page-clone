import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const style = "flex items-center  gap-x-3";
const icon = "text-3xl text-white shrink-0 ";
 const textStyle = " flex-1"
function Footer() {
  return (
    <footer className="bg-[#161616] py-24  text-white">
      <div className="flex-center mb-16">
        <img className="max-w-65 w-full" src="images/Logo.webp" alt="logo" />
      </div>
      <div className="flex w-full  flex-col gap-8 justify-center px-8 md:px-16 lg:px-32 md:flex-row">
        <div className="flex basis-1/2  flex-col gap-y-8">
          <div className={style}>
            <FaMapMarkerAlt   className={icon} />
            <span  className={textStyle}>
              نشانی: تهران، انتهای بزرگراه شهید ستاری (شمال)، میدان دانشمند شهید
              دکتر طهرانچی، بلوار شهدای حصارک، سازمان مرکزی دانشگاه آزاد اسلامی
            </span>
          </div>
          <div className={style}>
            <BsFillTelephoneFill className={icon} />
            <span>تلفن: :۴۷۳۵۲۰۳۰ -۰۲۱</span>
          </div>
          <div className={style}>
            <CiMobile3 className={icon} />
            <span>کدپستی: ۱۴۷۷۸۹۳۷۸۰</span>
          </div>
          <div className={style}>
            <IoIosMail className={icon} />
            <span>صندوق پستی: ۱۴۵۱۵/۷۷۵</span>
          </div>
        </div>
        <div className="flex basis-1/2  flex-col">
          <ul className="flex flex-col gap-y-4">
            <li className="cursor-pointer">شبکه دانشگاه آزاد اسلامی</li>
            <li className="cursor-pointer">پژوهش دانشگاه</li>
            <li className="cursor-pointer">میز خدمت</li>
            <li className="cursor-pointer">دانشگاه مجازی</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
