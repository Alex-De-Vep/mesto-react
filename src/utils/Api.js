class Api {
    baseUrl;
    headers;
    avatar;

    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }

        return res.json();
    }

    updateAvatar(data, method) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method,
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }

    toggleLike(method, cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            method,
            headers: this.headers,
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }

    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.headers,
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }

    addCard(data, method) {
        return fetch(`${this.baseUrl}/cards`, {
            method,
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }

    getCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers,
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }

    updateUserInfo(data, method) {
        return fetch(`${this.baseUrl}/users/me`, {
            method,
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers,
        })
            .then(res => {
                return this._getResponseData(res);
            });
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
    headers: {
        authorization: '70a5e760-58dc-4dc4-9be2-5d986802ee28',
        'Content-Type': 'application/json'
    }
});

export default api;
