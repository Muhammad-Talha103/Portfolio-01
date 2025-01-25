import FrontendImage from "@/images/frontendImage.jpg";
import Container from "@/shared/Container";
import Image from "next/image";
import React from "react";

const FrontendText = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around  mt-16 py-12 w-full bg-gray-100">
      <Container className="flex flex-col md:flex-row justify-around  w-full">

      <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
        <Image
          src={FrontendImage}
          alt="Frontend Image"
          width={500}
          height={700}
          className="h-[350px] w-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 mt-8 md:mt-0">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Enhance Your Frontend Development with a Complimentary Consultation!
        </h2>
        <p className="text-sm text-gray-600">
          Looking to elevate your website&apos;s user experience? I offer
          complimentary consultations for frontend development. Together, we can
          explore your project goals, design concepts, and technical
          requirements. Let&apos;s collaborate to create a seamless and engaging
          interface that captivates your audience.
        </p>
      </div>
      </Container>
    </div>
  );
};

export default FrontendText;
