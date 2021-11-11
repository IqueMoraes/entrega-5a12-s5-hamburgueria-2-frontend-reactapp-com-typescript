import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../../Services/api";

export interface Userdata {
  name: string;
  email?: string;
  password: string;
}

interface UserProps {
  children: ReactNode;
}

interface UserProviderValues {
  // auth: boolean;
  // setAuth: any;
  Signup: (userdata: Userdata) => void;
  Signin: (userdata: Userdata) => void;
  Signout: () => void;
}

const UserContext = createContext<UserProviderValues>({} as UserProviderValues);

export const UserProvider = ({ children }: UserProps) => {
  const history = useHistory();
  // const [auth, setAuth] = useState<boolean>(false);

  

  const Signup = (userdata: Userdata) => {
    Api.post("/users/signup", userdata)
      .then((res) => {
        localStorage.setItem("@Gastrobar:token", JSON.stringify(res.data.accessToken));
        localStorage.setItem("@Gastrobar:user", JSON.stringify(res.data.user));
        // setAuth(true);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const Signin = (userdata: Userdata) =>  {
    console.log("nao faz nada")
    Api.post("users/signin", userdata)
      .then((res) => { 
        const token = res.data.accessToken;
        const user = res.data.user;
        localStorage.setItem("@Gastrobar:token", JSON.stringify(token));
        localStorage.setItem("@Gastrobar:user", JSON.stringify(user));
        // setAuth(true);
        // console.log("é o authtoken", auth);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const Signout = () => {
    localStorage.clear();
    // setAuth(false);
    history.push("/signin");
  };

  return (
    <UserContext.Provider value={{  Signup, Signin, Signout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
