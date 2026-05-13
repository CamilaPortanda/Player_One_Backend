const User = require('./user');
const UserType = require('./userType');
const Product = require('./product');
const EventType = require('./eventType');
const Minigame = require('./minigame');
const Attempt = require('./attempt');
const InteractionEvent = require('./interactionEvent');


// RELATIONS

User.belongsTo(UserType, {
    foreignKey: 'user_type_id',
    as: 'userType'
});

UserType.hasMany(User, {
    foreignKey: 'user_type_id'
});


Minigame.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});

Product.hasMany(Minigame, {
    foreignKey: 'product_id'
});


Attempt.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

User.hasMany(Attempt, {
    foreignKey: 'user_id'
});


Attempt.belongsTo(Minigame, {
    foreignKey: 'minigame_id',
    as: 'minigame'
});

Minigame.hasMany(Attempt, {
    foreignKey: 'minigame_id'
});


InteractionEvent.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

InteractionEvent.belongsTo(EventType, {
    foreignKey: 'event_type_id',
    as: 'eventType'
});

InteractionEvent.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});

InteractionEvent.belongsTo(Minigame, {
    foreignKey: 'minigame_id',
    as: 'minigame'
});


module.exports = {
    User,
    UserType,
    Product,
    EventType,
    Minigame,
    Attempt,
    InteractionEvent
};