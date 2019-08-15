const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home");
const About = () => import(/* webpackChunkName: "about" */ "@/views/About");
const Blank = () => import(/* webpackChunkName: "blank" */ "@/views/Blank");

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/blank",
    name: "BlankPage",
    component: Blank,
    meta: { layout: "BlankLayout" },
  },
];
