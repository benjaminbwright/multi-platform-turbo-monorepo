import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  title: string;
}

export const Card = ({ children, title  }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
