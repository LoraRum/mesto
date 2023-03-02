class UserAvatar {
    constructor({avatarSelector}) {
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserAvatar() {
        return {
            link: this._avatarElement.src
        };
    }

    setUserAvatar({link}) {
        this._avatarElement.src = link;
    }
}

export default UserAvatar;
