import React, {useRef} from 'react';

const FilterItem = ({ filter, index, handleFilter }) => {
  const { name, value, checked } = filter;

  const catagoryRef = useRef()

  const selectFilter = (index) => {
    catagoryRef.current.checked = true
    console.log("CatagoryRef:", catagoryRef.current,'----', index)
    
    handleFilter(index);
  }


  return (
    <li onClick={()=> selectFilter(index)}
    >
      <input type="radio" 
              name="category" 
              value={ value } 
              id={ index } 
              ref={catagoryRef}
              />
      <label htmlFor="filter0"
              style={{userSelect: 'none'}}
      >{ name }</label>
    </li>
  );
};

export default FilterItem;
