import { BodyHome, DivButton, Header, Ul } from "./style";
import { useMenu } from "../../Providers/MenuList";
import { FaSearch, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { Logo } from "../../Components/Logo";
import { useState } from "react";
import { useUser } from "../../Providers/User";
import { Cards } from "../../Components/Cards";
import { useCart } from "../../Providers/Cart";

export const Homepage = () => {
  const { filteredMenuList, FilterMenu } = useMenu();
  const [inputMenu, setInputMenu] = useState<boolean>(false);
  const { signOut } = useUser();
  const { cart, addMeal, deleteMeal } = useCart();
  console.log(cart);


  return (
    <BodyHome>
      <Header>
        <Logo />
        <DivButton>
          <div onClick={() => setInputMenu(true)}>
            <FaSearch />
          </div>
          <div>
            <FaShoppingCart />
            <h4 className="cart">{cart.length}</h4>
          </div>
          <div>
            <FaSignOutAlt onClick={() => signOut()} />
          </div>
        </DivButton>
      </Header>
      <div>
        <Ul style={{display: "flex", overflow:"auto"}}>
          {filteredMenuList.map((item) => (
            <li key={item.id} ><Cards item={item}/></li>
          ))}
        </Ul>
      </div>
    </BodyHome>
  );
};
