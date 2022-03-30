import { webApi } from '../services/webApi'

const myapi = webApi.injectEndpoints({
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => ({ url: `/time` }),
      providesTags: (result, error) => [{ type: 'Post' }],
    }),
  }),
})

export const {useGetPostQuery} = myapi
