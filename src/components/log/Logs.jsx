import React from "react";

export default function Logs() {
  return (
    <div className="w-11/12 h-[56px] bg-[#F1F0F9] rounded-2xl overflow-hidden flex items-center justify-between">
      <div className="h-full flex flex-row items-center ">
        <div className="w-20 h-full flex items-center justify-center bg-purple">
          <i className="fa fa-play playButtonLog align-middle" />
        </div>
        <div className="flex flex-col pl-2">
          <h2 className="text-purple text-semibold">Ui ux design project</h2>
          <h6 className="text-xs ">08:00-12 - 12:11.23</h6>
        </div>
      </div>
      <div className="">
        <h5 className="pr-3">00:08.15</h5>
      </div>
    </div>
  );
}
