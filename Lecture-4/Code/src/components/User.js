import { useState } from "react";

const User = ({ name, location, component }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div>
      <h4>Name :{name}</h4>
      <p>Count: {count}</p>
      <p>Count1 : {count1}</p>
      <p> Location:{location}</p>
      <p>Component:{component}</p>
    </div>
  );
};

export default User;
