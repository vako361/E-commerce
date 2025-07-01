import { useState, createContext, useContext, Children, type ReactNode } from "react";
const cardContext = createContext<CardContextType | undefined>(undefined);
type CardContextType = {
 cardState: boolean;
 setCardState: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Provider( {children }: {children: ReactNode}){
const [cardState, setCardState ] = useState<boolean>(false)
return(
    <cardContext.Provider value={ { cardState, setCardState} }> 
     {children}
    </cardContext.Provider>
)
}
export const useCard = () => {
 const context =  useContext(cardContext);
 if(!context){
    throw new Error('component must be in provider')
 }
 return context;
}