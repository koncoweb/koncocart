const produkDb = require('../../../data-access/produkDb');
const produkSchema = require('../../../validation/schema/produk');
const createValidation = require('../../../validation')(produkSchema.createSchema);
const updateValidation = require('../../../validation')(produkSchema.updateSchema);
const filterValidation = require('../../../validation')(produkSchema.filterValidationSchema);
const produkController = require('./produk');

// use-cases imports with dependency injection
const addProdukUsecase = require('../../../use-case/produk/addProduk')({
  produkDb,
  createValidation 
});
const findAllProdukUsecase = require('../../../use-case/produk/findAllProduk')({
  produkDb,
  filterValidation
});
const getProdukCountUsecase = require('../../../use-case/produk/getProdukCount')({
  produkDb,
  filterValidation
});
const getProdukUsecase = require('../../../use-case/produk/getProduk')({
  produkDb,
  filterValidation
});
const updateProdukUsecase = require('../../../use-case/produk/updateProduk')({
  produkDb,
  updateValidation 
});
const partialUpdateProdukUsecase = require('../../../use-case/produk/partialUpdateProduk')({
  produkDb,
  updateValidation
});
const softDeleteProdukUsecase = require('../../../use-case/produk/softDeleteProduk')({ produkDb });
const softDeleteManyProdukUsecase = require('../../../use-case/produk/softDeleteManyProduk')({ produkDb });
const bulkInsertProdukUsecase = require('../../../use-case/produk/bulkInsertProduk')({ produkDb });
const bulkUpdateProdukUsecase = require('../../../use-case/produk/bulkUpdateProduk')({ produkDb });
const deleteProdukUsecase = require('../../../use-case/produk/deleteProduk')({ produkDb });
const deleteManyProdukUsecase = require('../../../use-case/produk/deleteManyProduk')({ produkDb });

// controller methods mapping
const addProduk = produkController.addProduk(addProdukUsecase);
const findAllProduk = produkController.findAllProduk(findAllProdukUsecase);
const getProdukCount = produkController.getProdukCount(getProdukCountUsecase);
const getProdukById = produkController.getProduk(getProdukUsecase);
const updateProduk = produkController.updateProduk(updateProdukUsecase);
const partialUpdateProduk = produkController.partialUpdateProduk(partialUpdateProdukUsecase);
const softDeleteProduk = produkController.softDeleteProduk(softDeleteProdukUsecase);
const softDeleteManyProduk = produkController.softDeleteManyProduk(softDeleteManyProdukUsecase);
const bulkInsertProduk = produkController.bulkInsertProduk(bulkInsertProdukUsecase);
const bulkUpdateProduk = produkController.bulkUpdateProduk(bulkUpdateProdukUsecase);
const deleteProduk = produkController.deleteProduk(deleteProdukUsecase);
const deleteManyProduk = produkController.deleteManyProduk(deleteManyProdukUsecase);

module.exports = {
  addProduk,
  findAllProduk,
  getProdukCount,
  getProdukById,
  updateProduk,
  partialUpdateProduk,
  softDeleteProduk,
  softDeleteManyProduk,
  bulkInsertProduk,
  bulkUpdateProduk,
  deleteProduk,
  deleteManyProduk,
};