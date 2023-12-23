// Normal way before React v 18.
// import React from 'react';

// export const Section: React.FC<{ title: string }> = ({ children, title }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </section>
//   );
// };

import { ReactNode } from 'react';

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export const Section = ({
  children,
  title = 'My Subheading',
}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};
