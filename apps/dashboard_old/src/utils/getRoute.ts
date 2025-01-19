export const getRoute = (route: string, pathname: string) => {
  const isTestnet = pathname.startsWith("/test");
  return isTestnet ? `/test${route}` : route;
};

