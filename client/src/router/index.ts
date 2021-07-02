import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Password from "../views/Password.vue";
import Panel from "../views/Panel.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reset-password",
    name: "Password",
    component: Password,
  },
  {
    path: "/panel",
    name: "Panel",
    component: Panel,
  },

];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
