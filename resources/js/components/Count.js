import React, { useEffect, useState } from 'react';

const Count = (props) => {

  const [counts, setCount] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 10
  ])



  return(
    <select name={props.name} onChange={props.onChange}>
      {counts.map((count)=> <option key={count.id} value={count}>{count}</option>)}
    </select>
  );
}

export default Count;