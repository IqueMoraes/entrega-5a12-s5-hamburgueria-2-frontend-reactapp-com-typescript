import { MenuList } from "@mui/material"
import { ReactNode } from "react"
import { CartProvider } from "./Cart"
import { CommentsProvider } from "./Comments"
import { UserProvider } from "./User"

interface ProvidersProps {
    children: ReactNode;
}


export const Providers = ({children}:ProvidersProps) => {
    return (
<CartProvider>
    <CommentsProvider>
        <MenuList>
            <UserProvider>
                {children}
            </UserProvider>
        </MenuList>
    </CommentsProvider>
</CartProvider>
        
    )
}