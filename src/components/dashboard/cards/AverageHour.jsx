import React from "react";

export default function AverageHour() {
  return (
    // <div className="h-full w-full flex flex-col justify-around postion-relative">
    //   <h5 className="ml-12 text-3xl pt-8">23%</h5>
    //   <h6 className="self-end text-right pr-4 pb-4 whitespace-nowrap position-absolute">
    //     increase <br />
    //     from average.
    //   </h6>
    // </div>
    <div className="grid grid-cols-2 grid-rows-2 h-full">
      <h5 className="col-start-1 row-start-1 text-right self-end text-2xl">
        23%
      </h5>
      <h6 className="col-span-full row start-2  text-right pr-4  whitespace-nowrap">
        increase <br />
        from average.
      </h6>
    </div>
  );
}
