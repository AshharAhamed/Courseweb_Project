const popup = require('popups');

export default class UserService {

    setUserDetails(LoggedInStatus, Username, AdminStatus) {
        if (LoggedInStatus === "Success") {
            localStorage.setItem('LoggedInStatus', true);
            localStorage.setItem('Username', Username);
            localStorage.setItem('AdminStatus', AdminStatus);
            popup.alert({
                content: 'Login Successfull!'
            });
            document.location.href = "adminHome.html"
        } else {
            popup.alert({
                content: 'Login Failed!'
            });
            localStorage.setItem('LoggedInStatus', false);
        }
    }

    get isLoggedIn() {
        return (localStorage.getItem('LoggedInStatus') === 'true') ? true : false;
    }

    get username() {
        if (this.isLoggedIn) {
            return localStorage.getItem('Username');
        } else {
            return 'Invalid';
        }
    }

    get isAdmin() {
        if (this.isLoggedIn) {
            return (localStorage.getItem('AdminStatus') === 'true') ? true : false;
        } else {
            return 'Invalid';
        }
    }

    logout() {
        localStorage.removeItem('LoggedInStatus');
        localStorage.removeItem('Username');
        localStorage.removeItem('AdminStatus');
        window.location.href = '/';
    }
}