import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import NewTransfer from "../views/NewTransfer.vue";
import Admin from "../views/Admin.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/new-transfer",
        name: "New Transfer",
        component: NewTransfer,
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
