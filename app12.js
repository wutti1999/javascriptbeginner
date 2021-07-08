let balance = 50000;
let withDraw = 60000;

if (withDraw<=balance){
    //เป็นจริง
    console.log("ค่าดำเนินงานถอนเงิน=",withDraw)
    balance=withDraw
    console.log("ยอดเงินคงเหลือ=",balance);

}else{
    //เป็นเท็จ
    console.log("ยอดเงินของคุณไม่พอ");

}
