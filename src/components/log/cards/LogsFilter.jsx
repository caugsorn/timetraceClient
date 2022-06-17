import {useEffect, useState} from "react";

function LogsFilter({ name,  id, setFilterCategory, filterCategory}) {
  // useEffect(()=> {
  // setFilterCategory(filterCategory[name]= true) 
  // },[])
  // setFilterCategory(filterCategory[name]='ss')

  const [isChecked, setIsChecked] = useState(true)
  const handleClickForFilter = () => {
    let newFilterCategory;
    setIsChecked(!isChecked)  
  //   if(isClicked) {
  //     newFilterCategory = {...filterCategory}
  //     newFilterCategory[name] = true;
  //     console.log(`set ${name} to true`)
  //     setFilterCategory(newFilterCategory)
  //   }
  //   if(!isClicked) {
  //     newFilterCategory = {...filterCategory}
  //     newFilterCategory[name] = false;
  //     console.log(`set ${name} to false`)
  //     setFilterCategory(newFilterCategory)
  // }
    
      newFilterCategory = {...filterCategory}
      newFilterCategory[name] = !isChecked;
      console.log(`set ${name} to ${isChecked}`)
      setFilterCategory(newFilterCategory)
  }
  
  return ( 
  <div>
    <input type="checkbox" id={id} name={`category${id}`} value={name} defaultChecked onClick={() => handleClickForFilter(name)}/>
    <label htmlFor={name}>{name}</label>
    </div>

  );
}

export default LogsFilter;
