import  axios from "axios";

const instance = axios.create({
    withCredentials: true
})

export const mainAPI = {
    getResult() {
        return instance.get(`../data/listKhajit.json` )
    }
}
