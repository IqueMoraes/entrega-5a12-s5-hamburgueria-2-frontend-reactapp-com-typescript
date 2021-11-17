import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../../Services/api";
import { useCart } from "../Cart";

interface UserProviderProps {
  children: ReactNode;
}
interface UserProviderData {
  signIn: (userData: userData) => void;
  signUp: (userData: userData) => void;
  signOut: () => void;
  authToken: string;
  userid: string;
}
export interface userData {
  email: string;
  password: string;
  name?: string;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const history = useHistory();
  const { getCart } = useCart();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@Gastrobar:token") || ""
  );

  const [userid, setUserid] = useState(
    () => localStorage.getItem("@Gastrobar:userId") || ""
  );

  const signIn = (userData: userData) => {
    Api.post("/login", userData)
      .then((response) => {
        localStorage.setItem("@Gastrobar:token", response.data.accessToken);
        localStorage.setItem("@Gastrobar:userId", response.data.user.id);

        setAuthToken(response.data.accessToken);
        setUserid(response.data.user.id);
        getCart();


        history.push("/homepage");
      })
      .catch((err) => console.log(err));


  };

  const signUp = (userData: userData) => {
    Api.post("/signup", userData)
      .then((response) => {
        localStorage.setItem("@Gastrobar:token", response.data.accessToken);
        localStorage.setItem("@Gastrobar:userId", response.data.user.id);

        setAuthToken(response.data.accessToken);
        setUserid(response.data.user.id);

        history.push("/homepage");
      })
      .catch((_) => console.log("Conta cadastrada ou Dados Invalidos"));

    Api.post(
      "/cart",
      { userId: userid, order: [] },
      {
        headers: { Authorization: authToken },
      }
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const signOut = () => {
    localStorage.clear();

    setAuthToken("");
    setUserid("");

    history.push("/");
    console.log("Deslogado com sucesso");
  };

  return (
    <UserContext.Provider
      value={{ signUp, userid, authToken, signOut, signIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
