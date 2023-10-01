/**
 * checkRolePermission.js
 * @description :: middleware that checks access of APIs
 */
const response = require('../utils/response');
const responseHandler = require('../utils/response/responseHandler');

const checkRolePermission = ({
  userRoleDb, routeRoleDb,projectRouteDb
}) =>async (req, res, next) => {
  if (!req.user) {
    return responseHandler(res, response.unAuthorized());
  } 
  const loggedInUserId = req.user.id;
  let rolesOfUser = await userRoleDb.findAll({
    userId: loggedInUserId,
    isActive: true,
    isDeleted: false 
  }, {
    roleId: 1,
    id: 0,
  });

  if (rolesOfUser && rolesOfUser.length) {
    rolesOfUser = [...new Set((rolesOfUser).map((item) => item.roleId))];
    const route = await projectRouteDb.findOne({
      route_name: replaceAll((req.route.path.toLowerCase()), '/', '_'),
      uri: req.route.path.toLowerCase(),
    });

    if (route) { 
      const allowedRoute = await routeRoleDb.findAll({
        routeId: route.id,
        roleId: { $in: rolesOfUser },
        isActive: true,
        isDeleted: false,
      });
      if (allowedRoute && allowedRoute.length) {
        next();
      } else {
        return responseHandler(res, response.unAuthorized());
      }
    } else {
      return responseHandler(res, response.unAuthorized());
    } 
  } else {
    next();
  } 
}; 

function replaceAll (string, search, replace) {
  return string.split(search).join(replace);
};

module.exports = checkRolePermission;
