import { BaseQueryFn } from "@reduxjs/toolkit/query/react"
import axios, { AxiosRequestConfig, AxiosError } from "axios"

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method?: AxiosRequestConfig['method']
      body?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
      headers?: AxiosRequestConfig['headers'],
      withCredentials?: AxiosRequestConfig['withCredentials']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, body, params, headers, withCredentials = true }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data: body,
        params,
        headers,
        withCredentials
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      const status = err.response?.status;
      const message = err.response?.data || err.message;
      const error =  {
        status: status,
        data: message,
      }

      return {
        error
      };
    }
  }