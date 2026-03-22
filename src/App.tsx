import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { productsLoader } from "./pages/loaders/product.loader";
import { productDetailsLoader } from "./pages/loaders/productDetails.loader";

//Pages
import RootLayout from "./pages/RootLayout";
import Landing from "./pages/Landing";
import Store from "./pages/Store";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./contexts/CartContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />
      <Route path="store" element={<Store />} loader={productsLoader} />
      <Route path="cart" element={<Cart />} loader={productsLoader} />
      <Route
        path="store/:id"
        element={<ProductDetails />}
        loader={productDetailsLoader}
      />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
