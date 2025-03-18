export { getFilteredLatestNewsData, getLatestNewsData, getNewsIsLoading } from './model/selector'
export { newsAction, newsReducer } from './model/slice/newsSlice'
export type { INews, TFilteredNewsData } from './model/types/news'
export { fetchNews } from './services/fetchNews'

