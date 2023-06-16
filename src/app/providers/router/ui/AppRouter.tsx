import { Suspense, memo, useCallback } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";

function AppRouter() {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<div>Загрузка...</div>}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}

export default memo(AppRouter);
