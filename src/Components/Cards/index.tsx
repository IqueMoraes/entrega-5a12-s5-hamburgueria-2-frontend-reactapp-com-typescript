import { Buttons } from "../Buttons";
import { useCart } from "../../Providers/Cart";

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

   return (
<div>
    <div>image</div>
    <h3>{item.title}</h3>
    <h5>{item.category}</h5>
    <h4>{item.price}</h4>
    <Buttons menuCard medium={false} children="Adicionar" onClick={() => addMeal(item)} />
</div>
   ) 
}