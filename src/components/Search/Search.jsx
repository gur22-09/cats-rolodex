import React from 'react';

export const Search =({placeholder,handleChange})=>{
    return(
        <div className='search'>
          <input type='search' placeholder={placeholder} onChange={handleChange} />
        </div>
        
    )
}