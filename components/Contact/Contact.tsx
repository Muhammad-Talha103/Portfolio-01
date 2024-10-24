"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Form from './Form'
const Contact = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContact(true);
    }, 1500);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mx-auto relative py-10">
      {showContact && (
        <div className="flex flex-col md:flex-row gap-8 bg-gray-100 items-center justify-between px-6 md:px-12 py-8 md:py-16 rounded-lg shadow-lg">
          <div className="w-full md:w-[60%]">
            <Form/>
          </div>
          <div className="w-full md:w-[40%] flex flex-col gap-6">
            <div className="flex gap-3 items-start">
              <FaPhoneAlt size={20} className="text-main mt-2" />
              <div className="flex flex-col">
                <p className="font-semibold uppercase text-sm">Phone:</p>
                <Link href="tel:+923173940407">
                  <p className="text-[17px] font-semibold hover:text-main">
                    +92 317-3940407
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <MdEmail size={20} className="text-main mt-2" />
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
              <FaLocationDot size={20} className="text-main mt-2" />
              <div className="flex flex-col">
                <p className="font-semibold uppercase text-sm">Address:</p>
                <p className="text-[17px] font-semibold uppercase">
                  Hyderabad Sindh
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
