function standardize(str){
    str=str.toLowerCase().split("/\s+/");
    i=0;
    while(i<str.length){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
        i++;
    }
    return str.join(" ");
}
let str=prompt("Mời nhập chuỗi");
alert(standardize(str));