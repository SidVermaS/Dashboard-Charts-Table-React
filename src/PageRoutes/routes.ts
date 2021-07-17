import { Home, Login, Orders } from "../components/pages";
import { RouteI } from "../interfaces";
enum path {
  Home = "/",
  Orders = "/orders",
  Login = "/login",
}

const unsecuredRoutes: Array<RouteI> = [
  {
    path: path.Login,
    component: Login,
  },
];
const securedRoutes: Array<RouteI> = [
  {
    path: path.Home,
    component: Home,
  },
  {
    path: path.Orders,
    component: Orders,
  },
];

export { path, unsecuredRoutes, securedRoutes };
