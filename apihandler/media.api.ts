import { IMedia } from '@/interfaces/media.interface';
import axios from 'axios'
// Create an Axios instance for API requests
const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SEVER_API_URL,
    timeout: 120000,
})

interface IGetRes {
    error: boolean,
    data?: IMedia[],
    message?: string
}

interface IAddRes {
    error: boolean,
    data?: IMedia,
    message?: string
}

const getEvent = async (media: IMedia): Promise<IAddRes> => {
    const res = await apiClient.post('me/add-me', media)
    const { data } = res;
    if (data.success) {
        return {error: false, data: data.data, message: "success"};
    }
    return {error: true, message: data.message};
}


const getData = async (): Promise<IGetRes> => {
    const res = await apiClient.get('me/get-me')
    const { data } = res;
    if (data.success) {
        return {error: false, data: data.data, message: "success"};
    }
    return {error: true, message: data.message};
}

export { getEvent, getData }