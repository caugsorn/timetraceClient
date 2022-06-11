import React from "react";
import LogsFilter from "./cards/LogsFilter";
import LogCard from "./cards/Logcard";
import LogPagination from "./cards/LogPagination";

export default function LogContainer() {
  const category = [
    { categoryName: "ja", id: 1 },
    { categoryName: "va", id: 2 },
    { categoryName: "ba", id: 3 },
  ];

  const timeLogs = [
    {
      id: 1,
      category_id: 1,
      createdAt: "2022-05-25 07:25:49",
      endedAt: "2022-05-25 07:25:52",
    },
    {
      id: 1,
      category_id: 1,
      createdAt: "2022-05-25 07:25:49",
      endedAt: "2022-05-25 07:25:52",
    },
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-3 mx-4 pt-20 pb-3 h-5/6 w-11/12">
      <div className="card row-start-1 row-span-3 col-span-1">
        <div className="m-6 ml-6">
          <h3 className="mt-4 mb-1">Filter</h3>
          <ul>
            {category.map((el, idx) => (
              <li  className="list-none flex items-center overflow-auto font-light">
                <i className={`mr-4 fa-regular fa-circle`} />
                {el.categoryName}
              </li>
              // <LogsFilter id={el.id} name={el.name} />
            ))}
          </ul>
        </div>
      </div>
      <div className="card row-start-1 row-span-3 col-start-2 col-span-2">
        <LogCard />
      </div>

      <div className="card row-start-4 col-span-full h-2/5">
        <LogPagination />
      </div>
    </div>
  );
}
