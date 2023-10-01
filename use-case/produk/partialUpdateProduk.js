/**
 *partialUpdateProduk.js
 */

const  produkEntity = require('../../entities/produk');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Produk. {status, message, data}
 */
const partialUpdateProduk = ({ produkDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedProduk = await produkDb.update(query,dataToUpdate);
  if (!updatedProduk || updatedProduk.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedProduk[0] });
};
module.exports = partialUpdateProduk;