import React from "react";

export default function TotalHours() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-full">
      <h5 className="col-start-1 row-start-1 text-right self-end text-2xl">
        20:32.12
      </h5>
      <h6 className="col-span-full row-start-2  text-right pr-4  whitespace-nowrap">
        hour(s) <br />
        logged this week.
      </h6>
    </div>
  );
}
