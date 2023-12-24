import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log('Mounting'); // When using React 18, it mounts, unmounts, and re-mounts the component!
    console.log('Users: ', users);

    return () => {
      console.log('Unmounting');
    };
  }, [users]);

  const Increment = useCallback(() => setCount((prev) => prev + 1), []);

  const result = useMemo(() => fib(myNum), [myNum]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button type="button" onClick={Increment}>
        Increment
      </button>
      <h2>Result: {result}</h2>
      <input title="Input" type="text" ref={inputRef} />
    </div>
  );
}

export default App;
