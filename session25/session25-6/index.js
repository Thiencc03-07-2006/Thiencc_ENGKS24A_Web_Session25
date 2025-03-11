function symmetrical(str){
    let i=0;
    let check=true;
    while(i<Math.floor(str.length/2)){
        if(str[i]!==str[str.length-i-1]){
            check=false;
            break;
        }
        i++;
    }
    if(check){
        return "Là chuỗi đối xứng";
    }else{
        return "Không phải chuỗi đối xứng";
    }
}
let str=prompt("Mời nhập chuỗi");
alert(symmetrical(str));