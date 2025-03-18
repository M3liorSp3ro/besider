import { NewsItem } from "@features/NewsItem"
import { Flex } from "antd"
import { FC } from "react"
import { INewsListProps } from "../types"
import cls from './NewsList.module.scss'

export const NewsList: FC<INewsListProps> = ({ newsData }) => {
    return (
        <div>
            <div className={cls.date}>
                News for {newsData.date}
            </div>

            <Flex
                vertical
                gap={16}
            >
                {
                    newsData.news.map((newsItem, i) => {
                        return (
                            <NewsItem key={i} newsItem={newsItem} />
                        )
                    })
                }
            </Flex>

        </div>
    )
}
