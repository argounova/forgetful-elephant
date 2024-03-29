const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Note'
      }
);

console.log(Note === sequelize.models.Note);
module.exports = Note;