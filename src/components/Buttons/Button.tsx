import { ReactNode } from "react";

export const Button: React.FC<{ onClick: () => void; children?: ReactNode}> = ({ onClick, children}) => {
    return <button 
              className="bg-slate-500 px-5 rounded-xl text-gray-100" 
              value={'a'} 
              onClick={onClick}
            > 
              {children} 
            </button>;
  };
