import { createRouter, createWebHistory } from "vue-router";
import InformationForm from "../components/InformationForm.vue";
const routes = [
  {
    path: "/",
    name: "InformationForm",
    component: InformationForm,
    children:[
        {
            path: 'form1',
            name: 'FistForm',
            component: () => import('../components/FistForm.vue')
        },
        {
            path: 'form2',
            name: 'SecondForm',
            component: () => import('../components/SecondForm.vue')
        }
    ]
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
