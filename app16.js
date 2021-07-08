let month =-1;
let Name;

if(status = 0){
    Name = ("ทกราคม")

}else if (status==1){
    Name = ("กุมภาพัน์")

}else {
    Name=("มีนา")
}


switch (status){
    case 0: Name=("มกรา")
    break;
    case 1: Name=("กุมภา")
    break;
    default : Name=("มีนา")

} 
console.log(Name);