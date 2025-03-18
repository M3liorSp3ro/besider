import { fetchNews, getFilteredLatestNewsData, getNewsIsLoading, newsAction } from "@entities/News";
import { PayloadAction } from "@reduxjs/toolkit";
import { CustomThunkDispatch } from "@shared/types/generalTypes";
import { Loader } from "@shared/ui/Loader";
import { NewsList } from "@widgets/NewsList";
import { Flex } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const NewsPage = () => {


    const dispatchThunk: CustomThunkDispatch<PayloadAction> = useDispatch();

    const news = useSelector(getFilteredLatestNewsData)
    const isLoading = useSelector(getNewsIsLoading)

    useEffect(() => {
        dispatchThunk(fetchNews())

        const intervalId = setInterval(() => {

            dispatchThunk(newsAction.setIsLoading(true));

            setTimeout(() => {
                dispatchThunk(newsAction.addNextPage());
                dispatchThunk(newsAction.setIsLoading(false));
            }, 2000);
        }, 30000); // 30 секунд

        return () => clearInterval(intervalId);
    }, [dispatchThunk])

    return (
        <>
            <Flex
                justify="center"
                align="center"
            >
                {isLoading && <Loader />}
            </Flex>


            {
                news.map((item, i) => {
                    return (
                        <NewsList
                            key={i}
                            newsData={item}
                        />
                    )
                })
            }

        </>
    )
}
