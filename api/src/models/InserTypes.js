const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id: {
       type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    sumary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
    },
    healthScore: {
      type: DataTypes.INTEGER,
    },
    instructions: {
      type: DataTypes.TEXT,
    },
    dietTypes: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    }
  },{
    // timestamps: false
    timestamps: true,
    createdAt: false,
    updatedAt: 'actualizado'
  });
};

// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('recipe', {
//     idReceta: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//        autoIncrement: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,

//     },
//   resume: {
//       type: DataTypes.STRING,
//       allowNull: false,

//     },
//   score: {
//       type: DataTypes.STRING,
//       allowNull: false,

//     },
//   step: {
//       type: DataTypes.STRING,
//       allowNull: false,

//     }
//   },{
//     // timestamps: false
//     timestamps: true,
//     createdAt: false,
//     updatedAt: 'actualizado'
//   });
// };


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