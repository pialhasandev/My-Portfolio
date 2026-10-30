
import { useState } from "react";
import {
  FaWhatsapp,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "8801575894183";

  const sendMessage = () => {
    const defaultMessage =
      "Hello Pial! I visited your portfolio and would like to connect with you.";

    const finalMessage = message.trim() || defaultMessage;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      finalMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setMessage("");
  };

  return (
    <div className="fixed bottom-24 right-6 z-[9999]">

      {/* WhatsApp Popup */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] max-w-[calc(100vw-32px)] overflow-hidden rounded-xl shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between bg-[#075E54] px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#25D366]">
                  <FaWhatsapp className="text-3xl" />
                </div>
                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#075E54] bg-green-400" />
              </div>

              <div>
                <h3 className="font-semibold">Pial Hasan</h3>
                <p className="text-xs text-green-100">
                  Typically replies quickly
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 transition hover:bg-white/20"
              aria-label="Close WhatsApp popup"
            >
              <FaTimes />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-[#efeae2] p-4">
            <div className="max-w-[90%] rounded-xl rounded-tl-none bg-white p-3 shadow-sm">
              <p className="text-sm font-medium text-gray-800">
                Hello! 👋
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Welcome to my portfolio. Have a project or collaboration
                in mind? Feel free to message me!
              </p>
              <p className="mt-2 text-right text-[10px] text-gray-400">
                WhatsApp Chat
              </p>
            </div>
          </div>

          {/* Message Input */}
          <div className="flex items-center gap-2 bg-white p-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Type a message..."
              className="min-w-0 flex-1 rounded-full border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#25D366]"
            />

            <button
              onClick={sendMessage}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105 hover:bg-[#128C7E]"
              aria-label="Send WhatsApp message"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#128C7E]"
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaWhatsapp className="text-4xl" />
        )}

        {!isOpen && (
          <span className="absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-white bg-red-500" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppPopup;
