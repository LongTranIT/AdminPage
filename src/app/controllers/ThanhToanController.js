

class ThanhToanController {
    // [GET] /ThanhToan
    show(req, res) {
        res.render('thanhToan/thanhToanTable');
    }

    // [GET] /ThanhToan/:id
    detail(req, res) {
        res.render('thanhToan/kyThanhToanTable');
    }

    // //[POST] /ThanhToan
    // create(req, res) {
    //     const ThanhToan = new ThanhToan(req.body);
    //     ThanhToan.save()
    //         .then(data => {
    //             res.json(data);
    //         })
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // // [PUT] /ThanhToan/:id
    // update(req, res) {
    //     ThanhToan.findByIdAndUpdate(req.params.id, req.body)
    //         .lean()
    //         .then(dataUpdate => res.json(dataUpdate))
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // // [DELETE] /ThanhToan/:id
    // delete(req, res) {
    //     ThanhToan.findByIdAndDelete(req.params.id)
    //         .lean()
    //         .then(dataDelete => res.json(dataDelete))
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }
}

module.exports = new ThanhToanController;