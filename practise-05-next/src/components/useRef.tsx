import { useRef, useState } from 'react';

function TextInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>()

  const focusInput = () => {
    if (inputRef.current) {
      setText(inputRef.current.value)
      inputRef.current.focus();
    }
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <p>{text}</p>
      <button onClick={focusInput}>Show Input</button>
    </div>
  );
}

export default TextInput;


// import { useRef, useState } from 'react';

// const MyComponent = () => {
//   const countRef = useRef(0);
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     countRef.current += 1;
//     setCount(countRef.current); // Update state to trigger re-render
//   };

//   return (
//     <div>
//       <button
//         onClick={() => {
//           countRef.current -= 1;
//           setCount(countRef.current)
//         }}
//       >Deccrement Count</button>
//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Increment Count</button>
//     </div>
//   );
// };

// export default MyComponent;
