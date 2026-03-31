"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50"
        >
          <div className="glass-card p-5 border border-white/10 shadow-2xl">
            <div className="flex items-start justify-between gap-3 mb-3">
              <p className="text-white text-sm font-medium">We value your privacy</p>
              <button
                onClick={decline}
                className="text-text-secondary hover:text-white transition-colors shrink-0"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-text-secondary text-xs leading-relaxed mb-4">
              We use essential cookies to ensure our website functions properly. No
              tracking or advertising cookies are used.
            </p>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="flex-1 px-4 py-2 bg-accent hover:bg-accent/90 text-white text-xs font-medium rounded-lg transition-colors"
              >
                Accept
              </button>
              <button
                onClick={decline}
                className="flex-1 px-4 py-2 bg-card hover:bg-card/80 text-text-secondary text-xs font-medium rounded-lg border border-white/10 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
