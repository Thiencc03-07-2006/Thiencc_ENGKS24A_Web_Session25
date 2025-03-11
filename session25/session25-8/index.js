function isStrongPassword(password){
    if(password.length<8){
        return false;
    }
    let i=0;
    let check=[];
    while(i<password.length){
        if(password[i]>='A'&&password[i]<='Z'){
            check[0]=true;
        }
        if(password[i]>='a'&&password[i]<='z'){
            check[1]=(true);
        }
        if(password[i]>='0'&&password[i]<='9'){
            check[2]=(true);
        }
        if(check[0]==true&&check[1]==true&&check[2]==true){
            return true;
        }
        i++;
    }
    return false;
}
let password=prompt("Mời nhập mật khẩu");
alert(isStrongPassword(password));
location.reload();