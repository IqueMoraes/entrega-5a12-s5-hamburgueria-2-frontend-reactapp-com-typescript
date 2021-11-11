import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { object } from "yup/lib/locale";
import { Api } from "../../Services/api";
import { useUser } from "../User";

interface Meal {
  title: string;
  category: string;
  meat: string;
  price: number;
  discount: number;
  id: number;
}

interface MenuProps {
  children: ReactNode;
}

interface MenuProviderValues {
  filteredMenuList: Meal[];
  FilterMenu: (word: string) => void;
}



const MenuContext = createContext<MenuProviderValues>({} as MenuProviderValues);

export const MenuProvider = ({ children }: MenuProps) => {
  const [menuList, setMenuList] = useState<Meal[]>([] as Meal[]);
  const [filteredMenuList, setFilteredMenuList] = useState<Meal[]>([] as Meal[]);
  
  useEffect(() => {
    const authToken = JSON.parse(localStorage.getItem("@Gastrobar:token") || "");
    console.log("atualizou o provider menulist");
    Api.get("/meals", { 
      headers: { 
        Authorization: `Bearer ${authToken}` 
      }
    })
      .then((res) => console.log("entrei no /meals", res.data))
      .catch((err) => console.log(err));
  }, []);

  const FilterMenu = (word: string) => {
        setFilteredMenuList(
          menuList.filter(
            (item: Meal) =>
              item.title.includes(word) || item.category.includes(word)
          )
        )
  };

  return (
    <MenuContext.Provider value={{ filteredMenuList, FilterMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
