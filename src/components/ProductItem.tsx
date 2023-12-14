import { ProductType } from "../utils/types";
import { useCartContext } from "../contexts/CartContext";

type ProductItemProps = {
  item: ProductType;
};

export const ProductItem = ({ item }: ProductItemProps) => {
  const { handleAddProduct } = useCartContext();

  return (
    <tr key={item.id} className="border-b">
      <td className="py-2 px-4">{item.name}</td>
      <td className="py-2 px-4">{item.price}</td>
      <td className="py-2 px-4">
        <button
          className="btn btn-primary"
          onClick={() => handleAddProduct(item)}
        >
          Add
        </button>
      </td>
    </tr>
  );
};
