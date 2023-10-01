/**
 *softDeleteProduk.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Produk. {status, message, data}
 */
const softDeleteProduk = ({ produkDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate 
  } = params;
  let updatedProduk = await produkDb.update(query, dataToUpdate);
  if (!updatedProduk || updatedProduk.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedProduk[0] });
};
module.exports = softDeleteProduk;
