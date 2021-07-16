import { Home, Login,Orders } from "../components/pages";

enum path {
  Home = "/",
  Orders ='/orders',
  Login = "/login",
}
interface RouteTemplate {
  path: string;
  component: any;
}
const unsecuredRoutes: RouteTemplate[] = [
  {
    path: path.Login,
    component: Login,
  },
];
const securedRoutes: RouteTemplate[] = [
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
