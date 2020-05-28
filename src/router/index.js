import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import SettingsPage from "../views/SettingsPage.vue";
import JobPostings from "../views/JobPostings.vue";
// import ClientReqComplete from "../views/ClientReqComplete.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/settings",
    name: "SettingsPage",
    component: SettingsPage
  },
  {
    path: "/jobPostings",
    name: "JobPostings",
    component: JobPostings
  },
  // {
  //   path: "/requestsComplete",
  //   name: "ClientReqComplete",
  //   component: ClientReqComplete
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
