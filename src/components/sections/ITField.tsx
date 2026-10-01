import { ITFieldData } from "../../data/types";

interface ITFieldProps {
  itField: ITFieldData;
  isDarkMode: boolean;
}

export function ITField({ itField, isDarkMode }: ITFieldProps) {
  return (
    <section
      id="it-field"
      aria-labelledby="it-field-heading"
      className="scroll-mt-36 lg:scroll-mt-12"
    >
      <div className="flex items-center space-x-3 mb-2">
        <h2
          id="it-field-heading"
          className={`text-xl font-bold tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {itField.title}
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
        {itField.subtitle}
      </p>

      <div className="space-y-4">
        {itField.certifications.map((cert, index) => (
          <div
            key={index}
            className={`border p-4 sm:p-5 rounded-lg shadow-xs transition-colors flex flex-col justify-between gap-3 ${
              isDarkMode
                ? "border-slate-800 bg-slate-900 hover:border-slate-700"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/cert inline-flex items-center gap-1.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded ${
                        isDarkMode
                          ? "text-white hover:text-indigo-400"
                          : "text-slate-900 hover:text-indigo-600"
                      }`}
                      title="Verify credential on Coursera"
                    >
                      <span className="group-hover/cert:underline">{cert.name}</span>
                      <svg
                        className="h-3.5 w-3.5 opacity-60 group-hover/cert:opacity-100 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : (
                    <h3
                      className={`text-sm font-semibold ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {cert.name}
                    </h3>
                  )}
                  {cert.badge && (
                    <span
                      className={`text-[10px] font-medium font-mono px-2 py-0.5 rounded border ${
                        isDarkMode
                          ? "text-indigo-300 bg-indigo-950/60 border-indigo-800/80"
                          : "text-indigo-700 bg-indigo-50 border-indigo-200"
                      }`}
                    >
                      {cert.badge}
                    </span>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[11px] font-medium px-2 py-0.5 rounded border transition-colors inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                        isDarkMode
                          ? "text-indigo-400 bg-indigo-950/40 border-indigo-800 hover:bg-indigo-900/60"
                          : "text-indigo-700 bg-indigo-50 border-indigo-200 hover:bg-indigo-100"
                      }`}
                    >
                      <span>{cert.urlLabel || "認証"}</span>
                      <svg
                        className="h-2.5 w-2.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
                <p
                  className={`text-xs mt-0.5 ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {cert.issuer}
                </p>
              </div>
              <time
                className={`text-xs font-medium px-2.5 py-1 rounded-lg border tabular-nums self-start sm:self-auto shrink-0 ${
                  isDarkMode
                    ? "text-indigo-300 bg-slate-800 border-slate-700"
                    : "text-indigo-700 bg-indigo-50 border-indigo-100"
                }`}
              >
                {cert.date}
              </time>
            </div>

            {cert.skills && cert.skills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-[11px] px-2 py-0.5 rounded-md border ${
                      isDarkMode
                        ? "bg-slate-950/60 text-slate-300 border-slate-800"
                        : "bg-slate-50 text-slate-700 border-slate-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
