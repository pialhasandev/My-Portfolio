import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BsSendArrowUp } from "react-icons/bs";
import { FiCheckCircle, FiLinkedin, FiTwitter } from "react-icons/fi";

import { HiOutlineMail } from "react-icons/hi";
import Flex from "../common/Flex";

const ContactMe = () => {
  const form = useRef();
  const [phone, setPhone] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message sent successfully!");

          form.current.reset();
          setPhone("");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        },
      );
  };

  return (
    <section className="bg-bgclr pb-150 pt-30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <p className="text-gray-400 mb-2 text-xl">Get In Touch</p>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Let’s Talk For your <br />
            <span className="gradient-primary">Next Projects</span>
          </h1>

          <p className="text-gray-400 mt-4 text-xl max-w-md leading-relaxed">
            Discuss a project or just want to say hi? Connect with me via email
            or through a phone call.
          </p>

          <ul className="mt-4 space-y-3 text-gray-400">
            <li className="flex items-center text-lg">
              <FiCheckCircle className="mr-2 text-lg" />
              Frontend Development
            </li>

            <li className="flex items-center text-lg">
              <FiCheckCircle className="mr-2 text-lg" />
              Responsive UI Design
            </li>

            <li className="flex items-center text-lg">
              <FiCheckCircle className="mr-2 text-lg" />
              API Integration
            </li>

            <li className="flex items-center text-lg">
              <FiCheckCircle className="mr-2 text-lg" />
              Performance Optimization
            </li>

            <li className="flex items-center text-lg">
              <FiCheckCircle className="mr-2 text-lg" />
              Clean Code & Best Practices
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <Flex className="justify-center lg:justify-start gap-5 mt-6">
            <a
              href="https://www.linkedin.com/in/pialhasandev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-gray-400 hover:text-white transition" />
            </a>

            <a
              href="https://x.com/pialhasandev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-gray-400 hover:text-white transition" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mh.pial.dev@gmail.com&su=Project Inquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-gray-400 hover:text-white transition" />
            </a>
          </Flex>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#0f172a] p-6 rounded-xl shadow-lg">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="text-gray-300 text-sm">Full Name</label>

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full mt-2 p-3 rounded-md bg-[#020617] text-white outline-none"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Email Address</label>

              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
                className="w-full mt-2 p-3 rounded-md bg-[#020617] text-white outline-none"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Phone Number</label>

              <div className="mt-2">
                <PhoneInput.default
                  country={"bd"}
                  value={phone}
                  onChange={(value, country) => {
                    setPhone(value.startsWith("+") ? value : "+" + value);
                  }}
                  enableSearch={true}
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                    background: "#020617",
                    color: "white",
                    border: "none",
                    outline: "none",
                    borderRadius: "6px",
                    paddingLeft: "48px",
                  }}
                  buttonStyle={{
                    background: "#020617",
                    border: "none",
                  }}
                  dropdownStyle={{
                    background: "white",
                    color: "black",
                  }}
                />
              </div>
              <input type="hidden" name="phone" value={phone} />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full mt-2 p-3 rounded-md bg-[#020617] text-white outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-gray-300 text-sm">Message</label>

              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full mt-2 p-3 rounded-md bg-[#020617] text-white outline-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 mx-auto">
              <button
                type="submit"
                className="gradient-primary-bg flex items-center hover:scale-105 text-black px-6 py-3 cursor-pointer rounded-md font-medium duration-300"
              >
                Send Message
                <BsSendArrowUp className="ml-3 " />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
