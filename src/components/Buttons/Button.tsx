interface ButtonTitle {
  title: string
}

export const Button: React.FC<ButtonTitle> = ( { title} ) => {
    return <button 
              className="bg-slate-500 px-5 rounded-xl text-gray-100" 
              value={'a'} 
            > 
              {title} 
            </button>;
  };
