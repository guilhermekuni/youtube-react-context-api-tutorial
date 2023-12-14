import { ProductType } from "../utils/types";

type ProductItemProps = {
  item: ProductType;
  onAddProduct: (product: ProductType) => void;
};

export const ProductItem = ({ item, onAddProduct }: ProductItemProps) => {
  return (
    <tr key={item.id} className="border-b">
      <td className="py-2 px-4">{item.name}</td>
      <td className="py-2 px-4">{item.price}</td>
      <td className="py-2 px-4">
        <button className="btn btn-primary" onClick={() => onAddProduct(item)}>
          Add
        </button>
      </td>
    </tr>
  );
};
