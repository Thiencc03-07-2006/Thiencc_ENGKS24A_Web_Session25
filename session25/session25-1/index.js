function min(arr){
    if(arr.length>0){
        let check=true;
        let i=0;
        while(i<arr.length){
            if(typeof(arr[i])!=='number'){
                check=false;
                break;
            }
            i++;
        }
        if(check){
            return "Phần tử nhỏ nhất trong mảng là "+Math.min(...arr);
        }else{
            return "Giá trị không hợp lệ";
        }
    }else{
        return "Mảng không chứa phần tử";
    }
}
let arr=[5,2,7,5,4];
alert(min(arr));