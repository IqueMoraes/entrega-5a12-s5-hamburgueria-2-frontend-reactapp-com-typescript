import { GrayDots } from "../../Components/GrayDots";
import { Logo } from "../../Components/Logo";
import { BagContainer, Body, LogoContainer, RegisterForm } from "./style";
import { FiShoppingBag } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Form } from "../../Components/Form";

export const SignUp = () => {
    const history = useHistory();

    return(
        <Body>
        <LogoContainer>
           <Logo/>
           <BagContainer>
               <div><FiShoppingBag/></div>
               <p>A vida é como um sandúiche, é preciso recheá-la com os  <span>melhores</span> ingredientes.</p>
            </BagContainer>
           <GrayDots/>
        </LogoContainer>
        <RegisterForm>
            <h3>Cadastro</h3>
            <h5 onClick={() => history.push('/signin')}>Retornar para o login</h5>
            <Form formType={"signup"}/>

        </RegisterForm>
        </Body>
    )
}