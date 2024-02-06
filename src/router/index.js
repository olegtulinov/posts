import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("../views/Posts.vue"),
    },
    {
      path: "/posts/:id",
      name: "post",
      props: true,
      component: () => import("../views/Post.vue"),
    },
  ],
});

export default router;
