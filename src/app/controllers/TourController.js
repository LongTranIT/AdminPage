const axios = require("axios");
require('dotenv/config');
const apiLink = process.env.RESTFULL_API;
class TourController {
  // [GET] /tour
  show(req, res) {
    axios
      .get(apiLink+"tour")
      .then(data => {
        // handle success
        const tours=data.data;
        res.render('tours/tourCard',{apiLink,tours})
      })
      .catch(err =>console.log(err))
  }

  // [GET] /tour/:slug
  detail(req, res) {
    axios
      .get(apiLink+"tour/"+req.params.slug)
      .then(data => {
        // handle success
        res.render('tours/tourDetail',{tour:data.data})
      })
      .catch(err =>res.json(err))
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
