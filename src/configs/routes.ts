import { Route } from "src/types/route";
import { ROUTES } from "src/configs/constants";
import Pets from "src/features/pet/pages";
export const routes: Array<Route> = [
  {
    path: ROUTES.pet,
    component: Pets,
  },
  {
    path: ROUTES.pet,
    component: Pets,
    routes: [
      {
        path: ROUTES.pet,
        component: Pets,
      },
      {
        path: ROUTES.pet,
        component: Pets,
      },
    ],
  },
];
