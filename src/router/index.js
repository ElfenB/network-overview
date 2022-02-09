import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/../../src/views/Home.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/../../src/views/NotFound.vue"),
    name: "NotFound",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
