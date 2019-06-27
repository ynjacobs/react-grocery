import React from 'react';
import FilterItem from './FilterItem';

const Filters = ({ filters }) => {




  // const selectFilter = (e) => {
  //   e.preventDefault();

  //   console.log("Selected:", e.target)
  // }

  const filterElements = filters.map((filter, i) => {
    return <FilterItem key={i} index={i} filter={ filter }/>
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
