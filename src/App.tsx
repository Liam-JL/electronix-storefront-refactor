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
import Product from "./pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />
      <Route path="store" element={<Store />} loader={productsLoader} />
      <Route path="store/:id" element={<Product />} loader={productDetailsLoader} />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
