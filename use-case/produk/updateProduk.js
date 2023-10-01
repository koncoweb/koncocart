/**
 *updateProduk.js
 */

const  produkEntity = require('../../entities/produk');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Produk. {status, message, data}
 */
const updateProduk = ({
  produkDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let updatedProduk = produkEntity(dataToUpdate);
  updatedProduk = await produkDb.update(query,updatedProduk);
  if (!updatedProduk || updatedProduk.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedProduk[0] });
};
module.exports = updateProduk;