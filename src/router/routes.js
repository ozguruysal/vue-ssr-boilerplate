const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home");
const About = () => import(/* webpackChunkName: "about" */ "@/views/About");

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
];
