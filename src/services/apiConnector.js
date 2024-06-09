import axios from 'axios';

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodydata, headers, params) => {
    console.log("BODY DATA.........",bodydata);
    return axiosInstance({
        method: `${method}`,
        url : `${url}`,
        data : bodydata ? bodydata : null,
        headers: headers ? headers : null,
        params: params ? params : null,
    });
}