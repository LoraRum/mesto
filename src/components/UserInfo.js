class UserInfo {
    constructor({userNameSelector, aboutSelector}) {
        this._userNameElement = document.querySelector(userNameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
    }

    getUserInfo() {
        return {
            username: this._userNameElement.textContent, about: this._aboutElement.textContent,
        };
    }

    setUserInfo({username, about}) {
        this._userNameElement.textContent = username;
        this._aboutElement.textContent = about;
    }
}

export default UserInfo;
