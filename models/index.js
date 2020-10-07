const sequelize = require('./sequelize');
const Quiz = require('./quiz');
const User = require('./user');
const Attachment = require('./attachment');
const Session = require('./session');

// Relation 1-to-N between User and Quiz:
User.hasMany(Quiz, {as: 'quizzes', foreignKey: 'authorId'});
Quiz.belongsTo(User, {as: 'author', foreignKey: 'authorId'});


// Relation 1-to-1 between Quiz and Attachment
Attachment.hasOne(Quiz, {as: 'quiz', foreignKey: 'attachmentId'});
Quiz.belongsTo(Attachment, {as: 'attachment', foreignKey: 'attachmentId'});


module.exports = sequelize;
