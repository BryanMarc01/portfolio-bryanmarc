"use client";

import { useState } from "react";
import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, site, waHref, heroCopy } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { CartoonButton } from "./CartoonButton";
import { LanguageToggle } from "./LanguageToggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { t, lang } = useLanguage();

  return (
    <Dialog.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
      <Dialog.Trigger asChild>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-navy bg-white text-navy shadow-cartoon-sm lg:hidden"
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Portal>
        <AnimatePresence>
          {open ? (
            <>
              <Dialog.Backdrop asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-40 bg-navy/50 backdrop-blur-sm"
                />
              </Dialog.Backdrop>
              <Dialog.Positioner className="fixed inset-0 z-50 flex justify-end">
                <Dialog.Content asChild>
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    className="flex h-full w-[85vw] max-w-sm flex-col gap-6 border-l-2 border-navy/10 bg-cream p-6 shadow-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="font-display text-lg font-bold text-navy">
                        {lang === "es" ? "Menú" : "Menu"}
                      </Dialog.Title>
                      <Dialog.CloseTrigger asChild>
                        <button
                          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-navy bg-white text-navy"
                          aria-label={lang === "es" ? "Cerrar menú" : "Close menu"}
                        >
                          <X className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </Dialog.CloseTrigger>
                    </div>

                    <nav aria-label="Navegación principal" className="flex flex-col gap-2">
                      {navLinks.map((link) => (
                        <Dialog.CloseTrigger asChild key={link.href}>
                          <a
                            href={link.href}
                            className="rounded-xl px-4 py-3 font-display text-lg font-semibold text-navy transition-colors hover:bg-white"
                          >
                            {t(link.label)}
                          </a>
                        </Dialog.CloseTrigger>
                      ))}
                    </nav>

                    <LanguageToggle className="w-fit" />

                    <CartoonButton
                      as="a"
                      href={waHref(t(heroCopy.talkMessage))}
                      target="_blank"
                      rel="noopener"
                      variant="cta"
                      className="w-full"
                    >
                      {t(heroCopy.hire)}
                    </CartoonButton>

                    <p className="mt-auto text-sm text-navy/60">
                      {lang === "es" ? site.location : site.locationEn}
                    </p>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Positioner>
            </>
          ) : null}
        </AnimatePresence>
      </Portal>
    </Dialog.Root>
  );
}
