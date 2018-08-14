import Vue from "vue";

const AppLayout = () => import(/* webpackChunkName: "layout" */ "./AppLayout");

// Register layout components globally
Vue.component("app-layout", AppLayout);
