import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const webApi =  createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.binance.com/api/v3/'}),
    tagTypes: ['Post'],
    endpoints: ()=> ({})
})