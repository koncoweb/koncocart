const {
  DataTypes, Op 
} = require('sequelize'); 
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Produk = sequelize.define('produk',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    nama:{ type:DataTypes.STRING },
    harga:{ type:DataTypes.STRING },
    isActive:{ type:DataTypes.BOOLEAN },
    isDeleted:{ type:DataTypes.BOOLEAN },
    createdAt:{ type:DataTypes.DATE },
    updatedAt:{ type:DataTypes.DATE },
    addedBy:{ type:DataTypes.INTEGER },
    updatedBy:{ type:DataTypes.INTEGER }
  }
  ,{
    hooks:{
      beforeCreate: [
        async function (produk,options){
          produk.isActive = true;
          produk.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (produk,options){
          if (produk !== undefined && produk.length) { 
            for (let index = 0; index < produk.length; index++) { 
        
              const element = produk[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Produk.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Produk);
  sequelizePaginate.paginate(Produk);
  return Produk;
}
module.exports = makeModel;