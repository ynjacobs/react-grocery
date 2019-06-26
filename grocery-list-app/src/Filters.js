import React from 'react';
import Filter from './Filter';

const Filters = () => {

    return (

    <ul className="filters">
        <Filter value="all" id="filter0" labelFor="filter0" labelValue="all"/>
        <Filter value="meat" id="filter1" labelFor="filter1" labelValue="meat"/>
        <Filter value="prod" id="filter2" labelFor="filter2" labelValue="prod"/>
        <Filter value="dairy" id="filter3" labelFor="filter3" labelValue="dairy"/>
        <Filter value="bakery" id="filter4" labelFor="filter4" labelValue="bakery"/>
    </ul>


    );
};

export default Filters;