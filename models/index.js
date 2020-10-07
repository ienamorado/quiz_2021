const sequelize = require('./sequelize');
const Quiz = require('./quiz');
const User = require('./user');
const Session = require('./session');

// Relation 1-to-N between User and Quiz:
User.hasMany(Quiz, {as: 'quizzes', foreignKey: 'authorId'});
Quiz.belongsTo(User, {as: 'author', foreignKey: 'authorId'});


module.exports = sequelize;
