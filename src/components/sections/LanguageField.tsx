import { LanguageFieldData } from "../../data/types";

interface LanguageFieldProps {
  languageField: LanguageFieldData;
  isDarkMode: boolean;
}

export function LanguageField({ languageField, isDarkMode }: LanguageFieldProps) {
  return (
    <section
      id="language-field"
      aria-labelledby="language-field-heading"
      className="scroll-mt-36 lg:scroll-mt-12"
    >
      <div className="flex items-center space-x-3 mb-2">
        <h2
          id="language-field-heading"
          className={`text-xl font-bold tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {languageField.title}
        </h2>
        <div
          className={`h-px flex-1 ${
            isDarkMode ? "bg-slate-800" : "bg-slate-200"
          }`}
        />
      </div>
      <p
        className={`text-xs mb-6 ${
          isDarkMode ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {languageField.subtitle}
      </p>

      <div className="grid grid-cols-1 gap-4">
        {languageField.languages.map((langItem) => (
          <div
            key={langItem.language}
            className={`border p-4 sm:p-5 rounded-lg shadow-xs flex flex-col justify-between transition-colors ${
              isDarkMode
                ? "border-slate-800 bg-slate-900"
                : "border-slate-200 bg-white"
            }`}
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                <div className="flex items-center space-x-2">
                  {langItem.symbol && (
                    <span className="text-base select-none leading-none" role="img" aria-hidden="true">
                      {langItem.symbol}
                    </span>
                  )}
                  <h3
                    className={`text-sm font-semibold ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {langItem.language}
                  </h3>
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-lg border tabular-nums shrink-0 self-start sm:self-auto leading-tight ${
                    isDarkMode
                      ? "text-indigo-300 bg-slate-800 border-slate-700"
                      : "text-indigo-700 bg-indigo-50 border-indigo-100"
                  }`}
                >
                  {langItem.proficiency}
                </span>
              </div>

              <p
                className={`mt-2.5 text-xs leading-relaxed ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {langItem.details}
              </p>

              {/* Related Certifications directly under the language */}
              {langItem.certifications && langItem.certifications.length > 0 && (
                <div className="mt-4 pt-3.5 border-t border-dashed border-slate-200 dark:border-slate-800">
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider block mb-2 ${
                      isDarkMode ? "text-indigo-400" : "text-indigo-700"
                    }`}
                  >
                    {languageField.relatedCertificationsLabel}
                  </span>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {langItem.certifications.map((cert, certIdx) => (
                      <li
                        key={certIdx}
                        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 text-xs sm:text-sm p-3 rounded-md border transition-colors ${
                          isDarkMode
                            ? "bg-slate-950/70 border-slate-800 text-slate-200"
                            : "bg-slate-50 border-slate-200/80 text-slate-800"
                        }`}
                      >
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                          <span
                            className={`font-semibold ${
                              isDarkMode ? "text-slate-100" : "text-slate-900"
                            }`}
                          >
                            {cert.name}
                          </span>
                          {cert.issuer && (
                            <span
                              className={`text-xs ${
                                isDarkMode ? "text-slate-400" : "text-slate-500"
                              }`}
                            >
                              ({cert.issuer})
                            </span>
                          )}
                        </div>
                        <time
                          className={`text-xs font-mono shrink-0 font-medium tabular-nums ${
                            isDarkMode ? "text-indigo-400" : "text-indigo-600"
                          }`}
                        >
                          {cert.date}
                        </time>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
