const express = require('express');
const router = express.Router();
const produkController = require('../../controller/admin/produk');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant');
router.route('/admin/produk/create').post(auth(PLATFORM.ADMIN),checkRolePermission,produkController.addProduk);
router.route('/admin/produk/list').post(auth(PLATFORM.ADMIN),checkRolePermission,produkController.findAllProduk);

router.route('/admin/produk/count').post(auth(PLATFORM.ADMIN),checkRolePermission,produkController.getProdukCount);
router.route('/admin/produk/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,produkController.getProdukById);

router.route('/admin/produk/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,produkController.updateProduk);   
router.route('/admin/produk/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,produkController.partialUpdateProduk);   

router.route('/admin/produk/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,produkController.softDeleteProduk);
router.route('/admin/produk/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,produkController.softDeleteManyProduk);
router.route('/admin/produk/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,produkController.bulkInsertProduk);

router.route('/admin/produk/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,produkController.bulkUpdateProduk); 
router.route('/admin/produk/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,produkController.deleteProduk);
router.route('/admin/produk/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,produkController.deleteManyProduk);

module.exports = router;
