import BookBasket from "../components/BookBasket/BookBasket";
import HomePage from "../components/HomePage/HomePage";
import Support from "../components/Support/Support";
import Agreement from "../components/Agreement/Agreement";

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
  {
    path: "/support",
    element: Support,
  },
];
