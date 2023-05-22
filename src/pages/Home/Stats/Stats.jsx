import { useEffect } from "react";
import CountUp from "react-countup";

const Stats = () => {
  useEffect(() => {
    // Trigger the counting animation on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-20">
      <h2 className="text-3xl text-center mb-8" style={{ color: "#5B5F8E" }}>
        Toyland Insights
      </h2>
      <div className="flex justify-center my-6">
        <div className="stats shadow-lg bg-white rounded-lg p-6 space-y-6">
          <div className="stat space-y-2">
            <div className="stat-figure text-[#5B5F8E]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Purchases</div>
            <div className="stat-value text-[#5B5F8E]">
              <CountUp end={2600} duration={2} separator="," />
            </div>
            <div className="stat-desc">12% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-[#F078B1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Customer Rating</div>
            <div className="stat-value text-[#F078B1]">
              <CountUp end={4.8} duration={2} decimals={1} />
            </div>
            <div className="stat-desc">97% positive feedback</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-value">
              <CountUp end={10000} duration={2} separator="," />
              +
            </div>
            <div className="stat-title">Toys Variety</div>
            <div className="stat-desc text-[#F078B1]">50+ categories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
