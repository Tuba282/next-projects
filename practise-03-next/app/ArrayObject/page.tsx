import React from 'react'

function ArrayObject() {
    const myArray: { id: number; name: string }[] = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ];
  return (
    <div>
      <ul>
        {myArray.map(element=>(
            <li key={element.id}>{element.name} {element.id}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArrayObject
