import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Api } from "../../Services/api";

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
  const authToken = () => localStorage.getItem("token") || "";

  useEffect(() => {
    Api.get("/meals", { headers: { Authorization: `Bearer ${authToken}` } })
      .then((res) => setMenuList(res.data))
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
