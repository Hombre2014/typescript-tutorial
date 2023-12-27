import Counter from './Counter';
import { CounterProvider } from './context/CounterContext';
import { initState } from './context/CounterContext';

function App() {
  return (
    <div className="App">
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </div>
  );
}

export default App;
