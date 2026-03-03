import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { productsLoader } from "./pages/loaders/product.loader";

//Pages
import RootLayout from "./pages/RootLayout";
import Landing from "./pages/Landing";
import Store from "./pages/Store";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />} />
      <Route path="store" element={<Store />} loader={productsLoader} />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
