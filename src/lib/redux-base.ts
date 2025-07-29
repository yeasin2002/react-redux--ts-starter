import { BASE_API_URL } from "@/utils/env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RootState {
  auth?: {
    accessToken?: string;
  };
}

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_API_URL}/api/`,

  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth?.accessToken || null;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    } else {
      const authData = JSON.parse(localStorage.getItem("auth")!);
      if (authData?.access) {
        headers.set("authorization", `Bearer ${authData.access}`);
      }
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["user"],
  endpoints: () => ({}),
});
