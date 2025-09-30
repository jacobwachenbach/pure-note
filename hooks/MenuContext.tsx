// MenuContext.tsx
import React, { createContext, ReactNode, useContext, useState } from "react";

// 1. Define the "shape" of our context.
//    In this case, we want to share two things globally:
//    - `menu`: a boolean (true/false)
//    - `setMenu`: a function that updates `menu`
type MenuContextType = {
  menu: boolean;
  setMenu: (value: boolean) => void;
};

// 2. Create the context itself.
//    We start with `undefined` because it will be filled in by the provider.
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// 3. Create a provider component that will wrap the app.
//    It stores the actual state (menu, setMenu) and makes it available to all children.
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  // useState holds the global value of `menu` (default = true).
  const [menu, setMenu] = useState(true);

  // Return a Provider component that passes `menu` and `setMenu` down to the tree.
  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children} {/* All screens/components inside will be able to access `menu` */}
    </MenuContext.Provider>
  );
};

// 4. Create a custom hook for easy usage.
//    Instead of writing `useContext(MenuContext)` everywhere,
//    you can just call `useMenu()`.
export const useMenu = () => {
  const context = useContext(MenuContext);

  // If someone tries to use this hook outside of MenuProvider,
  // throw an error (so they know they must wrap the app with MenuProvider).
  if (!context) {
    throw new Error("useMenu must be used inside a MenuProvider");
  }

  // Return { menu, setMenu } to the component.
  return context;
};
