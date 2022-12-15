const hidden_profile_div = "row d-flex flex-column align-items-center flex-sm-column flex-xxl-row justify-content-xxl-center align-items-xxl-start profile-row visually-hidden";
const visible_profile_div = "row d-flex flex-column align-items-center flex-sm-column flex-xxl-row justify-content-xxl-center align-items-xxl-start profile-row"

function showProfileInfo(){
    document.getElementsByClassName(hidden_profile_div)[0].setAttribute('class', visible_profile_div);
}