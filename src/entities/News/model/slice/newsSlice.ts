import { fetchNews } from "@entities/News/services/fetchNews";
import { groupNewsByDate } from "@entities/News/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { INewsSchema, IResponseNews } from "../types/news";

const initialState: INewsSchema = {
    isLoading: false,
    allNewsData: [],
    latestNewsData: [],
    filteredLatestNewsData: [],
    currentPageIndex: 0,
    pageSize: 30
};

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        addNextPage: (state) => {
            const startIndex = state.currentPageIndex * state.pageSize;
            const endIndex = startIndex + state.pageSize;
            if (startIndex < state.allNewsData.length) {
                const newNews = state.allNewsData.slice(startIndex, endIndex);

                const latestNews = [...newNews, ...state.latestNewsData]

                state.latestNewsData = latestNews
                state.filteredLatestNewsData = groupNewsByDate(latestNews);
                state.currentPageIndex += 1;
            }
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action: PayloadAction<IResponseNews[]>) => {
                state.isLoading = false;

                const newsData = action.payload.map(news => {
                    return {
                        ...news,
                        multimedia: news.multimedia[0]?.url || ''
                    }
                })

                state.allNewsData = newsData;
                state.latestNewsData = newsData.slice(0, 30)
                state.filteredLatestNewsData = groupNewsByDate(newsData.slice(0, 30).sort((a, b) => dayjs(b.pub_date).diff(dayjs(a.pub_date))));

                state.currentPageIndex = 1
            })
            .addCase(fetchNews.rejected, (state) => {
                state.isLoading = false;
            });
    }
})

export const { actions: newsAction } = newsSlice;
export const { reducer: newsReducer } = newsSlice;