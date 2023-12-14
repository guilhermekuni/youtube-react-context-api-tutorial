import { useState } from "react";
import { ProductType } from "../utils/types";

type CartModalProps = {
  products: ProductType[];
  onRemoveProduct: (productId: number) => void;
};

export const CartModal = ({ products, onRemoveProduct }: CartModalProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const itemCount = products.length;
  const hasItems = itemCount > 0;

  return (
    <>
      <button
        className="btn mt-2"
        disabled={!hasItems}
        onClick={() => setModalOpen(true)}
      >
        Cart
        {hasItems && <div className="badge badge-secondary">+{itemCount}</div>}
      </button>
      {modalOpen && (
        <dialog id="my_modal_1" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Cart</h3>
            <ul className="w-full mt-2">
              {products.map((item) => (
                <li
                  key={item.id}
                  className="p-2 bg-blue-50 mb-2 rounded-md flex flex-row justify-between"
                >
                  {item.name} - ${item.price}
                  <button
                    className="btn btn-circle text-red-500"
                    onClick={() => onRemoveProduct(item.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <div className="modal-action">
              <button className="btn btn-primary">Finish</button>
              <button
                className="btn btn-ghost"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};
