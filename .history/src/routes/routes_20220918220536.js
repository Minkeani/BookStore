import BookBasket from "../components/BookBasket/BookBasket";
import HomePage from "../components/HomePage/HomePage";

export const routes = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/bookBasket",
    element: BookBasket,
  },
  {
    path: "/agreement",
    element: Agreement,
  },
];
