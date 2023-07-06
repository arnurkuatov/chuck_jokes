import {BaseQueryFn} from '@reduxjs/toolkit/query'
import {AxiosError, AxiosRequestConfig} from 'axios'
import axios from "axios";

export const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: ''},
  ): BaseQueryFn<AxiosRequestConfig, unknown, unknown> =>
  async ({url, method, data, params}) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      })
      return {data: result.data}
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err,
          data: err,
        },
      }
    }
  }
