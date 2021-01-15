import Axios from "axios";

export default class RestDataSource {
    constructor(base_url) {
        this.BASE_URL = base_url;
    }

    GetData(method, url, data, callback) {
        this.SendRequest(method, url, data, callback)
    }

    SendRequest(method, url, data, callback) {

        console.log(data);
        Axios.request({
            method: method,
            url: this.BASE_URL + url,
            data: data

        }).then(response => {
            console.log(response.data + ">>>");
            callback(response.data)
        }).catch(error => console.log(error));

    }
}