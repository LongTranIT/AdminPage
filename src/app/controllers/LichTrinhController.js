const axios = require('axios');
require('dotenv/config')
const apiLink = process.env.RESTFULL_API;

class LichTrinhController {
    // [GET] /LichTrinh
    show(req, res) {
        
    }

    // // [GET] /LichTrinh/:slug
    // detail(req, res) {
    //     LichTrinh.find({ _id: req.params.id })
    //         .populate('id_dia_diem')
    //         .lean()
    //         .then(LichTrinhs => res.json(LichTrinhs))
    //         .catch(err => {
    //             message: err
    //         });
    // }

    // //[POST] /LichTrinh
    // create(req, res) {
    //     const LichTrinh = new LichTrinh(req.body);
    //     LichTrinh.save()
    //         .then(data => {
    //             res.json(data);
    //         })
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // // [PUT] /LichTrinh/:id
    // update(req, res) {
    //     LichTrinh.findByIdAndUpdate(req.params.id, req.body)
    //         .lean()
    //         .then(dataUpdate => res.json(dataUpdate))
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // [DELETE] /LichTrinh/:id
    delete(req, res) {
        axios
            .delete(apiLink + 'lichtrinh/' + req.params.id)
            .then(data => {
                res.redirect('back');
            });
    }
}

module.exports = new LichTrinhController;