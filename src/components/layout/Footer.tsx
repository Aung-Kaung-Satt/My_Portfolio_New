import { Language } from "../../data/types";

interface FooterProps {
  lang: Language;
  isDarkMode: boolean;
  profileName: string;
  scrollToTop: () => void;
}

export function Footer({
  lang,
  isDarkMode,
  profileName,
  scrollToTop,
}: FooterProps) {
  return (
    <footer
      className={`pt-10 pb-8 border-t text-xs transition-colors ${
        isDarkMode
          ? "border-slate-800 text-slate-400"
          : "border-slate-200 text-slate-600"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p>
          © {new Date().getFullYear()} {profileName}.{" "}
          {lang === "en" ? "All rights reserved." : "無断転載を禁じます。"}
        </p>
        <div className="flex items-center space-x-4">
          <span>
            {lang === "en"
              ? "Designed & built with React and Tailwind CSS"
              : "React & Tailwind CSS で制作"}
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label={lang === "en" ? "Back to top" : "ページ上部へ"}
            className={`group relative overflow-hidden bg-transparent cursor-pointer transition-colors duration-250 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[104px] sm:w-[110px] lg:w-[126px] h-[38px] flex items-center shrink-0 before:content-[''] before:absolute before:h-[2px] before:bottom-0 before:left-0 before:w-full before:scale-x-0 before:origin-bottom-right before:bg-current before:transition-transform before:duration-250 before:ease-out hover:before:scale-x-100 hover:before:origin-bottom-left ${
              isDarkMode
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-indigo-600 hover:text-indigo-800"
            }`}
          >
            {/* Primary text layer */}
            <div className="absolute inset-0 flex items-center pr-4 sm:pr-4 lg:pr-5 font-semibold text-xs sm:text-sm tracking-tight pointer-events-none select-none">
              {lang === "en" ? (
                <>
                  <span className="inline-block transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[0ms]">
                    Back
                  </span>
                  <span className="inline-block ml-1 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[50ms]">
                    to
                  </span>
                  <span className="inline-block ml-1 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[100ms]">
                    top
                  </span>
                </>
              ) : (
                <>
                  <span className="inline-block transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[0ms]">
                    ページ
                  </span>
                  <span className="inline-block ml-0.5 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[50ms]">
                    上部
                  </span>
                  <span className="inline-block ml-0.5 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] group-hover:-translate-y-7 group-hover:opacity-0 delay-[100ms]">
                    へ
                  </span>
                </>
              )}
            </div>

            {/* Clone text layer (slides in from bottom) */}
            <div className="absolute inset-0 flex items-center pr-4 sm:pr-4 lg:pr-5 font-semibold text-xs sm:text-sm tracking-tight pointer-events-none select-none">
              {lang === "en" ? (
                <>
                  <span className="inline-block translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[100ms]">
                    Back
                  </span>
                  <span className="inline-block ml-1 translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[150ms]">
                    to
                  </span>
                  <span className="inline-block ml-1 translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[200ms]">
                    top
                  </span>
                </>
              ) : (
                <>
                  <span className="inline-block translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[100ms]">
                    ページ
                  </span>
                  <span className="inline-block ml-0.5 translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[150ms]">
                    上部
                  </span>
                  <span className="inline-block ml-0.5 translate-y-7 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-[200ms]">
                    へ
                  </span>
                </>
              )}
            </div>

            {/* Arrow icon that rotates to point straight up on hover */}
            <svg
              strokeWidth="2.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute right-0.5 sm:right-1 top-1/2 -translate-y-1/2 w-4 h-4 transition-transform duration-250 ease-out -rotate-45 group-hover:-rotate-90 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
