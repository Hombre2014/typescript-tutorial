import { ReactNode } from 'react';

type SimpleCounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: SimpleCounterProps) => {
  return (
    <>
      <h1>{children}</h1>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCount((prev) => prev - 1)}>
        -
      </button>
    </>
  );
};

export default Counter;
