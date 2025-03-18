import { RootState } from "@app/providers/StoreProvider/store";

export const getAllNewsData = (state: RootState) => state.news.allNewsData;
