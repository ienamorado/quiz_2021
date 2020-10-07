const {DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize');

// Definition of the Attachment model:

class Attachment extends Model {
}

Attachment.init({
        resource: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {msg: "resource can not be empty."}
            }
        },
        url: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {msg: "url can not be empty."}
            }
        },
        filename: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {msg: "filename can not be empty."}
            }
        },
        mime: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {msg: "mime can not be empty."}
            }
        }
    }, {
        sequelize
    }
);

module.exports = Attachment;
