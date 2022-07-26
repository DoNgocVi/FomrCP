import { createRouter, createWebHistory } from "vue-router";
import InformationForm from "../components/InformationForm.vue";
// import store from "../store/index";
const routes = [
  {
    path: "/",
    name: "InformationForm",
    component: InformationForm,
    children: [
      {
        path: "/form1",
        name: "FistForm",
        component: () => import("../components/FistForm.vue"),
        alias: "/",
      },
      {
        path: "form2",
        name: "SecondForm",
        component: () => import("../components/SecondForm.vue"),
        meta: { onlyAuthUser: true },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuth = store.state.isAgree;
//   console.log(isAuth);
//   if (to.meta.onlyAuthUser) {
//     if (isAuth) {
//       next();
//     } else {
//       next({ name: "FistForm" });
//     }
//   }
// });

export default router;
