const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
  	
    name: {
      type: DataTypes.STRING,
      allowNull: false,

    }
  });

  
};


// get() {
//         // return this.skill + ' points'; // Wrong!
//         return this.getDataValue('skill') + ' points';
//       }

// skill: {
//       type: DataTypes.INTEGER,
//       get() {
//         // return this.skill + ' points'; // Wrong!
//         return this.getDataValue('skill') + ' points';
//       },
//       validate: {
//         min: 0,
//         max: 100,
//         isEven(value) {
//           if(value % 2 !== 0) {
//             throw new Error('Only even values are allowed!')
//           }
//         }
//       }
//     }