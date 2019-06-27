import React, {useState, useRef} from 'react';
import FilterItem from './FilterItem';
import ListItem from './ListItem';

const Filters = () => {

  const initialFilters = [
    { name: 'All', value: 'all'},
    { name: 'Meat', value: 'meat' },
    { name: 'Produce', value: 'prod' },
    { name: 'Dairy', value: 'dairy' },
    { name: 'Bakery', value: 'bakery' },
  ];

  const [filters, setFilters] = useState(initialFilters);


  const filterElements = filters.map((filter, index) => {
    return <FilterItem filter={filter} />
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
