function total(firstNum,secondNum){
    if(Number.isInteger(firstNum)&&Number.isInteger(secondNum)){
        return firstNum+secondNum;
    }else{
        return "Dữ liệu không hợp lệ";
    }
}
let firstNum= +prompt("Mời nhập số nguyên thứ nhất");
let secondNum= +prompt("Mời nhập số nguyên thứ hai");
alert(total(firstNum,secondNum));