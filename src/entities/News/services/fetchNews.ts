import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@shared/config/api";
import { EEndpoints } from "@shared/types/endpoints";

export const fetchNews = createAsyncThunk(
    "matches/fetchNews",
    async () => {
        const res = await api.get(EEndpoints.ARCHIVE_2023_06, {
            params: {
                'api-key': import.meta.env.VITE_API_KEY,
                limit: 100
            }
        });

        return res.data.response.docs;
    }
);