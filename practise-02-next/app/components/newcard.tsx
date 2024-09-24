import React from 'react'
type datatype ={
    [abcd:string]:unique
}
const Newcard = (newprop:datatype) => {
  return (
    <div>
      <h1>Name :{newprop.name}</h1>
      <h1>Age :{newprop.age}</h1>
    </div>
  )
}

export default Newcard
