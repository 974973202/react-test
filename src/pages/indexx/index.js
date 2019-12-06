import React, { useEffect, useState, useRef, useCallback } from 'react';

function Counter() {
  // const [count, setCount] = useState(10);
  // const currentCount = useRef(count);

  // useEffect(() => {
  //   console.log('useEffect')
  //   currentCount.current = count;
  // }, []);

  // const log = () => {
  //   setCount(count + 1);
  //   setTimeout(() => {
  //     console.log(currentCount.current);
  //   }, 3000);
  // };

  let [count, setCount] = useState(1);
    let [num, setNum] = useState(1);
    
    const memoized = useCallback( () => {
        return num;
    }, [count])
    console.log("记忆：",memoized());
    console.log("原始：",num);

  return (
    <div>
      {/* <p>You clicked {count} times</p>
      <button onClick={log}>Click me</button>
      <hr></hr> */}
      <button onClick={() => {setCount(count + 1)}}> count+ </button>
      <button onClick={() => {setNum(num + 1)}}> num+ </button>
    </div>
  );
}

export default Counter;