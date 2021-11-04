import { useState } from "react"
import { SearchButton, SearchContainer, StyledSearchInput } from "./style"
import { useMenu } from "../../Providers/MenuList";
//importar icone de lupa


export const SearchInput = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const { FilterMenu } = useMenu();

    const InputChanger = (param:string) => {
        setSearchValue(param);
        FilterMenu(searchValue)
    }



    return (
        <SearchContainer>
        <StyledSearchInput placeholder={"Digitar pesquisa"}  onChange={(e)=> InputChanger(e.target.value)}/>
        <SearchButton >S</SearchButton>
        </SearchContainer>
    )
}