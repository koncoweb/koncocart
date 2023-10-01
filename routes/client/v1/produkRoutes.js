const express = require('express');
const router = express.Router();
const produkController = require('../../../controller/client/v1/produk');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/produk/create').post(auth(PLATFORM.CLIENT),checkRolePermission,produkController.addProduk);
router.route('/client/api/v1/produk/list').post(auth(PLATFORM.CLIENT),checkRolePermission,produkController.findAllProduk);

router.route('/client/api/v1/produk/count').post(auth(PLATFORM.CLIENT),checkRolePermission,produkController.getProdukCount);
router.route('/client/api/v1/produk/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,produkController.getProdukById);

router.route('/client/api/v1/produk/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,produkController.updateProduk);   
router.route('/client/api/v1/produk/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,produkController.partialUpdateProduk);   

router.route('/client/api/v1/produk/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,produkController.softDeleteProduk);
router.route('/client/api/v1/produk/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,produkController.softDeleteManyProduk);
router.route('/client/api/v1/produk/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,produkController.bulkInsertProduk);

router.route('/client/api/v1/produk/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,produkController.bulkUpdateProduk); 
router.route('/client/api/v1/produk/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,produkController.deleteProduk);
router.route('/client/api/v1/produk/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,produkController.deleteManyProduk);

module.exports = router;
