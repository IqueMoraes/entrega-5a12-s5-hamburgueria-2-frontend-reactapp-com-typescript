import { DivButton, Header } from "./style";
import { useMenu } from "../../Providers/MenuList";
import { FaSearch, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { Logo } from "../../Components/Logo";
import { useState } from "react";
import { useUser } from "../../Providers/User";

export const Homepage = () => {
  const { filteredMenuList } = useMenu();
  const [inputMenu, setInputMenu] = useState<boolean>(false);
  const { Signout } = useUser();
  console.log(filteredMenuList);

  return (
    <div>
      <Header>
        <Logo />
        <DivButton>
          <div onClick={() => setInputMenu(true)}>
            <FaSearch />
          </div>
          <div>
            <FaShoppingCart />
            <h4 className="cart">0</h4>
          </div>
          <div>
            <FaSignOutAlt onClick={()=> Signout()}/>
          </div>
        </DivButton>
      </Header>
      <div>
        {/* <ul>
          {filteredMenuList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};
