function addUsers(email,users){
    if(email.includes("@.com")||email.includes("@.vn")){
        if(users.includes(email)){
            alert("tài khoản đã tồn tại");
            return undefined;
        }
        
        alert("đăng ký thành công");
        return email;
    }
    alert("email không đúng cú pháp");
    return undefined;
}
let users=["1@.com"];
let email=prompt("Mời nhập vào email");
users.push(addUsers(email,users));
console.log(users);