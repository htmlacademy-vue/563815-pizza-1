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
    meta: {
      layout: "BasicLayout",
      title: "Корзина",
    },
  },
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: {
      layout: "BasicLayout",
      title: "Конструктор пиццы",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      layout: "BasicLayout",
      title: "Логин",
    },
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    meta: {
      layout: "BasicLayout",
      title: "Заказы",
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      layout: "BasicLayout",
      title: "Профиль",
    },
  },
  {
    path: "/*",
    name: "404",
    component: PageNotFound,
    meta: {
      layout: "BasicLayout",
      title: "Страница не найдена",
    },
  },
];
