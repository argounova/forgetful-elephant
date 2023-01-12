import { Model, DataTypes } from 'sequelize';
import '../config/connection';

class Note extends Model {}

Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        note_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        note_content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

export default Note;