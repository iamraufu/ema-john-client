import React from 'react';
import fakeData from '../../fakeData';
const Inventory = () => {
      const handleClick =()=>{
            fetch('http://localhost:5000/addProduct',{
                  method:"POST",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(fakeData)
            })
            .then(res=>res.json())
      };
      return (
            <div>
                  <button onClick={handleClick}>Click to add All Data</button>
            </div>
      );
};

export default Inventory;