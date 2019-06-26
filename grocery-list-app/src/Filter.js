import React from 'react';

const Filter = ({value, id, labelFor, labelValue}) => {

    return (
        
        <li>
            <input type="radio" name="category" value={value} id={id} />
            <label for={labelFor}>{labelValue}</label>
        </li>

    );
};

export default Filter;