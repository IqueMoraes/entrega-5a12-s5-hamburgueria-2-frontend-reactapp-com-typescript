import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../../Services/api";

interface Userdata {
  name: string;
  email: string;
  password: string;
}

interface UserProps {
    children: ReactNode;
}

interface UserProviderValues {
  authToken: string;
  Signup: (userdata: Userdata) => void;
  Signin: (userdata: Userdata) => void;
  Signout: () => void;
}

const UserContext = createContext<UserProviderValues>({} as UserProviderValues);

export const UserProvider = ({ children }: UserProps) => {
  const history = useHistory();
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const Signup = (userdata: Userdata) => {
    Api.post("/signup", userdata)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data)
        setAuthToken(res.data.token);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const Signin = (userdata: Userdata) => {
    Api.post("/signin", userdata)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setAuthToken(res.data.token);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const Signout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/login");
  };

  return (
      <UserContext.Provider value={{authToken, Signup, Signin, Signout}}>
          {children}
      </UserContext.Provider>
  )
};


export const useUser = () => useContext(UserContext);