import axios from "axios"

const local = "http://127.0.0.1:8000"
window.localStorage.setItem("user_id","11111111")

export function HttpGet(url,params=null, headers=null) {
    return axios.get(`${local}${url}`,
        {
            params,
            headers,
        }
    )
}

export function HttpPost(url,data=null, headers=null) {
    const userId = window.localStorage.getItem("user_id")

    return axios.post(
        `${local}${url}`,
        data,
        {
            headers:{
                'Content-Type':'application/json',
                'user_id': `${userId}`,
                ...headers
            },
        }
    )
}