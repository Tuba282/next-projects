// pages/index.tsx
import React from 'react';
import Newcard from './components/newcard';

let arr=['a',2,'l',5]
// const kids: Kid[] = [
//   { name: 'Alice', age: 10 },
//   { name: 'Bob', age: 9 },
//   { name: 'Charlie', age: 8 },
//   { name: 'David', age: 7 },
//   { name: 'Eva', age: 6 },
//   { name: 'Frank', age: 5 },
//   { name: 'Grace', age: 4 },
//   { name: 'Hannah', age: 3 },
//   { name: 'Ian', age: 2 },
//   { name: 'Jack', age: 1 },
// ];

const HomePage = () => {
  return (
    <div>
      {/* {kids.map((child, index) => (
        <Card key={index} kid={child} />
      ))} */}
    
    {/* {newcardkids.map((kid,index)=>{ */}
      <Newcard name=' Ali' age />
      {/* <Newcard   /> */}
    {/* // })} key = {index} newprop = {kid} */}


    </div>
  );
};

export default HomePage;
