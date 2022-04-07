const axios = require("axios");
require('dotenv/config');
const apiLink = process.env.RESTFULL_API;
class TourController {
  // [GET] /tour
  show(req, res) {
    axios
      .get(apiLink + "tour")
      .then(data => {
        // handle success
        const tours = data.data;
        res.render('tours/tourCard', { apiLink, tours })
      })
      .catch(err => console.log(err))
  }

  // [GET] /tour/:slug
  detail(req, res) {
    axios
      .get(apiLink + "tour/" + req.params.slug)
      .then(data => {
        // handle success
        res.render('tours/tourDetail', { tour: data.data })
      })
      .catch(err => res.json(err))
  }

  // [GET] /tour/addTourForm
  addTourForm(req, res) {
    res.render("tours/addTourForm");
  }
  // [GET] /tour/addLichTrinhForm
  addLichTrinhForm(req, res) {
    res.render("tours/addLichTrinhForm");
  }
  // [GET] /tour/updateInfoForm?_slug
  updateInfoForm(req, res) {
    Promise.all([
      axios
        .get(apiLink + "tour/" + req.query['_slug']),
      axios
        .get(apiLink + "huongdanvien")
    ])
      .then(([data, huongdanviens]) => {
        res.render('tours/updateInfoForm', { tour: data.data, huongdanviens: huongdanviens.data })
      })
      .catch(err => res.json(err))

  }
  // [GET] /tour/updateLichTrinhForm?_id
  updateLichTrinhForm(req, res) {
    Promise.all([
      axios
        .get(apiLink + "lichtrinh/" + req.query['_id']),
      axios
        .get(apiLink + "diadiem")
    ])
      .then(([data, diadiems]) => {
        res.render('tours/updateLichTrinhForm', { lichtrinh: data.data, diadiems: diadiems.data })
      })
      .catch(err => res.json(err))
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

  // [DELETE] /tour/:id
  delete(req, res) {
    axios
      .delete(apiLink + 'tour/' + req.params.id)
      .then(data => {
        res.redirect('/tour');
      });
  }
}

module.exports = new TourController();
