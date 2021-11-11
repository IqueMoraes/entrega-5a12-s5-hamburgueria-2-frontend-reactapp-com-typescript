import { FiShoppingBag } from "react-icons/fi";
import { GrayDots } from "../../Components/GrayDots";
import { Logo } from "../../Components/Logo";
import {
  BagContainer,
  Body,
  LogoContainer,
  RegisterForm,
} from "../Signup/style";
import { useUser } from "../../Providers/User";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Form } from "../../Components/Form";

export const SignIn = () => {
  const { Signin } = useUser();

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Digite seu e-mail")
      .email("Digite um e-mail válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 dígitos"),
    
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();


  return (
    <Body>
      <RegisterForm>
        <h3>Login</h3>
       
        <Form formType="signin" />
        
      </RegisterForm>
      <LogoContainer>
        <Logo />
        <BagContainer>
          <div>
            <FiShoppingBag />
          </div>
          <p>
            A vida é como um sandúiche, é preciso recheá-la com os{" "}
            <span>melhores</span> ingredientes.
          </p>
        </BagContainer>
        <GrayDots />
      </LogoContainer>
    </Body>
  );
};
