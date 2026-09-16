"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { heroCopy, waHref } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export function WhatsAppFloat() {
  const { t } = useLanguage();

  return (
    <motion.a
      href={waHref(t(heroCopy.talkMessage))}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy bg-green text-white shadow-cartoon"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </motion.a>
  );
}
