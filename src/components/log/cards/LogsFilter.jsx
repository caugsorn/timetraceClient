import {useState} from "react";

function LogsFilter({ name,  id}) {
  const [isClicked, setIsClicked] = useState(false)
  const handleClickForFilter = () => {
    setIsClicked(!isClicked)  
  }

  return (
    
    <li className="flex justify-start gap-3">
      <button onClick={() => handleClickForFilter}>
        {isClicked ? 
        <i className={`far fa-check-circle`}/>
        :<i className={`fa-regular fa-circle`} />
        }
      </button>
      {name}
    </li>
  );
}

export default LogsFilter;
