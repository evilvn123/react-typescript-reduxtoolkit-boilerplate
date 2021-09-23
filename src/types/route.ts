type Path = {
  path: string;
  component: React.FC;
};
export type Route = {
  path: string;
  component: React.FC;
  routes?: Array<Path>;
};
