const hidden_profile_div = "row d-flex flex-column align-items-center flex-sm-column flex-xxl-row justify-content-xxl-center align-items-xxl-start profile-row visually-hidden";
const visible_profile_div = "row d-flex flex-column align-items-center flex-sm-column flex-xxl-row justify-content-xxl-center align-items-xxl-start profile-row"


class User{
    constructor(userId, username, password, firstname, lastname, email, phone, dob){
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.dob = dob;
    }
    getFullName(){
        return this.lastname + ' ' + this.firstname;
    }
}

window.onload = loadProfileInfo();

function showProfileInfo(){
    document.getElementsByClassName(hidden_profile_div)[0].setAttribute('class', visible_profile_div);
}

function logOut(){
    localStorage.removeItem('profile');
}

function loadProfileInfo(){
    let notLoggedInMessage = "Vui lòng đăng nhập";
    if (localStorage.getItem('profile') == null){
        document.getElementById('profile-fullname').innerHTML = "<a href='login.html'>" + notLoggedInMessage + "</a>";
        document.getElementById('profile-email').innerHTML = notLoggedInMessage;
        document.getElementById('profile-dob').innerHTML = notLoggedInMessage;
        document.getElementsByClassName('row d-flex d-sm-flex flex-row justify-content-start align-items-start flex-sm-row justify-content-sm-start align-items-sm-center flex-md-row justify-content-md-center align-items-md-start flex-lg-row justify-content-lg-center flex-xl-row justify-content-xl-center flex-xxl-row justify-content-xxl-center align-items-xxl-start')[0].setAttribute('class', 'row d-flex d-sm-flex flex-row justify-content-start align-items-start flex-sm-row justify-content-sm-start align-items-sm-center flex-md-row justify-content-md-center align-items-md-start flex-lg-row justify-content-lg-center flex-xl-row justify-content-xl-center flex-xxl-row justify-content-xxl-center align-items-xxl-start visually-hidden');
    }
    else{
        var data = JSON.parse(localStorage.getItem('profile'));
        var user = new User(data.userId, data.username, data.password, data.firstname, data.lastname, data.email, data.phone, data.dob);
        document.getElementById('profile-fullname').innerHTML = user.getFullName();
        document.getElementById('profile-email').innerHTML = user.email;
        document.getElementById('profile-dob').innerHTML = user.dob;
        document.getElementById('input-lastname').setAttribute('value', user.lastname);
        document.getElementById('input-firstname').setAttribute('value', user.firstname);
        document.getElementById('input-email').setAttribute('value', user.email);
    }
}

function logIn(){
    var username = document.getElementById('input-username').value;
    var password = document.getElementById('input-password').value;
    fetch('assets/data/user.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++){
                if ((data[i].email == username || data[i].phone == username) && data[i].password == password){
                    var user = new User(data[i].userId, data[i].username, data[i].password, data[i].firstname, data[i].lastname, data[i].email, data[i].phone, data[i].dob);
                    localStorage.setItem('profile', JSON.stringify(user));
                    window.location.href = "index.html";
                    return;
                }
            }
            alert('Sai tên đăng nhập hoặc mật khẩu');
            document.getElementById('input-username').setAttribute('value', '');
            document.getElementById('input-password').setAttribute('value', '');
            document.getElementById('input-username').focus();
        });
}