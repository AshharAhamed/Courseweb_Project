const popup = require('popups');

export default class UserService {

    setTokenData(tokenData) {
        localStorage.setItem('tokenData', tokenData);
    }

    get tokenData() {
        return localStorage.getItem('tokenData');
    }

    setUserDetails(LoggedInStatus, Username, Type) {
        if (LoggedInStatus === "Success") {
            localStorage.setItem('LoggedInStatus', true);
            localStorage.setItem('Username', Username);
            alert('Login Successful !');
            if (Type === 'Admin')
                document.location.href = "adminHome.html";
            else if (Type === 'Lecturer')
                document.location.href = "lecturerHome.html";
        } else {
            alert('Invalid Username or Password !');
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
        localStorage.removeItem('tokenData');
    }
}