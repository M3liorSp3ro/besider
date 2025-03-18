import { RootState } from "@app/providers/StoreProvider/store";

export const getLatestNewsData = (state: RootState) => state.news.latestNewsData;
