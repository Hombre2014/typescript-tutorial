import Heading from './components/Heading';
import { Section } from './components/Section';
import Counter from './components/Counter';
import { useState } from 'react';
import List from './components/List';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading title={'Hello World'} />
      <Section title={'Section title'}>This is my section</Section>
      <Counter setCount={setCount}>Count is: {count}</Counter>
      <List
        items={['☕ Coffee', '🌮 Tacos', '💻 Code']}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
