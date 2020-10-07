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


// Relation 1-to-1 between User and Attachment
User.belongsTo(Attachment, {as: "photo", foreignKey: 'photoId'});
Attachment.hasOne(User, {as: 'user', foreignKey: 'photoId'});


// Relation N-to-N between Quiz and User:
//    A User has many favourite quizzes.
//    A quiz has many fans (the users who have marked it as favorite)
Quiz.belongsToMany(User, {
    as: 'fans',
    through: 'Favourites',
    foreignKey: 'quizId',
    otherKey: 'userId'
});

User.belongsToMany(Quiz, {
    as: 'favouriteQuizzes',
    through: 'Favourites',
    foreignKey: 'userId',
    otherKey: 'quizId'
});


module.exports = sequelize;
