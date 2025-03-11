function prime(num){
    if(Number.isInteger(num)&&num>0){
        let i=2;
        let check=true;
        if(num!==1){
            while(i<num){
                if(num%i===0){
                    check=false;
                    break;
                }
                i++;
            }
        }else{
            check=false;
        }
        if(check){
            return "Là số nguyên tố";
        }else{
            return "Không phải là số nguyên tố";
        }
    }else{
        return "Giá trị không hợp lệ";
    }
}
let num= +prompt("Mời nhập số nguyên dương");
alert(prime(num));