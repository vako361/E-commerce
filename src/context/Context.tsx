import { createContext, useContext, useState, type ReactNode } from "react";


type MenuContextType = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  cart: number;
  setCart: React.Dispatch<React.SetStateAction<number>>;
  img: boolean;
  setImg: React.Dispatch<React.SetStateAction<boolean>>
}


const MenuContext = createContext<MenuContextType | undefined>(undefined);


export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState<number>(0)
  const [img, setImg] = useState<boolean>(false) 
  return (
    <MenuContext.Provider value={{cart, setCart, menu, setMenu, img, setImg }}>
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
