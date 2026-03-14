import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import {
  ContributionGraph,
  type ContributionData,
} from "@/components/ui/contribution-graph";

const GITHUB_USERNAME = "prithaxdev";
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = [CURRENT_YEAR, CURRENT_YEAR - 1, CURRENT_YEAR - 2];

interface ApiResponse {
  total: Record<string, number>;
  contributions: ContributionData[];
}

const GithubContributions = () => {
  const [data, setData] = useState<ContributionData[]>([]);
  const [total, setTotal] = useState(0);
  const [year, setYear] = useState(CURRENT_YEAR);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json() as Promise<ApiResponse>;
      })
      .then((json) => {
        setData(json.contributions);
        setTotal(json.total[String(year)] ?? 0);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [year]);

  return (
    <section className="w-full py-8" id="github">
      <SectionHeader title="GitHub Contributions" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-2xl border border-black/10 bg-black/3 px-5 py-6 sm:px-6 dark:border-white/10 dark:bg-white/3"
      >
        {/* Header row */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
          >
            <Github className="h-4 w-4" />
            <span>
              <span className="font-semibold text-black dark:text-white">
                {loading ? "—" : total}
              </span>{" "}
              contributions in {year}
            </span>
          </a>

          {/* Year selector */}
          <div className="flex gap-1">
            {YEARS.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  year === y
                    ? "bg-brand text-white"
                    : "text-black/50 hover:bg-black/8 dark:text-white/50 dark:hover:bg-white/8"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Graph area */}
        {loading ? (
          <div className="flex h-32 items-center justify-center">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-brand border-t-transparent" />
          </div>
        ) : error ? (
          <div className="flex h-32 items-center justify-center text-sm text-black/40 dark:text-white/40">
            Could not load contribution data.
          </div>
        ) : (
          <ContributionGraph
            data={data}
            year={year}
            showLegend={true}
            showTooltips={true}
          />
        )}
      </motion.div>
    </section>
  );
};

export default GithubContributions;
