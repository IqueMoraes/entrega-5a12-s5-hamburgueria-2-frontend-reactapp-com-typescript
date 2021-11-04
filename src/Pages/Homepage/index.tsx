import { Header } from "./style";
import { useMenu } from "../../Providers/MenuList";

export const Homepage = () => {
  const { filteredMenuList } = useMenu();

  return (
    <div>
      <Header>
        <h1>Mate</h1>
        <div></div>
      </Header>
      <div>
        <ul>
          {filteredMenuList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
