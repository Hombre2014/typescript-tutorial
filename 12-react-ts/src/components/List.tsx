import { ReactNode } from 'react';

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

// When uses generics like <T>, TS does not recognize the props. The fix is to add a ","
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
