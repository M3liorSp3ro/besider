import { DATE_FORMAT_FOR_NEWS } from "@shared/consts/format"
import { NYTImagesStorage } from "@shared/consts/links"
import { Flex } from "antd"
import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
import { FC } from "react"
import { INewsItemProps } from "../types"
import { truncateText } from "../utils"
import cls from './NewsItems.module.scss'

dayjs.extend(advancedFormat);

export const NewsItem: FC<INewsItemProps> = ({ newsItem }) => {

    const goToNYT = () => {
        window.open('https://www.nytimes.com', '_blank')
    }

    return (
        <Flex
            className={cls.newsItemContainer}
            gap={12}
            onClick={goToNYT}
        >

            <Flex
                vertical
                gap={8}
            >
                <div />
                {
                    newsItem.multimedia
                        ?
                        <div className={cls.newsImgContainer}>
                            <img
                                className={cls.newsImg}
                                src={`${NYTImagesStorage}/${newsItem.multimedia}`}
                            />
                        </div>

                        : <div className={cls.emptyBlock} />
                }

            </Flex>

            <Flex
                className={cls.newsContentContainer}
                vertical
                gap={8}
            >
                <span className={cls.source}>
                    {newsItem.source}
                </span>
                <span className={cls.abstract}>
                    {truncateText(newsItem.abstract)}
                </span>
                <span className={cls.date}>
                    {dayjs(newsItem.pub_date).format(DATE_FORMAT_FOR_NEWS)}
                </span>
            </Flex>

        </Flex>
    )
}
