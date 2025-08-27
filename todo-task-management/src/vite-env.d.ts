/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

declare module "virtual:generated-pages-react" {
  import type { RouteObject } from "react-router-dom";
  const routes: RouteObject[];
  export default routes;
}
