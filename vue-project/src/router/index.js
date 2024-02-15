import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/advise",
      name: "advise",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/frequentlyAskedQuestions",
      name: "frequentlyAskedQuestions",
      component: () => import("../views/FrequentlyAskedQuestions.vue"),
    },
    {
      path: "/page-dog-swimming",
      name: "page-dog-swimming",
      component: () => import("../views/All-swimming-courses/Dog-swimming.vue"),
    },
    {
      path: "/backstroke-swimming",
      name: "backstroke-swimming",
      component: () =>
        import("../views/All-swimming-courses/Backstroke-swimming.vue"),
    },
    {
      path: "/freely-swimming",
      name: "freely-swimming",
      component: () =>
        import("../views/All-swimming-courses/Freely-swimming.vue"),
    },
    {
      path: "/breaststroke-swimming",
      name: "breaststroke-swimming",
      component: () =>
        import("../views/All-swimming-courses/Breaststroke-swimming.vue"),
    },
  ],
});

export default router;
