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

//check if window title is "Profile - The Weekdays" or "Wishlist - The Weekdays" then loadProfileInfo()
if (document.title == "Profile - The Weekdays" || document.title == "Wishlist - The Weekdays"){
    window.onload = loadProfileInfo();
}

function showProfileInfo(){
    document.getElementsByClassName(hidden_profile_div)[0].setAttribute('class', visible_profile_div);
}

function logOut(){
    localStorage.removeItem('profile');
}

function initUserStorage(){
    //Load user data from json file
    if (localStorage.getItem('userStorage') == null){
        fetch('assets/data/user.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('userStorage', JSON.stringify(data));
            });
    }
}

function loadProfileInfo(){
    initUserStorage();
    //Load profile info
    let notLoggedInMessage = "Vui lòng đăng nhập";
    if (localStorage.getItem('profile') == null){
        document.getElementById('profile-fullname').innerHTML = "<a href='login.html'>" + notLoggedInMessage + "</a>";
        document.getElementById('profile-email').innerHTML = notLoggedInMessage;
        document.getElementById('profile-dob').innerHTML = notLoggedInMessage;
        if (document.title == "Profile - The Weekdays"){
            document.getElementsByClassName('row d-flex d-sm-flex flex-row justify-content-start align-items-start flex-sm-row justify-content-sm-start align-items-sm-center flex-md-row justify-content-md-center align-items-md-start flex-lg-row justify-content-lg-center flex-xl-row justify-content-xl-center flex-xxl-row justify-content-xxl-center align-items-xxl-start')[0].setAttribute('class', 'row d-flex d-sm-flex flex-row justify-content-start align-items-start flex-sm-row justify-content-sm-start align-items-sm-center flex-md-row justify-content-md-center align-items-md-start flex-lg-row justify-content-lg-center flex-xl-row justify-content-xl-center flex-xxl-row justify-content-xxl-center align-items-xxl-start visually-hidden');
        }
        else if(document.title == "Wishlist - The Weekdays"){
            document.getElementById('wishlist-section').setAttribute('class', 'visually-hidden');
        }
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
    initUserStorage();
    var username = document.getElementById('input-username').value;
    var password = document.getElementById('input-password').value;
    //load user data from json array in localStorage with key 'userStorage'
    var data = JSON.parse(localStorage.getItem('userStorage'));
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
}

function signUp(){
    initUserStorage();
    var firstname = document.getElementById('input-fullname').value;
    var password = document.getElementById('input-password').value;
    var confirmPassword = document.getElementById('input-confirm-password').value;
    var email = document.getElementById('input-email').value;
    var phone = "0909123454";
    var dob = "01/01/2000";
    if (password != confirmPassword){
        alert('Mật khẩu không khớp');
        document.getElementById('input-password').setAttribute('value', '');
        document.getElementById('input-confirm-password').setAttribute('value', '');
        document.getElementById('input-password').focus();
        return;
    }
    var data = JSON.parse(localStorage.getItem('userStorage'));
    for (let i = 0; i < data.length; i++){
        if (data[i].email == email){
            alert('Email đã được đăng ký');
            document.getElementById('input-email').setAttribute('value', '');
            document.getElementById('input-password').setAttribute('value', '');
            document.getElementById('input-confirm-password').setAttribute('value', '');
            document.getElementById('input-email').focus();
            return;
        }
    }

    var user = new User(1, email, password, firstname, "", email, phone, dob);
    data.push(user);
    localStorage.setItem('userStorage', JSON.stringify(data));
    alert('Đăng ký thành công');
    window.location.href = "login.html";
}

function saveChangeProfileInfo(){
    //load old user object from profile
    var data = JSON.parse(localStorage.getItem('profile'));
    var user = new User(data.userId, data.username, data.password, data.firstname, data.lastname, data.email, data.phone, data.dob);
    //get new user info
    var lastname = document.getElementById('input-lastname').value;
    var firstname = document.getElementById('input-firstname').value;
    var email = document.getElementById('input-email').value;
    var password = document.getElementById('input-password').value;
    var confirmPassword = document.getElementById('input-confirm-password').value;
    //check if password and confirm password are the same
    if (password != confirmPassword){
        alert('Mật khẩu không khớp');
        document.getElementById('input-password').setAttribute('value', '');
        document.getElementById('input-confirm-password').setAttribute('value', '');
        document.getElementById('input-password').focus();
        return;
    }
    //delete old user in userStorage
    var dataStorage = JSON.parse(localStorage.getItem('userStorage'));
    for (let i = 0; i < dataStorage.length; i++){
        if (dataStorage[i].email == user.email){
            dataStorage.splice(i, 1);
            break;
        }
    }
    //update info of user
    user.lastname = lastname;
    user.firstname = firstname;
    user.email = email;
    if(password != ""){
        user.password = password;
    }
    //add new user to userStorage
    dataStorage.push(user);
    localStorage.setItem('userStorage', JSON.stringify(dataStorage));
    //save new user to profile
    localStorage.setItem('profile', JSON.stringify(user));
    alert('Lưu thành công');
    window.location.href = "profile.html";
}

function forgotPassword(){
    initUserStorage();
    var email = document.getElementById('input-email').value;
    var data = JSON.parse(localStorage.getItem('userStorage'));
    for (let i = 0; i < data.length; i++){
        if (data[i].email == email){
            alert('Kiểm tra email' + email + ' để lấy lại mật khẩu!');
            window.location.href = "login.html";
            return;
        }
    }
    alert('Email không tồn tại');
    document.getElementById('input-email').setAttribute('value', "");
    document.getElementById('input-email').focus();
}