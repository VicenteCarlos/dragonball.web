import { Fighters } from "@/pages/Fighters";
import { Home } from "@/pages/Home";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/fighters",
    element: <Fighters />,
  },
];
