import React from "react";

const Form = () => {
  return (
    <form
      action="https://formspree.io/f/mjkvklgp"
      method="POST"
      className="flex flex-col gap-6 p-8 rounded-xl bg-white shadow-md"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-main">
        Let&apos;s Work Together
      </h2>
      <p className="text-gray-700">
        I am dedicated to creating innovative solutions that meet your unique
        needs.&apos; By combining modern design principles with user-centered
        approaches,&apos; I ensure that your project not only looks great but
        also functions seamlessly. Let&apos;s collaborate to turn your ideas
        into reality and create impactful digital experiences together.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          required
          className="bg-gray-200 w-full rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-main"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          required
          className="bg-gray-200 w-full rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-main"
          placeholder="Your Email"
        />
        <input
          type="text"
          name="subject"
          required
          className="bg-gray-200 w-full rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-main"
          placeholder="Subject"
        />
        <input
          type="text"
          name="company"
          required
          className="bg-gray-200 w-full rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-main"
          placeholder="Your Company"
        />
      </div>
      <textarea
        name="message"
        required
        className="resize-none h-40 bg-gray-200 w-full rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-main"
        placeholder="Your Message"
      ></textarea>
      <button
        type="submit"
        className="bg-main text-white rounded-full py-3 px-6 font-semibold hover:bg-main-dark transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
