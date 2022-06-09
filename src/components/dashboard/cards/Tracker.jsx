import React from "react";

export default function Tracker() {
  return (
    <>
      <h3 className="p-6 ">Tracking</h3>
      <div className="flex flex-col items-center justify-center h-3/5">
        <div>
          <h5 className="text-silver text-xs  text-center tracking-widest font-semibold">
            I'm working on.....
          </h5>
          <h2 className="text-3xl tracking-decentlyWide">00:08.15</h2>
        </div>
        <button>
          <i className="fa-solid fa-play playButtonTracking" />
        </button>
      </div>
    </>
  );
}
