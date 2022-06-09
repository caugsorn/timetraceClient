import React from "react";

export default function ReportSummary() {
  return (
    <div className="flex flex-col gap-5 text-justify">
      <div>
        <h1 className="text-5xl font-bold tracking-decentlyWide">
          Hello, Jessica
        </h1>
        <p className="font-light tracking-decentlyWide">
          Here’s your overview report!
        </p>
      </div>
      <div className="font-light tracking-decentlyWide">
        You have worked for a total of
        <span> 20:01.14 </span>
        hour(s) this week! Your weekly log is <span>23%</span> more than your
        average of <span>19:12.53</span> hour(s).
      </div>
      <div className="font-light tracking-decentlyWide">
        It appears that you have logged most of your hours for{" "}
        <span>Database</span>, which accounted for
        <span> 64%</span> of the chart, following by <span>Bookclub (23%)</span>
        , and <span> Marketing(10%)</span>.
      </div>
    </div>
  );
}
