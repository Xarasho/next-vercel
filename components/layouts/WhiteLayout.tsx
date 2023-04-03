import { FC, PropsWithChildren } from 'react';

export const WhiteLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(233,233,233, 1)',
        color: '#000',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      <h3>White Layout</h3>
      <div>{children}</div>
    </div>
  );
};
