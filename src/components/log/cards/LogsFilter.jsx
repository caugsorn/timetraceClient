import { useEffect, useState } from "react";

function LogsFilter({ name, id, setFilterCategory, filterCategory }) {
  const [isChecked, setIsChecked] = useState(true);
  const handleClickForFilter = () => {
    let newFilterCategory;
    setIsChecked(!isChecked);

    newFilterCategory = { ...filterCategory };
    newFilterCategory[name] = !isChecked;
    console.log(`set ${name} to ${isChecked}`);
    setFilterCategory(newFilterCategory);
  };

  return (
    <div className="flex justify-left gap-3">
      <input
        type="checkbox"
        id={id}
        name={`category${id}`}
        value={name}
        defaultChecked
        onClick={() => handleClickForFilter(name)}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default LogsFilter;
