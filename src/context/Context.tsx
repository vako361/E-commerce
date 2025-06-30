import { createContext, useContext, useState, type ReactNode } from "react";


type MenuContextType = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  cart: number;
  setCart: React.Dispatch<React.SetStateAction<number>>;
};


const MenuContext = createContext<MenuContextType | undefined>(undefined);


export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState(false);
 const [cart, setCart] = useState<number>(0)
  return (
    <MenuContext.Provider value={{cart, setCart, menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};


export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
