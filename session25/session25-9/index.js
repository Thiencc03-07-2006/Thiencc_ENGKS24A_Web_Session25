function addUsers(email,users){
    if(email.includes("@.com")||email.includes("@.vn")){
        if(users.includes(email)){
            alert("tài khoản đã tồn tại");
            return false;
        }
        
        alert("đăng ký thành công");
        return true;
    }
    alert("email không đúng cú pháp");
    return false;
}
let users=["1@.com"];
let email=prompt("Mời nhập vào email");
if(addUsers(email,users)){
    users.push(email);
}
console.log(users);