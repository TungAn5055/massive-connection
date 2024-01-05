import axiosInstance from "@/services/axiosInstance.ts";

export const loginWithHeader = () => {
    return axiosInstance.get('api/login/')
}
