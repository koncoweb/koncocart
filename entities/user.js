module.exports = (user) => {

  let newUser = { 
    id: user.id,
    username: user.username,
    password: user.password,
    email: user.email,
    name: user.name,
    isActive: user.isActive,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    addedBy: user.addedBy,
    updatedBy: user.updatedBy,
    userType: user.userType,
    mobileNo: user.mobileNo,
    isDeleted: user.isDeleted,
  };

  // remove undefined values
  if (newUser.id){
    Object.keys(newUser).forEach(key =>{
      if (newUser[key] === undefined) return newUser[key] = null;
    });
  } else {
    Object.keys(newUser).forEach(key => newUser[key] === undefined && delete newUser[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newUser) => {
   *   if (!newUser.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newUser) 
   */
  return Object.freeze(newUser);
};
