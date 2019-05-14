import axios from 'axios';

export default class ApiService {

    constructor() {
        this.baseUrl = "http://localhost:3001/";
    }

    _setTokenData(tokenData) {
        localStorage.setItem('tokenData', JSON.stringify(tokenData));
    }

    get tokenData() {
        return JSON.parse(localStorage.getItem('tokenData'));
    }

    get headers() {
        let headers = {
            'Content-Type': 'application/json'
        }

        let tokenData = this.tokenData;

        if (tokenData) {
            headers['Authorization'] = `Bearer ${tokenData.token}`
        }

        return headers;
    }

    _createResponse(status, response, isError = false) {
        if (status === 401) {

            localStorage.removeItem('tokenData');

            window.location.href = '/login';

            return {
                status: status,
                isSuccess: false,
                data: [],
                message: 'Unauthorized',
                respondDateTime: new Date(response.respondDateTime)
            }
        }

        if (isError) {
            response = JSON.parse(response);
        }

        return {
            status: response.status,
            isSuccess: response.isSuccess,
            data: response.data,
            message: response.message,
            respondDateTime: new Date(response.respondDateTime)
        };
    }

    get(url) {

        return new Promise((resolve, reject) => {

            axios.get(this.baseUrl + url, { headers: this.headers }).then(response => {
                resolve(this._createResponse(response.request.status, response.data));
            }).catch(err => {
                resolve(this._createResponse(err.request.status, err.request.response, true));
            });
        });
    }

    post(url, request) {
            console.log('Satglk' + request);
            axios.post(this.baseUrl + url, request).then(response => {
                console.log(response);
            })
    }

    put(url, request) {

        return new Promise((resolve, reject) => {

            axios.put(this.baseUrl + url, request, { headers: this.headers }).then(response => {
                resolve(this._createResponse(response.request.status, response.data));
            }).catch(err => {
                resolve(this._createResponse(err.request.status, err.request.response, true));
            });
        });
    }
}