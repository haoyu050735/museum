function login() {
var username = document.getElementById("username");
var pass = document.getElementById("password");
if (username.value == "") {
alert("請輸入票卡編號");
} else if (pass.value  == "") {
alert("請輸入驗證碼");
} else if(username.value == "01" && pass.value == "0101"){
window.location.href="open1.html";
} else if(username.value == "02" && pass.value == "0202"){
window.location.href="open2.html";
} else if(username.value == "03" && pass.value == "0303"){
window.location.href="open3.html";
} else if(username.value == "04" && pass.value == "0404"){
window.location.href="open4.html";
} else if(username.value == "05" && pass.value == "0404"){
window.location.href="open5.html";
} else if(username.value == "06" && pass.value == "0404"){
window.location.href="open6.html";
} else if(username.value == "07" && pass.value == "0404"){
window.location.href="open7.html";
} else if(username.value == "08" && pass.value == "0404"){
window.location.href="open8.html";
} else if(username.value == "09" && pass.value == "0404"){
window.location.href="open9.html";
} else if(username.value == "10" && pass.value == "0404"){
window.location.href="open10.html";
} else if(username.value == "11" && pass.value == "0404"){
window.location.href="open11.html";
} else if(username.value == "12" && pass.value == "0404"){
window.location.href="open12.html";
} else {
alert("請輸入正確的票卡編號和驗證碼！")
}
}
