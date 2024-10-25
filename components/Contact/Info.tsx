import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
const Info = () => {
  return (
    <div className="w-full md:w-[40%] flex flex-col  gap-8">
      <div className="flex gap-3 items-start">
        <FaPhoneAlt size={20} className="text-main" />
        <div className="flex flex-col ">
          <p className="font-semibold uppercase text-sm">Phone:</p>
          <Link href="tel:+923173940407">
            <p className="text-[17px] font-semibold hover:text-main">
              +92 317-3940407
            </p>
          </Link>
        </div>
      </div>
      <div className="flex gap-3 items-start">
        <MdEmail size={20} className="text-main" />
        <div className="flex flex-col">
          <p className="font-semibold uppercase text-sm">Email:</p>
          <Link href="mailto:talhagp908@gmail.com">
            <p className="text-[17px] font-semibold hover:text-main">
              talhagp908@gmail.com
            </p>
          </Link>
        </div>
      </div>
      <div className="flex gap-3 items-start">
        <FaLocationDot size={20} className="text-main" />
        <div className="flex flex-col">
          <p className="font-semibold uppercase text-sm">Address:</p>
          <p className="text-[17px] font-semibold uppercase">Hyderabad Sindh</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
