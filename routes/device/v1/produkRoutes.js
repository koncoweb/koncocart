const express = require('express');
const router = express.Router();
const produkController = require('../../../controller/device/v1/produk');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/produk/create').post(auth(PLATFORM.DEVICE),checkRolePermission,produkController.addProduk);
router.route('/device/api/v1/produk/list').post(auth(PLATFORM.DEVICE),checkRolePermission,produkController.findAllProduk);

router.route('/device/api/v1/produk/count').post(auth(PLATFORM.DEVICE),checkRolePermission,produkController.getProdukCount);
router.route('/device/api/v1/produk/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,produkController.getProdukById);

router.route('/device/api/v1/produk/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,produkController.updateProduk);   
router.route('/device/api/v1/produk/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,produkController.partialUpdateProduk);   

router.route('/device/api/v1/produk/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,produkController.softDeleteProduk);
router.route('/device/api/v1/produk/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,produkController.softDeleteManyProduk);
router.route('/device/api/v1/produk/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,produkController.bulkInsertProduk);

router.route('/device/api/v1/produk/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,produkController.bulkUpdateProduk); 
router.route('/device/api/v1/produk/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,produkController.deleteProduk);
router.route('/device/api/v1/produk/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,produkController.deleteManyProduk);

module.exports = router;
