import { useContext, useState, createContext, PropsWithChildren } from "react";
import { ProductType } from "../utils/types";

export type CartContextType = {
  products: ProductType[];
  handleAddProduct: (product: ProductType) => void;
  handleRemoveProduct: (productId: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleAddProduct = (newProduct: ProductType) => {
    setProducts([...products, newProduct]);
  };

  const handleRemoveProduct = (productId: number) => {
    const updatedProductList = products.filter((item) => item.id !== productId);
    setProducts(updatedProductList);
  };

  return (
    <CartContext.Provider
      value={{ products, handleAddProduct, handleRemoveProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Cart Context should be used within a Provider");
  }

  return cartContext;
};
