function even(arr){
    if(arr.length>0){
        let check=true;
        let i=0;
        let arrEven=[]
        while(i<arr.length){
            if(arr[i]%2===0){
                arrEven.push(arr[i]);
            }
            if(typeof(arr[i])!=='number'){
                check=false;
                break;
            }
            i++;
        }
        if(check){
            if(arrEven.length>0){
                return arrEven;
            }else{
                return "Mảng không chứa số chẵn";
            }
        }else{
            return "Giá trị không hợp lệ";
        }
    }else{
        return "Mảng không chứa phần tử";
    }
}
let arr=[1,2,3,4,5,6,7,8,9,10];
alert(even(arr));