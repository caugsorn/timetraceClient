import {useState, useEffect} from "react";

function Priority() {
  const [priority, setPriority] = useState(0)
  const handleChange = e => {
    const { value } = e.target;

    setPriority({value})
    console.log({priority})
  }


  function setColor(value) {
return (`${(value)>priority? "text-silver": "text-purple"}`)
  }


  return (
    <div className="fire">
      <button onClick={()=> setPriority(1)}>
        <i className={`fa-solid fa-fire ${setColor(1)}`}/>
      {/* </label> */}
      </button>

    <button  onClick={()=> setPriority(2)}>
        <i  className={`fa-solid fa-fire ${setColor(2)}`}/>
      </button>

    <button onClick={()=> setPriority(3)}>
        <i  className={`fa-solid fa-fire ${setColor(3)}`} />
      </button>

      <button  onClick={()=> setPriority(4)}>
        <i  className={`fa-solid fa-fire ${setColor(4)}`} />
      </button>

    <button onClick={()=> setPriority(5)}>
        <i  className={`fa-solid fa-fire ${setColor(5)}`}/>
      </button>
    </div>
  );
}

export default Priority;
