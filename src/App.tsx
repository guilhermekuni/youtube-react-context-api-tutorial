import { useState } from "react";

import { ProductList } from "./components/ProductList";
import { CartModal } from "./components/CartModal";
import { ProductType } from "./utils/types";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleAddProduct = (newProduct: ProductType) => {
    setProducts([...products, newProduct]);
  };

  const handleRemoveProduct = (productId: number) => {
    const updatedProductList = products.filter((item) => item.id !== productId);
    setProducts(updatedProductList);
  };

  return (
    <div className="p-8">
      <section className="flex flex-row">
        <h1 className="text-violet-800">Products</h1>
        <div className="ml-8">
          <CartModal
            products={products}
            onRemoveProduct={handleRemoveProduct}
          />
        </div>
      </section>
      <ProductList onAddProduct={handleAddProduct} />
    </div>
  );
}

export default App;
