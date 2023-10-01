
/**
 *addProduk.js
 */

const  produkEntity = require('../../entities/produk');
const response = require('../../utils/response');

/**
 * @description : create new record of produk in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addProduk = ({
  produkDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let createdProduk  = produkEntity(dataToCreate);
  createdProduk = await produkDb.createOne(createdProduk );
  return response.success({ data:createdProduk });
};
module.exports = addProduk;