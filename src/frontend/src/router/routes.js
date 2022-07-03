import Cart from "@/views/Cart";
import Index from "@/views/Index";
import Login from "@/views/Login";
import Orders from "@/views/Orders";
import Profile from "@/views/Profile";
import PageNotFound from "@/views/PageNotFound";

export const routes = [
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/*",
    name: "404",
    component: PageNotFound,
  },
];
