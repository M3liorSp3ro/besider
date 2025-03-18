import { DATE_FORMAT_DD_MM_YYYY } from "@shared/consts/format";
import dayjs from "dayjs";
import { INews, TFilteredLatestNews } from "../model/types/news";

export const groupNewsByDate = (newsArray: INews[]) => {
    const groupedNews = Object.values(
        newsArray.reduce((acc, newsItem) => {
            const formattedDate = dayjs(newsItem.pub_date).format(DATE_FORMAT_DD_MM_YYYY);

            if (!acc[formattedDate]) {
                acc[formattedDate] = { date: formattedDate, news: [] };
            }
            acc[formattedDate].news.push(newsItem);
            return acc;
        }, {} as TFilteredLatestNews)
    );

    return groupedNews.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)))
};