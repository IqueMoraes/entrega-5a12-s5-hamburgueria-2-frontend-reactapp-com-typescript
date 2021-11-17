import { FiShoppingBag } from "react-icons/fi";
import { GrayDots } from "../../Components/GrayDots";
import { Logo } from "../../Components/Logo";
import {
  BagContainer,
  Body,
  LogoContainer,
  RegisterForm,
} from "../Signup/style";
import { Form } from "../../Components/Form";

export const SignIn = () => {

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
