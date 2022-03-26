

class DiaDiemController {
    // [GET] /diadiem
    show(req, res) {
        res.render('diaDiem/diaDiemCard');
    }
    
    // [GET] /diadiem/:slug
    detail(req, res) {
        res.render('diaDiem/diaDiemDetail')
    }
    // [GET] /diadiem/addForm
    addForm(req, res) {
        res.render('diaDiem/addForm')
    }
    // [GET] /diadiem/updateForm
    updateForm(req, res) {
        res.render('diaDiem/updateForm')
    }

    // //[POST] /diadiem
    // create(req, res) {
    //     const diaDiem = new DiaDiem(req.body);
    //     diaDiem.save()
    //         .then(data => {
    //             res.json(data);
    //         })
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

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

    // // [DELETE] /diadiem/:id
    // delete(req,res){
    //     DiaDiem.findByIdAndDelete(req.params.id)
    //         .lean()
    //         .then(dataDelete=>res.json(dataDelete))
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }
}

module.exports = new DiaDiemController;