const axios = require('axios');
class TourController {
  // [GET] /tour
  show(req, res) {
    res.render("tours/tourCard");
  }

  // [GET] /tour/:slug
  detail(req, res) {
    res.render('tours/tourDetail');
    // axios
    //   .get("https://tour-api-dev.herokuapp.com/tour")
    //   .then(data => {
    //     // handle success
    //     console.log(data.data);
    //     res.render('tours/tourDetail',{data})

    //   })
    //   .catch(err =>console.log(err))
  }

  // [GET] /tour/addTourForm
  addTourForm(req, res) {
    res.render("tours/addTourForm");
  }
  // [GET] /tour/addLichTrinhForm
  addLichTrinhForm(req, res) {
    res.render("tours/addLichTrinhForm");
  }
  // [GET] /tour/updateInfoForm
  updateInfoForm(req, res) {
    res.render("tours/updateInfoForm");
  }
  // [GET] /tour/updateLichTrinhForm
  updateLichTrinhForm(req, res) {
    res.render("tours/updateLichTrinhForm");
  }

  // // [PUT] /tour/:id
  // update(req, res) {
  //     Tour.findByIdAndUpdate(req.params.id, req.body)
  //         .lean()
  //         .then(dataUpdate => res.json(dataUpdate))
  //         .catch(err => {
  //             res.json({
  //                 message: err
  //             });
  //         })
  // }

  // // [DELETE] /tour/:id
  // delete(req, res) {
  //     Tour.findByIdAndDelete(req.params.id)
  //         .lean()
  //         .then(dataDelete => res.json(dataDelete))
  //         .catch(err => {
  //             res.json({
  //                 message: err
  //             });
  //         })
  // }
}

module.exports = new TourController();
