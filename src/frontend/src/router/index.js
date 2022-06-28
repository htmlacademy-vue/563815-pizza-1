import Vue from "vue";
import VueRouter from "vue-router";
import Cart from "../views/Cart.vue";
import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import Orders from "../views/Orders.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
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
];

const router = new VueRouter({
  routes,
});

export default router;
