import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Language, NavigationItem } from "../../data/types";

interface NavbarProps {
  lang: Language;
  toggleLanguage: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  activeSection: string;
  navigation: NavigationItem[];
  profileName: string;
  scrollToTop: () => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  mobileNavRef: React.RefObject<HTMLDivElement | null>;
}

export function Navbar({
  lang,
  toggleLanguage,
  isDarkMode,
  toggleTheme,
  activeSection,
  navigation,
  profileName,
  scrollToTop,
  handleNavClick,
  mobileNavRef,
}: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Main navigation"
      className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors ${
        isDarkMode
          ? "border-slate-800/80 bg-slate-950/85 text-slate-200 shadow-xs"
          : "border-slate-200/80 bg-white/85 text-slate-800 shadow-xs"
      }`}
    >
      <div id="site-top" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left: Brand / Logo */}
          <div className="flex items-center space-x-3">
            <a
              href="#site-top"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              aria-label={profileName}
              title={profileName}
              className="flex items-center group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-lg p-1 cursor-pointer"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-xs group-hover:bg-indigo-500 transition-colors">
                AK
              </span>
            </a>
          </div>

          {/* Center: Desktop Horizontal Navigation Links (md and up) */}
          <ul className="hidden md:flex items-center space-x-1 text-xs">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`relative block px-3 py-1.5 rounded-lg text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                      isActive
                        ? "text-white"
                        : isDarkMode
                        ? "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTopNav"
                        className="absolute inset-0 bg-indigo-600 rounded-lg shadow-xs -z-0"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: Quick Controls (Language & Theme Toggles) */}
          <div className="flex items-center space-x-2">
            {/* Language Switch Button */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              type="button"
              onClick={toggleLanguage}
              aria-label={`Switch to ${lang === "en" ? "Japanese" : "English"}`}
              className={`inline-flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                isDarkMode
                  ? "border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {lang === "en" ? (
                <>
                  <span role="img" aria-label="Mount Fuji" className="text-sm select-none leading-none">
                    🗻
                  </span>
                  <span>日本語</span>
                </>
              ) : (
                <>
                  <span role="img" aria-label="Global" className="text-sm select-none leading-none">
                    🌐
                  </span>
                  <span>English</span>
                </>
              )}
            </motion.button>

            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={toggleTheme}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              className={`p-2 rounded-lg border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 overflow-hidden relative ${
                isDarkMode
                  ? "border-slate-800 bg-slate-900 text-amber-300 hover:bg-slate-800"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDarkMode ? (
                  <motion.div
                    key="top-dark-sun"
                    initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex items-center justify-center"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="top-light-moon"
                    initial={{ rotate: 90, scale: 0.4, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex items-center justify-center"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile/Tablet Horizontal Scrollable Section Links (< md) */}
        <div
          ref={mobileNavRef}
          className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50 py-2 overflow-x-auto scrollbar-none"
        >
          <ul className="flex space-x-1 text-xs whitespace-nowrap px-1">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li
                  key={item.id}
                  data-nav-id={item.id}
                  className="relative shrink-0"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`relative block px-3 py-1 rounded-lg text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                      isActive
                        ? "text-white"
                        : isDarkMode
                        ? "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeMobileNav"
                        className="absolute inset-0 bg-indigo-600 rounded-lg shadow-xs -z-0"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
