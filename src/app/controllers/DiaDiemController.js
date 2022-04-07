const axios = require('axios');
require('dotenv/config')
const apiLink = process.env.RESTFULL_API;
class DiaDiemController {

    // [GET] /diadiem
    show(req, res) {
        axios
            .get(apiLink + "diadiem")
            .then(data => {
                // handle success
                res.render('diaDiem/diaDiemCard', { apiLink, diadiems: data.data })

            })
            .catch(err => console.log(err))
    }

    // [GET] /diadiem/:slug
    detail(req, res) {
        axios
            .get(apiLink+'diadiem/' + req.params.slug)
            .then(data => {
                // handle success
                data.data.mo_ta = data.data.mo_ta.replace(/(?:\r\n|\r|\n)/g, '<br>');
                res.render('diaDiem/diaDiemdetail', {apiLink, diadiem: data.data })

            })
            .catch(err => console.log(err))
    }
    // [GET] /diadiem/addForm
    addForm(req, res) {
        res.render('diaDiem/addForm')
    }
    // [GET] /diadiem/updateForm
    updateForm(req, res) {
        axios
            .get(apiLink+'diadiem/' + req.params.slug)
            .then(data => {
                // handle success
                res.render('diaDiem/updateForm', {apiLink, diadiem: data.data })
            })
            .catch(err => console.log(err))
    }

    //[POST] /diadiem
    create(req, res) {
        console.log(req.body);
    }

    // // [PUT] /diadiem/:id
    // update(req,res){
    //     DiaDiem.findByIdAndUpdate(req.params.id,req.body)
    //         .lean()
    //         .then(dataUpdate=>res.json(dataUpdate))
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // [DELETE] /diadiem/:id
    delete(req,res){
        axios
            .delete(apiLink+'diadiem/'+req.params.id)
            .then(data=>{
                res.redirect('/diadiem');
            });
    }
}

module.exports = new DiaDiemController;