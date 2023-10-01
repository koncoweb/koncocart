module.exports = (produk) => {

  let newProduk = { 
    id: produk.id,
    nama: produk.nama,
    harga: produk.harga,
    isActive: produk.isActive,
    isDeleted: produk.isDeleted,
    createdAt: produk.createdAt,
    updatedAt: produk.updatedAt,
    addedBy: produk.addedBy,
    updatedBy: produk.updatedBy,
  };

  // remove undefined values
  if (newProduk.id){
    Object.keys(newProduk).forEach(key =>{
      if (newProduk[key] === undefined) return newProduk[key] = null;
    });
  } else {
    Object.keys(newProduk).forEach(key => newProduk[key] === undefined && delete newProduk[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newProduk) => {
   *   if (!newProduk.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newProduk) 
   */
  return Object.freeze(newProduk);
};
