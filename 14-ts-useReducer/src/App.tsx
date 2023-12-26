import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </div>
  );
}

export default App;
