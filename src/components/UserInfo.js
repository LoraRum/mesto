class UserInfo {
    constructor({userNameSelector, aboutSelector}) {
        this._userNameElement = document.querySelector(userNameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
    }

    getUserInfo() {
        return {
            username: this._userNameElement.textContent,
            about: this._aboutElement.textContent,
        };
    }

    setUserInfo({username, about}) {
        this._userNameElement.textContent = username;
        this._aboutElement.textContent = about;
    }
    getId() {
        return this._id;
    }
    setId(id) {
        this._id = id
    }

}

export default UserInfo;
