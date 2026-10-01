/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Aurora from "./components/Aurora.tsx";
import { DotField } from "./components/DotField.tsx";
import { DATA, Language } from "./data";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { ITField } from "./components/sections/ITField";
import { LanguageField } from "./components/sections/LanguageField";

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  const mobileNavRef = useRef<HTMLDivElement>(null);
  const isNavClickingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const currentData = DATA[lang];

  // Automatically scroll mobile horizontal nav bar to center the active item (e.g. language-field)
  useEffect(() => {
    if (!mobileNavRef.current) return;
    const container = mobileNavRef.current;
    const activeTab = container.querySelector<HTMLElement>(`[data-nav-id="${activeSection}"]`);
    if (activeTab) {
      const activeRect = activeTab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const currentScroll = container.scrollLeft;
      const tabCenter = activeRect.left - containerRect.left + currentScroll + activeRect.width / 2;
      const targetScrollLeft = tabCenter - containerRect.width / 2;

      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  // Accurate scrollspy implementation based on actual viewport scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isNavClickingRef.current) return;

      const mainNav = document.querySelector('nav[aria-label="Main navigation"]');
      const headerHeight = mainNav ? mainNav.getBoundingClientRect().height : 70;
      const triggerLine = headerHeight + 50;

      // 1. Check if user reached near the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        const lastSection = currentData.navigation[currentData.navigation.length - 1];
        if (lastSection) {
          setActiveSection(lastSection.id);
        }
        return;
      }

      // If user is at or near the top of the page, ensure "about" is active
      if (window.scrollY <= 60) {
        setActiveSection("about");
        return;
      }

      // 2. Scan section positions in DOM order
      const sectionElements = currentData.navigation
        .map((item) => ({
          id: item.id,
          el: document.getElementById(item.id),
        }))
        .filter((item): item is { id: string; el: HTMLElement } => item.el !== null);

      let currentActiveId = sectionElements[0]?.id || "about";

      for (const section of sectionElements) {
        const rect = section.el.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          currentActiveId = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [lang, currentData.navigation]);

  // Smooth scroll handler with programmatic lock and accurate header offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    setActiveSection(id);
    isNavClickingRef.current = true;
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      isNavClickingRef.current = false;
    }, 850);

    const mainNav = document.querySelector('nav[aria-label="Main navigation"]');
    const headerHeight = mainNav ? mainNav.getBoundingClientRect().height : 64;
    const clearance = headerHeight + 16;

    const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const targetScrollY = Math.max(0, elementTop - clearance);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: targetScrollY,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    if (window.history.pushState) {
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // Scroll directly to the very top div
  const scrollToTop = () => {
    setActiveSection("about");
    isNavClickingRef.current = true;
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      isNavClickingRef.current = false;
    }, 850);

    const topDiv = document.getElementById("site-top");
    if (topDiv) {
      topDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    document.body.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });

    const sidebar = document.querySelector("header");
    if (sidebar) {
      sidebar.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }

    if (window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ja" : "en"));
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen relative transition-colors duration-200 antialiased ${
        isDarkMode
          ? "bg-slate-950 text-slate-100 selection:bg-indigo-900 selection:text-indigo-200"
          : "bg-slate-50 text-slate-800 selection:bg-indigo-100 selection:text-indigo-900"
      }`}
    >
      {/* Background canvas container */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {isDarkMode ? (
          <Aurora
            colorStops={["#7cff67", "#B497CF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        ) : (
          <DotField
            dotRadius={1.5}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            gradientFrom="rgba(99, 102, 241, 0.4)"
            gradientTo="rgba(168, 85, 247, 0.25)"
            glowColor="rgba(99, 102, 241, 0.15)"
          />
        )}
      </div>

      {/* Sticky Main Navigation Bar */}
      <Navbar
        lang={lang}
        toggleLanguage={toggleLanguage}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        navigation={currentData.navigation}
        profileName={currentData.profile.name}
        scrollToTop={scrollToTop}
        handleNavClick={handleNavClick}
        mobileNavRef={mobileNavRef}
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Desktop Sticky Left Sidebar (Hero) */}
          <Hero
            profile={currentData.profile}
            lang={lang}
            isDarkMode={isDarkMode}
          />

          {/* Right Column: Scrolling Content */}
          <motion.main
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-7/12 py-8 lg:py-20 space-y-16"
          >
            <About
              about={currentData.about}
              title={currentData.navigation[0].label}
              isDarkMode={isDarkMode}
            />

            <Experience
              experience={currentData.experience}
              title={currentData.navigation[1].label}
              lang={lang}
              responsibilitiesHeading={currentData.ui.responsibilitiesHeading}
              isDarkMode={isDarkMode}
            />

            <Projects
              projects={currentData.projects}
              title={currentData.navigation[2].label}
              ui={currentData.ui}
              isDarkMode={isDarkMode}
            />

            <Skills
              skills={currentData.skills}
              title={currentData.navigation[3].label}
              isDarkMode={isDarkMode}
            />

            <ITField
              itField={currentData.itField}
              isDarkMode={isDarkMode}
            />

            <LanguageField
              languageField={currentData.languageField}
              isDarkMode={isDarkMode}
            />

            <Footer
              lang={lang}
              isDarkMode={isDarkMode}
              profileName={currentData.profile.name}
              scrollToTop={scrollToTop}
            />
          </motion.main>
        </div>
      </div>
    </div>
  );
}
