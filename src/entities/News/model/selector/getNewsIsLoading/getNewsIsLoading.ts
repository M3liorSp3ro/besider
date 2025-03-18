import { RootState } from "@app/providers/StoreProvider/store";

export const getNewsIsLoading = (state: RootState) => state.news.isLoading;
