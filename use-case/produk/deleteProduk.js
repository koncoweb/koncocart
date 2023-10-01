
/**
 *deleteProduk.js
 */

const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Produk. {status, message, data}
 */
const deleteProduk = ({ produkDb }) => async (params, req, res) => {
  let { query } = params;
  let deletedProduk = await produkDb.destroy(query);
  if (!deletedProduk || deletedProduk.length == 0){
    return response.recordNotFound({ });
  }
  return response.success({ data: deletedProduk[0] });
};

module.exports = deleteProduk;
