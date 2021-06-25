import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Password from "../views/Password.vue";
import Vote from "../views/Vote.vue";

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
		path: "/vote",
		name: "Vote",
		component: Vote,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
