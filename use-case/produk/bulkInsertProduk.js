
/**
 *bulkInsertProduk.js
 */

const  produkEntity = require('../../entities/produk');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Produks. {status, message, data}
 */
const bulkInsertProduk = ({
  produkDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let produkEntities = dataToCreate.map(item => produkEntity(item));
  let createdProduk = await produkDb.createMany(produkEntities);
  return response.success({ data:{ count: createdProduk.length } });
};
module.exports = bulkInsertProduk;