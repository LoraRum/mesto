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
        };
    }

    getAvatar() {
        return {
            avatar: this._avatarElement.src,
        };
    }

    setUserInfo({ username, about }) {
        this._userNameElement.textContent = username;
        this._aboutElement.textContent = about;
    }

    setAvatar(avatar) {
        this._avatarElement.src = avatar;
    }

    getId() {
        return this._id;
    }

    setId(id) {
        this._id = id;
    }
}

export default UserInfo;
