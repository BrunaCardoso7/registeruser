import { ReactNode } from "react";

export const Button: React.FC<{ onClick: () => void; children?: ReactNode}> = ({ onClick, children}) => {
    return <button value={'a'} onClick={onClick}> {children} </button>;
  };
