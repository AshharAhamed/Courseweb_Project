const popup = require('popups');

export default class UserService {

    setUserDetails(LoggedInStatus, Username, Type) {
        if (LoggedInStatus === "Success") {
            localStorage.setItem('LoggedInStatus', true);
            localStorage.setItem('Username', Username);
            popup.alert({
                content: 'Login Successfull!'
            });
            if (Type === 'Admin')
                document.location.href = "adminHome.html";
            else if (Type === 'Lecturer')
                document.location.href = "lecturerHome.html";
        } else {
            popup.alert({
                content: 'Login Failed!'
            });
            localStorage.setItem('LoggedInStatus', false);
            document.location.href = "login.html";
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

    logout() {
        localStorage.removeItem('LoggedInStatus');
        localStorage.removeItem('Username');
    }
}