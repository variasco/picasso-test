import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { postReducer } from "entities/Post";
import { userReducer } from "entities/User";
import { postDetailsReducer } from "pages/PostDetailsPage";
import { $api } from "shared/api/api";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    post: postReducer,
    user: userReducer,
    postDetails: postDetailsReducer,
  };

  const store = configureStore({
    reducer: rootReducer as ReducersMapObject<StateSchema>,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }),
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
