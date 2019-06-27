import React from 'react';

const FilterItem = ({ filter, index }) => {
  const { name, value, checked } = filter;

  function handleClick(index) {
    console.log("Target", index);
  }

  return (
    <li>
      <input type="radio" 
              name="category" 
              value={ value } 
              id={ index } 
              defaultChecked={checked}
              />
      <label htmlFor="filter0"
              onClick={()=> handleClick(index)}
              style={{userSelect: 'none'}}
      >{ name }</label>
    </li>
  );
};

export default FilterItem;
