import * as React from "react";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  itemCount: number;
  img: any;
}

interface CartContextProp {
  itemCount: number;
  updateItemCount: (count: number) => void;
  // updateCart: (id: number, name: string, price: any, itemCount: number) => void;
  updateCart: ({ id, name, price, itemCount, img }: CartItemProps) => void;
  cartItems: CartItemProps[];
  deleteItem: (id: number) => void;
  toggleCheckout: () => void;
  isCheckoutOpen: boolean;
}

export const CartCountContext = React.createContext<CartContextProp>({
  itemCount: 0,
  updateItemCount() {},
  updateCart() {},
  cartItems: [],
  deleteItem() {},
  toggleCheckout() {},
  isCheckoutOpen: false,
});

const CartProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [itemCount, setItemCount] = React.useState<number>(0);

  const [cartItems, setCartItems] = React.useState<CartItemProps[] | []>([]);

  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState<boolean>(false);

  const toggleCheckout = () => {
    setIsCheckoutOpen((prev) => !prev);
  };

  console.log(isCheckoutOpen);

  const updateItemCount = (count: number) => {
    setItemCount(count);
  };

  // const updateCart = (
  //   id: number,
  //   name: string,
  //   price: any,
  //   itemCount: number
  // ) => {
  //   const existingCartItem = cartItems.find((cartItem) => cartItem.id === id);

  //   if(existingCartItem){
  //     return cartItems.map((cartItem) => cartItem.id === id? setCartItems([{{...cartItem, itemCount }}]): cartItem)
  //   }

  //   return setCartItems([{id, price, itemCount, name}]);

  //   console.log(name, price, id);
  // };

  // const updateValue = () => {

  // }

  const updateCart = ({ id, name, price, itemCount, img }: CartItemProps) => {
    setCartItems([{ id, name, price, itemCount, img }]);
  };

  const deleteItem = (id: number) => {
    const existingCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== id
    );

    setCartItems(existingCartItems);
  };

  return (
    <CartCountContext.Provider
      value={{
        itemCount,
        updateItemCount,
        updateCart,
        cartItems,
        deleteItem,
        toggleCheckout,
        isCheckoutOpen,
      }}
    >
      {children}
    </CartCountContext.Provider>
  );
};

export default CartProvider;
