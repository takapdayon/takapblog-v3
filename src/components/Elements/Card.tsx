import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <div className="mb-auto w-full p-6 bg-white border border-slate-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
};
