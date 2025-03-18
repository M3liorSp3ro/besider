export interface IResponseNews {
    abstract: string
    web_url: string
    multimedia: { url: string }[]
    pub_date: string
    source: string
}

export interface INews {
    abstract: string
    web_url: string
    multimedia: string
    pub_date: string
    source: string
}

export type TFilteredNewsData = { date: string; news: INews[] }

export type TFilteredLatestNews = Record<string, TFilteredNewsData>

export interface INewsSchema {
    isLoading: boolean;
    allNewsData: INews[];
    latestNewsData: INews[];
    filteredLatestNewsData: TFilteredNewsData[];
    currentPageIndex: number
    pageSize: number
}