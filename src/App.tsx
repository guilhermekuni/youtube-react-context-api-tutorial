import { ProductList } from "./components/ProductList";
import { CartModal } from "./components/CartModal";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <div className="p-8">
        <section className="flex flex-row">
          <h1 className="text-violet-800">Products</h1>
          <div className="ml-8">
            <CartModal />
          </div>
        </section>
        <ProductList />
      </div>
    </CartContextProvider>
  );
}

export default App;
