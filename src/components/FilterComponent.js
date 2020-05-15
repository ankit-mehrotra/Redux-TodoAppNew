import React, { useState } from 'react';

const FilterComponent = () => {
    const[filter,setFilter] = useState('SHOW_ALL');
    const filterList = ['SHOW_ALL','SHOW_COMPLETED','SHOW_INCOMPLETE'];
    return (
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
           { filterList.map(fil =><option key={fil} value={fil}>{fil}</option>)}
        </select>
    )
}

export default FilterComponent;