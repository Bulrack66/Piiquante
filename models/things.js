const mongoose = require('mongoose');
const auth = require('../middleware/auth');
mongoose.set('strictQuery', true)

const thingSchema = mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  mainPepper: { type: String, required: true },
  usersLiked: { type: [ String, auth] , required: true },
  usersDisliked: { type: [ String, auth] , required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);
