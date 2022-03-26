const express=require('express');
const router=express.Router();

const TourController=require('../app/controllers/TourController');

router.get('/',TourController.show);
// router.get('/page/:page',TourController.showPage);
router.get('/addTourForm',TourController.addTourForm);
router.get('/addLichTrinhForm',TourController.addLichTrinhForm);
router.get('/updateInfoForm',TourController.updateInfoForm);
router.get('/updateLichTrinhForm',TourController.updateLichTrinhForm);
router.get('/:slug',TourController.detail);
// router.post('/',TourController.create);
// router.put('/:id',TourController.update);
// router.delete('/:id',TourController.delete);

module.exports=router;
