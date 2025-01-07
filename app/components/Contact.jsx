import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] "
    >
      <h4 className=" text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className=" text-center text-5xl font-Ovo">Get in touch </h2>

      <p className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form>
        <div className="">
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
        </div>
        <textarea rows="6" placeholder="Enter your message" required></textarea>

        <button type="submit">Submit now</button>
      </form>
    </div>
  );
};

export default Contact;
