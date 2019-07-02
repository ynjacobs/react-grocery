import React, {useState, useRef} from 'react';
import FilterItem from './FilterItem';
import ListItem from './ListItem';

const Filters = ({filters, handleFilter}) => {

 


  const filterElements = filters.map((filter, index) => {
    return <FilterItem key={index} filter={filter} index={index} handleFilter={handleFilter}/>
  })


  return (
    <section id="filterCategories">
      <ul className="filters">
        { filterElements }
      </ul>
      <form id="newCat" className="cat-new">
        <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category"/>
      </form>
    </section>
  );
};

export default Filters;
