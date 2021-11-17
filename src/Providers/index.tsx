import { ReactNode } from "react";
import { CartProvider } from "./Cart";
import { CommentsProvider } from "./Comments";
import { MenuProvider } from "./MenuList";
import { UserProvider } from "./User";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <CommentsProvider>
        <MenuProvider>
          <CartProvider>{children}</CartProvider>
        </MenuProvider>
      </CommentsProvider>
    </UserProvider>
  );
};
