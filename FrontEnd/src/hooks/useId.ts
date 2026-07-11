import { createContext, useContext } from "react";

type IdContextType = {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
};

export const IdContext = createContext<IdContextType | null>(null)


export function useId(){
    const context = useContext(IdContext);
    if(!context) throw new Error('failed to retrieve id Context');
    return context;
}