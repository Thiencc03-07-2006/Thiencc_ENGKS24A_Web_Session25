const formVnd=money=>money.toLocaleString('vi', {style : 'currency', currency : 'VND'});
function showItem(arr){
    let i=0;
    let str="";
    while(i<arr.length){
        str=str+"Tên: "+arr[i][0]+"\n   Số lượng tồn kho: "+arr[i][1]+"\n   Giá tiền: "+formVnd(arr[i][2])+"\n";
        i++;
    }
    return str;
}
function addItem(item,arr){
    let name=prompt("Mời nhập tên sản phẩm");
    if(item.find(p=>p[0]===name)){
        if(item[item.findIndex(p=>p[0]===name)][1]>0){
            if(arr.find(p=>p[0]===name)){
                item[item.findIndex(p=>p[0]===name)][1]--;
                arr[arr.findIndex(p=>p[0]===name)][1]++
                return arr;
            }
            item[item.findIndex(p=>p[0]===name)][1]--;
            arr.push([name,1,item[item.findIndex(p=>p[0]===name)][2]]);
            return arr;
        }
        alert("Hết hàng");
        return arr;
    }
    alert("Không tìm thấy sản phẩm");
    return arr;
}
function totalPrice(arr){
    let i=0;
    let str="Hóa đơn\n";
    let total=0;
    while(i<arr.length){
        str=str+"Tên: "+arr[i][0]+"\n   Số lượng: "+arr[i][1]+"\n   Giá tiền: "+formVnd(arr[i][2])+"\n";
        total+=arr[i][1]*arr[i][2];
        i++;
    }
    str=str+"Tổng tiền "+formVnd(total);
    return str;
}
let choose;
let products= [ ["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]];
let cart=[];
do{
    choose= +prompt("1. Xem danh sách sản phẩm có sẵn trong cửa hàng.\n2. Chọn sản phẩm để mua bằng cách nhập tên sản phẩm\n3. Tính tổng tiền và hiển thị hóa đơn.\n4. Thoát");
    switch(choose){
        case 1:
            alert(showItem(products));
            break;
        case 2:
            cart=addItem(products,cart);
            break;
        case 3:
            alert(totalPrice(cart));
            break;
    }
} while(choose!==4);