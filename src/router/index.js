import Vue from "vue";
import VueRouter from "vue-router";
import FirstPage from "../components/FirstPage";
import Edit from "../components/Edit";
import Notifications from "../components/Notifications";
import Items from "../components/Items";
import Profile from "../components/Profile";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import FirstPageUser from "../components/FirstPageUser";
import Reserved from "../components/Reserved";
import Practice from "../components/Practice";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: FirstPage
  },
  {
    path: "/header",
    name: "header",
    component: Header
  },
  {
    path: "/notifications",
    name: "notifications",
    component: Notifications,
    meta: {
      tokenRequired: false
    }
  },
  {
    path: "/item",
    name: "item",
    component: Items,
    meta: {
      tokenRequired: false
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      tokenRequired: false
    }
  },
  {
    path: "/edit",
    name: "edit",
    component: Edit,
    meta: {
      tokenRequired: false
    }
    // component: () =>
    // import(/* webpackChunkName: "about" */ "../components/Edit.vue")

  },
  {
    path: "/user",
    name: "homeuser",
    component: FirstPageUser
  },
  {
    path: "/headeruser",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/mainpage",
    name: "mainpage",
    component: MainPage,
    meta: {
      tokenRequired: false
    }
  },
  {
    path: "/practice",
    name: "practice",
    component: Practice,
    meta: {
      tokenRequired: false
    }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    meta: {
      tokenRequired: true
    }

  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
    meta: {
      tokenRequired: false
    }
  },
  {
    path: "/reserved",
    name: "reserved",
    component: Reserved,
    meta: {
      tokenRequired: false
    }
    // component: () =>
    // import(/* webpackChunkName: "about" */ "../components/Reserved.vue")

  },

  {
    path:"*",
    redirect:{
      path:"/"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
