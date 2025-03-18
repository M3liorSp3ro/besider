import { RootState } from "@app/providers/StoreProvider/store";

export const getFilteredLatestNewsData = (state: RootState) => state.news.filteredLatestNewsData;
