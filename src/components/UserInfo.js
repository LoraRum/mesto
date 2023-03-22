class UserInfo {
    constructor({ userNameSelector, aboutSelector, avatarSelector }) {
        this._userNameElement = document.querySelector(userNameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            username: this._userNameElement.textContent,
            about: this._aboutElement.textContent,
            avatarLink: this._avatarElement.src,
        };
    }

    setUserInfo({ username, about, avatarLink }) {
        this._userNameElement.textContent = username;
        this._aboutElement.textContent = about;
        this._avatarElement.src = avatarLink;
    }

    getId() {
        return this._id;
    }

    setId(id) {
        this._id = id;
    }
}

export default UserInfo;
