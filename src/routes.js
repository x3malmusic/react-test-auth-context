import Login from "./pages/Login";
import Main from "./pages/Main";

import { withGuard } from "./RouteGuard";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Login
  },
  {
    path: "/app",
    component: withGuard(Main),
  },
];

export default routes;