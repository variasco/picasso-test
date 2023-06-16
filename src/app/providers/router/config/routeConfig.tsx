import { PostDetailsPage } from "pages/PostDetailsPage";
import { PostsPage } from "pages/PostsPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  POST_DETAILS = "post_details",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.POST_DETAILS]: "/post/",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RoutePath.main, element: <PostsPage /> },
  [AppRoutes.POST_DETAILS]: { path: `${RoutePath.post_details}:id`, element: <PostDetailsPage /> },
};
