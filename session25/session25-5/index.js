function positive(arr){
    let i=0;
    let count=0;
    while(i<arr.length){
        if(arr[i]>0&&Number.isInteger(arr[i])){
            count++;
        }
        i++;
    }
    if(count){
        return count;
    }else{
        return "Không có số nguyên dương trong mảng";
    }
}
let n= +prompt("Mời nhập số lượng phần tử");
if(Number.isInteger(n)&&n>0){
    let arr=[];
    let i=0
    while(i<n){
        arr[i]= +prompt("Mời nhập số thứ "+(i+1));
        if(typeof(arr[i])!=='number'){
            alert("Giá trị không hợp lệ");
        }else{
            i++;
        }
    }
    alert(positive(arr));
}else{
    alert("Giá trị không hợp lệ");
}