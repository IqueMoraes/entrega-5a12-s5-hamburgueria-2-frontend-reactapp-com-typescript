import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser, Userdata } from "../../Providers/User";
import { useHistory } from "react-router";
import { FormContainer } from "./style";
import { TextField } from "@mui/material";
import { FormsButton } from "../Buttons";

interface FormProps {
  formType: string;
}

const Form = ({ formType }: FormProps) => {
  const { Signup, Signin } = useUser();
  const history = useHistory();
  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome"),
    email: yup
      .string()
      .required("Digite seu e-mail")
      .email("Digite um e-mail válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 dígitos"),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senha diferente"),
  });
  const loginSchema = yup.object().shape({
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
    resolver: yupResolver(formType === "signup" ? formSchema : loginSchema),
  });

  const SubmitSignup = (dataForm: Userdata) => {
    const newUser = {
      name: dataForm.name,
      email: dataForm.email,
      password: dataForm.password,
    };
    Signup(newUser);
  };

  const SubmitSignin = (data: Userdata) => {
Signin(data);
     
    };


  return (
    
    <>
      {formType === "signup" ? (
        <FormContainer onSubmit={handleSubmit(SubmitSignup)}>
          <TextField
            variant="outlined"
            label={"Nome"}
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            variant="outlined"
            label={"E-mail"}
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            variant="outlined"
            label={"Senha"}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            variant="outlined"
            label={"Confirmação de senha"}
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <FormsButton
            children="Cadastrar"
            onClick={() => handleSubmit(SubmitSignup)}
          />
        </FormContainer>
      ) : (
        <FormContainer onSubmit={handleSubmit(SubmitSignin)}>
          <TextField
            variant="outlined"
            label={"E-mail"}
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            variant="outlined"
            label={"Senha"}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <FormsButton
            children="Logar"
            onClick={() => handleSubmit(SubmitSignin)}
          />
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <FormsButton children="Cadastrar" onClick={()=> history.push("/signup")} />
        </FormContainer>

      )}
    </>
  );
};

export { Form };
