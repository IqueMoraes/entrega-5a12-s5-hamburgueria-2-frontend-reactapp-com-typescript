import { Buttons } from "../Buttons";
import { useCart } from "../../Providers/Cart";
import { CardContainer } from "./style";

interface CardsProps {
    item:{
        title: string;
        category: string;
        meat: string;
        price: number;
        discount: number;
        id: number;}
}

export const Cards = ({item}:CardsProps) => {
    const { addMeal } = useCart();

    const CategoryTranslate = (category:string) => {
        if(category === "food") return "Refeição";
        else if ( category === "drinks") return "Bebida";
        else return "Sem categoria";


    }

   return (
<CardContainer>
    <div className="image"></div>
    <div className="content">
    <h3>{item.title}</h3>
    <h5>{CategoryTranslate(item.category)}</h5>
    <p className="price">R$ {item.price}</p>
    <Buttons menuCard medium={false} children="Adicionar" onClick={() => addMeal(item)} />
    </div>
</CardContainer>
   ) 
}