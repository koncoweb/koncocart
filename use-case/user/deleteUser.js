
/**
 *deleteUser.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : delete record from database.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted User. {status, message, data}
 */
const deleteUser = ({
  userDb,produkDb,bannerDb,imageDb,cartDb,cartItemDb,categoryDb,cityDb,stateDb,countryDb,orderDb,orderItemDb,pincodeDb,productDb,shippingDb,addressDb,walletDb,walletTransactionDb,userAuthSettingsDb,userTokensDb,userRoleDb
}) => async (params,req,res) => {
  let {
    isWarning, query 
  } = params;
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({
      userDb,
      produkDb,
      bannerDb,
      imageDb,
      cartDb,
      cartItemDb,
      categoryDb,
      cityDb,
      stateDb,
      countryDb,
      orderDb,
      orderItemDb,
      pincodeDb,
      productDb,
      shippingDb,
      addressDb,
      walletDb,
      walletTransactionDb,
      userAuthSettingsDb,
      userTokensDb,
      userRoleDb
    });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({
      userDb,
      produkDb,
      bannerDb,
      imageDb,
      cartDb,
      cartItemDb,
      categoryDb,
      cityDb,
      stateDb,
      countryDb,
      orderDb,
      orderItemDb,
      pincodeDb,
      productDb,
      shippingDb,
      addressDb,
      walletDb,
      walletTransactionDb,
      userAuthSettingsDb,
      userTokensDb,
      userRoleDb
    });
    return await deleteWithDependency(query);
  }
};

module.exports = deleteUser;
