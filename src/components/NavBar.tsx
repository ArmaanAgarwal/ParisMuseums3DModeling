"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "@/components/ui/Search";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslation";

export function NavBar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { href: "/", label: t("ui.nav.home") },
    { href: "/tour", label: t("ui.nav.tour") },
    { href: "/galleries", label: t("ui.nav.galleries") },
    { href: "/lab", label: t("ui.nav.lab") },
    { href: "/playbook", label: t("ui.nav.playbook") },
    { href: "/saved", label: t("ui.nav.saved") },
  ];

  return (
    <>
      <nav className={`sticky top-0 z-50 border-b transition-all ${
        scrolled 
          ? "border-white/20 bg-black/95 backdrop-blur-xl shadow-lg shadow-black/20" 
          : "border-white/10 bg-black/80 backdrop-blur-md"
      }`}>
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white transition hover:text-cyan-400"
            >
              <span className="text-xl">🏛️</span>
              <span className="hidden sm:inline">{t("branding.museumName")}</span>
              <span className="sm:hidden">{t("branding.museumNameShort") || "Museum"}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative rounded-lg px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white/90"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Search, Language Selector & Mobile Menu */}
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <button
                onClick={() => setSearchOpen(true)}
                className="group relative flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium transition hover:border-white/25 hover:bg-white/10"
              >
                <span className="text-lg">🔍</span>
                <span className="hidden md:inline">{t("ui.buttons.search") || "Search"}</span>
                <kbd className="ml-2 hidden rounded border border-white/20 bg-white/5 px-2 py-0.5 text-xs lg:inline">
                  ⌘K
                </kbd>
              </button>

              {/* Mobile Menu Button */}
              <MobileMenu navItems={navItems} pathname={pathname} />
            </div>
          </div>
        </div>
      </nav>

      <Search open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function MobileMenu({ navItems, pathname }: { navItems: Array<{ href: string; label: string }>, pathname: string | null }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-white/15 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
        aria-label="Menu"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-0 right-0 top-[73px] z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href !== "/" && pathname?.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
