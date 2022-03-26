const tourRouter=require('./tour');
const lichTrinhRouter=require('./lichTrinh');
const diaDiemRouter=require('./diaDiem');
const adminRouter=require('./admin');
const huongDanVienRouter=require('./huongDanVien');
const khachHangRouter=require('./khachHang');
const dashBoardRouter=require('./dashBoard');
const thanhToanRouter=require('./thanhToan');
const kyThanhToanRouter=require('./kyThanhToan');
const path=require('path');

function route(app){
    app.use('/tour',tourRouter);
    app.use('/lichtrinh',lichTrinhRouter);
    app.use('/diadiem',diaDiemRouter);
    app.use('/admin',adminRouter);
    app.use('/huongDanVien',huongDanVienRouter);
    app.use('/khachHang',khachHangRouter);
    app.use('/',dashBoardRouter);
    app.use('/thanhtoan',thanhToanRouter);
    app.use('/kyThanhtoan',kyThanhToanRouter);
    app.get('*',(req,res)=>res.render('404'));
}

module.exports=route;