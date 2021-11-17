import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
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

interface Quantity {
  id: number;
  quantity: number;
}

interface CartProps {
  children: ReactNode;
}

interface CartProviderValue {
  cart: Meal[];
  addMeal: (meal: Meal) => void;
  deleteMeal: (meal: Meal) => void;
  increase: (meal: Meal) => void;
  decrease: (meal: Meal) => void;
  getCart: () => void;
}

const CartContext = createContext<CartProviderValue>({} as CartProviderValue);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Meal[]>([]);
  const [quantity, setQuantity] = useState<Quantity[]>([]);
  const { userid, authToken } = useUser();

  const getCart = () => {
    console.log("entrei no getCart provider");
    Api.get(`/cart/${userid}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    })
      .then((res) => {
        // setCart(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCart();
  }, []);

  const changeQuantity = (obj: Meal, operator: number) => {
    const index = quantity.findIndex((item) => item.id === obj.id);
    const newQuantityProduct = {
      id: quantity[index].id,
      quantity: quantity[index].quantity + operator,
    };
    setQuantity(quantity.splice(index, 1, newQuantityProduct));
  };

  const addMeal = (meal: Meal) => {
    if (cart.includes(meal)) {
      changeQuantity(meal, 1);
    } else {
      setCart([...cart, meal].sort((a, b) => a.id - b.id));
      const quantityProduct = {
        id: meal.id,
        quantity: 1,
      };
      setQuantity([...quantity, quantityProduct].sort((a, b) => a.id - b.id));
      const insertQty = [...cart];
      Api.patch(`/cart/${userid}`);
    }
  };

  const deleteMeal = (meal: Meal) => {
    setCart(cart.filter((item) => item.id !== meal.id));
    setQuantity(quantity.filter((item) => item.id !== meal.id));
  };

  const increase = (meal: Meal) => {
    changeQuantity(meal, 1);
  };

  const decrease = (meal: Meal) => {
    changeQuantity(meal, -1);
  };

  return (
    <CartContext.Provider
      value={{ cart, addMeal, deleteMeal, increase, decrease, getCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
