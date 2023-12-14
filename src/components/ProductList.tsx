import { ProductType } from "../utils/types";
import { ProductItem } from "./ProductItem";

const productsMock: ProductType[] = [
  { id: 1, name: "Product 1", price: 20 },
  { id: 2, name: "Product 2", price: 30 },
  { id: 3, name: "Product 3", price: 10 },
  { id: 4, name: "Product 4", price: 50 },
];

export const ProductList = () => {
  return (
    <table className="w-96 mt-8">
      <tr>
        <th className="py-2 px-4 border-b text-left">Name</th>
        <th className="py-2 px-4 border-b text-left">Price</th>
        <th className="py-2 px-4 border-b text-left">Action</th>
      </tr>
      {productsMock.map((item) => (
        <ProductItem item={item} />
      ))}
    </table>
  );
};
